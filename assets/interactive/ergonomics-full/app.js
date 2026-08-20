const $ = (selector) => document.querySelector(selector);

const state = { catalog: null, runtime: null, entries: [], filtered: [], selected: null, view: "viewer" };

function text(value, fallback = "—") {
  return value === undefined || value === null || value === "" ? fallback : String(value);
}

function safeMediaUrl(value) {
  if (!value) return "";
  try {
    const url = new URL(value, window.location.href);
    return ["http:", "https:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}

function normalizeEntry(entry) {
  if (!entry.viewer?.artifact) return entry;
  const artifactUrl = safeMediaUrl(entry.viewer.artifact.path);
  const localRerunPort = state.runtime?.rerun_web_port;
  const rerunBase = localRerunPort
    ? `${window.location.protocol}//${window.location.hostname}:${localRerunPort}/`
    : `https://app.rerun.io/version/${encodeURIComponent(entry.viewer.rerun_version)}/index.html`;
  const viewerUrl = entry.viewer.kind === "rerun" && artifactUrl
    ? `${rerunBase}?url=${encodeURIComponent(artifactUrl)}`
    : null;
  const fallbackVideoUrl = safeMediaUrl(entry.viewer.video_artifact?.path);
  return {
    ...entry,
    scenario: entry.trajectory_id,
    trajectory_label: entry.trajectory_id,
    viewer_url: viewerUrl,
    video_url: entry.viewer.kind === "video" ? artifactUrl : fallbackVideoUrl,
  };
}

function optionValues(key) {
  return [...new Set(state.entries.map((entry) => entry[key]).filter(Boolean))].sort();
}

function fillSelect(selector, values) {
  const select = $(selector);
  for (const value of values) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  }
}

function filterEntries() {
  const query = $("#search").value.trim().toLocaleLowerCase();
  const family = $("#family").value;
  const scenario = $("#scenario").value;
  state.filtered = state.entries.filter((entry) => {
    const haystack = [entry.id, entry.title, entry.umi_family, entry.scenario, entry.trajectory_label]
      .map((value) => text(value, "").toLocaleLowerCase()).join(" ");
    return (!query || haystack.includes(query))
      && (!family || entry.umi_family === family)
      && (!scenario || entry.scenario === scenario);
  });
  if (!state.filtered.some((entry) => entry.id === state.selected?.id)) {
    state.selected = state.filtered[0] ?? null;
  }
  renderList();
  renderScene();
}

function renderList() {
  const list = $("#scene-list");
  list.replaceChildren();
  $("#result-count").textContent = `${state.filtered.length} 条轨迹`;
  for (const entry of state.filtered) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = entry.id === state.selected?.id ? "scene active" : "scene";
    button.setAttribute("aria-current", entry.id === state.selected?.id ? "true" : "false");
    const title = document.createElement("strong");
    title.textContent = text(entry.title, entry.id);
    const meta = document.createElement("span");
    meta.textContent = [entry.umi_family, entry.trajectory_label].filter(Boolean).join(" · ");
    button.append(title, meta);
    button.addEventListener("click", () => { state.selected = entry; renderList(); renderScene(); });
    list.append(button);
  }
}

function channelRow(channel) {
  const row = document.createElement("article");
  row.className = "channel";
  const heading = document.createElement("div");
  const name = document.createElement("strong");
  name.textContent = text(channel.name);
  const unit = document.createElement("span");
  unit.textContent = text(channel.unit);
  heading.append(name, unit);
  const evidence = document.createElement("p");
  evidence.textContent = `${text(channel.backend)} · ${text(channel.truth_level)}`;
  const availability = document.createElement("p");
  availability.className = `availability ${text(channel.availability, "MISSING").toLowerCase()}`;
  availability.textContent = channel.availability === "MISSING"
    ? `不可用（${text(channel.missing_semantics, "NOT_AVAILABLE")}）`
    : text(channel.availability);
  row.append(heading, evidence, availability);
  return row;
}

function selectView(requested) {
  const entry = state.selected ?? {};
  const viewerUrl = safeMediaUrl(entry.viewer_url);
  const videoUrl = safeMediaUrl(entry.video_url);
  const view = requested === "video" && videoUrl ? "video" : viewerUrl ? "viewer" : videoUrl ? "video" : "empty";
  state.view = view;
  const frame = $("#viewer-frame");
  const video = $("#video");
  frame.hidden = view !== "viewer";
  video.hidden = view !== "video";
  $("#empty-viewer").hidden = view !== "empty";
  if (view === "viewer" && frame.src !== viewerUrl) frame.src = viewerUrl;
  if (view === "video" && video.src !== videoUrl) video.src = videoUrl;
  for (const button of document.querySelectorAll("[data-view]")) {
    button.classList.toggle("active", button.dataset.view === view);
  }
}

function renderScene() {
  const entry = state.selected;
  const index = entry ? state.filtered.findIndex((candidate) => candidate.id === entry.id) : -1;
  $("#previous").disabled = index <= 0;
  $("#next").disabled = index < 0 || index >= state.filtered.length - 1;
  $("#scene-title").textContent = entry ? text(entry.title, entry.id) : "没有符合条件的场景";
  $("#scene-meta").textContent = entry
    ? [entry.umi_family, entry.scenario, entry.trajectory_label].filter(Boolean).join(" · ")
    : "";

  const channels = $("#channels");
  channels.replaceChildren(...(entry?.channels ?? []).map(channelRow));
  if (!channels.children.length) channels.textContent = "没有声明通道。";

  const blockers = $("#blockers");
  blockers.replaceChildren();
  for (const blocker of entry?.blockers ?? []) {
    const item = document.createElement("li");
    item.textContent = blocker;
    blockers.append(item);
  }
  if (!blockers.children.length) {
    const item = document.createElement("li");
    item.textContent = "未声明；不等同于已验证。";
    blockers.append(item);
  }
  $("#claim-boundary").textContent = text(entry?.claim_boundary, "未声明结论边界。不可生成舒适度或安全结论。");

  const hasViewer = Boolean(safeMediaUrl(entry?.viewer_url));
  const hasVideo = Boolean(safeMediaUrl(entry?.video_url));
  $("#view-switch").hidden = !(hasViewer && hasVideo);
  selectView(hasViewer ? "viewer" : hasVideo ? "video" : "empty");
}

function move(offset) {
  const index = state.filtered.findIndex((entry) => entry.id === state.selected?.id);
  const next = state.filtered[index + offset];
  if (next) { state.selected = next; renderList(); renderScene(); }
}

async function loadCatalog() {
  const catalogUrl = new URLSearchParams(window.location.search).get("catalog") || "catalog.json";
  try {
    try {
      const runtimeResponse = await fetch("runtime.json", { cache: "no-store" });
      if (runtimeResponse.ok) state.runtime = await runtimeResponse.json();
    } catch {
      state.runtime = null;
    }
    const response = await fetch(catalogUrl, { cache: "no-store" });
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    state.catalog = await response.json();
    const entries = Array.isArray(state.catalog.scenes) ? state.catalog.scenes : state.catalog.entries;
    state.entries = Array.isArray(entries) ? entries.map(normalizeEntry) : [];
    $("#catalog-boundary").textContent = text(state.catalog.claim_boundary, "诊断回放；不生成最终舒适度或安全结论。可用通道 ≠ 缺失通道为零。");
    fillSelect("#family", optionValues("umi_family"));
    fillSelect("#scenario", optionValues("scenario"));
    filterEntries();
  } catch (error) {
    $("#catalog-boundary").textContent = `无法读取 ${catalogUrl}`;
    $("#scene-title").textContent = "Catalog 加载失败";
    renderScene();
    $("#claim-boundary").textContent = error.message;
  }
}

for (const selector of ["#search", "#family", "#scenario"]) {
  $(selector).addEventListener(selector === "#search" ? "input" : "change", filterEntries);
}
$("#previous").addEventListener("click", () => move(-1));
$("#next").addEventListener("click", () => move(1));
$("#view-switch").addEventListener("click", (event) => {
  if (event.target.dataset.view) selectView(event.target.dataset.view);
});
loadCatalog();
