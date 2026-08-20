---
layout: page
title: DexUMI–XHand 交互式设备查看
description: 基于公开 DexUMI/XHand 资产生成的名义构型三维查看页。
kicker: DexUMI Co-design · Module 03
permalink: /projects/dexumi-codesign/ergonomics/replay/
---

<p><a class="text-link" href="{{ '/projects/dexumi-codesign/ergonomics/' | relative_url }}">← 返回人体工效模块</a></p>

<div class="interactive-model-shell interactive-model-shell--viewer">
  <div class="interactive-model-stage">
    <model-viewer src="{{ '/assets/interactive/dexumi-xhand/dexumi_xhand.glb' | relative_url }}" alt="DexUMI–XHand 开源设备名义构型三维模型" camera-controls auto-rotate shadow-intensity="0.9" environment-image="neutral" interaction-prompt="auto"></model-viewer>
  </div>
  <div class="interactive-model-copy">
    <p class="eyebrow">HOW TO USE</p>
    <h2>拖动旋转，滚轮缩放</h2>
    <p>该模型用于说明人体工效诊断所面对的设备结构和穿戴接口。它不包含人体、任务轨迹、接触力或舒适度结论。</p>
    <div class="replay-tags"><span>DexUMI</span><span>XHand</span><span>名义构型</span></div>
  </div>
</div>

<p class="source-note"><strong>来源与许可：</strong>DexUMI 基线来自 <a href="https://github.com/real-stanford/DexUMI" target="_blank" rel="noopener">real-stanford/DexUMI</a>；XHand 模型遵循上游仓库中的 BSD 3-Clause 模型许可。本页三维文件由公开 URDF/mesh 在名义关节状态下合并生成，不代表原创设备设计。</p>

<script type="module" src="{{ '/assets/interactive/vendor/model-viewer.min.js' | relative_url }}"></script>
