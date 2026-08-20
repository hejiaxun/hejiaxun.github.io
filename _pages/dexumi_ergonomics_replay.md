---
layout: page
title: 人体工效交互式案例回放
description: 在 DexUMI、DexYCB 与夹爪式 UMI 三类案例之间切换，查看同一套 MANO 人体工效诊断链如何复用。
kicker: DexUMI Co-design · Module 03
permalink: /projects/dexumi-codesign/ergonomics/replay/
---

<p><a class="text-link" href="{{ '/projects/dexumi-codesign/ergonomics/' | relative_url }}">← 返回人体工效模块</a></p>

<div class="replay-shell" data-replay>
  <div class="replay-case-list" role="tablist" aria-label="评价案例">
    <button class="replay-case active" type="button" role="tab" aria-selected="true"
      data-title="DexUMI 穿戴诊断"
      data-description="回放 DexUMI 穿戴运动与人体侧诊断结果，观察装置状态、接触关系及负荷指标的同步变化。"
      data-tags="MANO|DexUMI|穿戴诊断"
      data-source="{{ '/assets/video/dexumi/09_dexumi_wearable_diagnostics.mp4' | relative_url }}">
      <strong>DexUMI</strong><span>穿戴诊断</span>
    </button>
    <button class="replay-case" type="button" role="tab" aria-selected="false"
      data-title="DexYCB 操作序列"
      data-description="在公开 DexYCB 人手—物体操作序列上复用负荷、肌肉募集与疲劳/恢复评价。"
      data-tags="MANO|DexYCB|负荷与疲劳"
      data-source="{{ '/assets/video/dexumi/10_dexycb_load_fatigue_evaluation.mp4' | relative_url }}">
      <strong>DexYCB</strong><span>操作序列</span>
    </button>
    <button class="replay-case" type="button" role="tab" aria-selected="false"
      data-title="夹爪式 UMI 评价"
      data-description="将相同的人体侧诊断接口复用于夹爪式 UMI，比较不同穿戴接口形态下的运动与人体指标。"
      data-tags="MANO|夹爪式 UMI|跨装置复用"
      data-source="{{ '/assets/video/dexumi/11_gripper_umi_ergonomics_evaluation.mp4' | relative_url }}">
      <strong>夹爪式 UMI</strong><span>人体工效评价</span>
    </button>
  </div>

  <div class="replay-stage">
    <video controls playsinline preload="metadata" aria-label="当前案例视频">
      <source src="{{ '/assets/video/dexumi/09_dexumi_wearable_diagnostics.mp4' | relative_url }}" type="video/mp4">
    </video>
    <div class="replay-copy">
      <p class="eyebrow">CURRENT CASE</p>
      <h2>DexUMI 穿戴诊断</h2>
      <p class="replay-description">回放 DexUMI 穿戴运动与人体侧诊断结果，观察装置状态、接触关系及负荷指标的同步变化。</p>
      <div class="replay-tags"><span>MANO</span><span>DexUMI</span><span>穿戴诊断</span></div>
    </div>
  </div>
</div>

<p class="project-attribution"><strong>数据与方法说明：</strong>页面只展示经授权的脱敏视频。MANO 与 DexYCB 分别来自其公开项目；人体工效链使用或适配 MuJoCo、Newton、Gmsh、ArtiSynth、FEBio、MyoSuite / OpenSim 与 Rerun 等公开工具。原始求解文件、内部路径及受许可约束资产不在本站发布。</p>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var root = document.querySelector('[data-replay]');
    if (!root) return;
    var video = root.querySelector('video');
    var title = root.querySelector('.replay-copy h2');
    var description = root.querySelector('.replay-description');
    var tags = root.querySelector('.replay-tags');
    root.querySelectorAll('.replay-case').forEach(function (button) {
      button.addEventListener('click', function () {
        root.querySelectorAll('.replay-case').forEach(function (item) {
          item.classList.remove('active');
          item.setAttribute('aria-selected', 'false');
        });
        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');
        title.textContent = button.dataset.title;
        description.textContent = button.dataset.description;
        tags.innerHTML = button.dataset.tags.split('|').map(function (tag) {
          return '<span>' + tag + '</span>';
        }).join('');
        video.pause();
        video.src = button.dataset.source;
        video.load();
      });
    });
  });
</script>
