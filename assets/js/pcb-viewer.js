(() => {
  const viewer = document.querySelector("[data-pcb-viewer]");
  if (!viewer) return;

  const image = viewer.querySelector(".pcb-viewer-canvas img");
  const canvas = viewer.querySelector(".pcb-viewer-canvas");
  const caption = viewer.querySelector("[data-pcb-caption]");
  const root = viewer.dataset.assetRoot;
  const viewNames = { all: "叠层", top: "顶层", bottom: "底层" };
  let board = "controller-top";
  let boardTitle = "STM32F405 主控顶板";
  let view = "all";
  let scale = 1;
  let offsetX = 0;
  let offsetY = 0;
  let dragging = false;
  let startX = 0;
  let startY = 0;

  function renderTransform() {
    image.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
  }

  function resetTransform() {
    scale = 1;
    offsetX = 0;
    offsetY = 0;
    renderTransform();
  }

  function updateImage() {
    image.src = `${root}${board}-${view}.svg`;
    image.alt = `${boardTitle}${viewNames[view]}预览`;
    caption.textContent = `${boardTitle} · ${viewNames[view]}`;
    resetTransform();
  }

  viewer.querySelectorAll("[data-pcb-board]").forEach((button) => {
    button.addEventListener("click", () => {
      viewer.querySelectorAll("[data-pcb-board]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      board = button.dataset.pcbBoard;
      boardTitle = button.dataset.pcbTitle;
      updateImage();
    });
  });

  viewer.querySelectorAll("[data-pcb-view]").forEach((button) => {
    button.addEventListener("click", () => {
      viewer.querySelectorAll("[data-pcb-view]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      view = button.dataset.pcbView;
      updateImage();
    });
  });

  viewer.querySelector("[data-pcb-reset]").addEventListener("click", resetTransform);
  canvas.addEventListener("dblclick", resetTransform);

  canvas.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();
      const previous = scale;
      scale = Math.min(4, Math.max(1, scale * (event.deltaY < 0 ? 1.14 : 0.88)));
      if (scale === 1) {
        offsetX = 0;
        offsetY = 0;
      } else {
        const rect = canvas.getBoundingClientRect();
        const cursorX = event.clientX - rect.left - rect.width / 2;
        const cursorY = event.clientY - rect.top - rect.height / 2;
        offsetX -= cursorX * (scale / previous - 1);
        offsetY -= cursorY * (scale / previous - 1);
      }
      renderTransform();
    },
    { passive: false }
  );

  canvas.addEventListener("pointerdown", (event) => {
    if (scale <= 1) return;
    dragging = true;
    startX = event.clientX - offsetX;
    startY = event.clientY - offsetY;
    canvas.setPointerCapture(event.pointerId);
    canvas.classList.add("dragging");
  });

  canvas.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    offsetX = event.clientX - startX;
    offsetY = event.clientY - startY;
    renderTransform();
  });

  function stopDragging(event) {
    if (!dragging) return;
    dragging = false;
    canvas.classList.remove("dragging");
    if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
  }

  canvas.addEventListener("pointerup", stopDragging);
  canvas.addEventListener("pointercancel", stopDragging);
})();
