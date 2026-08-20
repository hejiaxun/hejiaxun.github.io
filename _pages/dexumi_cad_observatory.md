---
layout: page
title: OpenBionics MainBar 交互式 CAD 对照
description: 查看公开 OpenBionics MainBar 的参数化重建结果与参考几何叠加。
kicker: DexUMI Co-design · Module 04
permalink: /projects/dexumi-codesign/parametric-cad/observatory/
---

<p><a class="text-link" href="{{ '/projects/dexumi-codesign/parametric-cad/' | relative_url }}">← 返回参数化 CAD 模块</a></p>

<div class="interactive-model-shell interactive-model-shell--viewer">
  <div class="interactive-model-stage interactive-model-stage--dark">
    <model-viewer src="{{ '/assets/interactive/cad/openbionics-mainbar/overlay.glb' | relative_url }}" alt="OpenBionics MainBar 参数化重建与参考几何叠加模型" camera-controls auto-rotate shadow-intensity="0.8" environment-image="neutral" interaction-prompt="auto"></model-viewer>
  </div>
  <div class="interactive-model-copy">
    <p class="eyebrow">REFERENCE / REBUILD OVERLAY</p>
    <h2>重建几何与参考几何叠加</h2>
    <p>旋转和缩放模型，观察限定参数化算子生成的零件与参考几何是否重合。验证记录显示 6 个特征完成转换、3 个深度参数显式化，最大表面距离为 0.000612 mm。</p>
  </div>
</div>

## 证据边界

- 该结果是一个公开单零件的静态几何对照，不代表整个 OpenBionics 装配的关节语义、闭合行为或制造可用性。
- STEP/B-rep 的几何观测不等于恢复原始设计意图；只有具备确定重建算子的候选参数才进入可执行设计空间。
- 几何通过不自动意味着装配、碰撞、材料、惯量或人体工效结果通过，这些需要下游独立验证。

<p class="source-note"><strong>来源与许可：</strong><a href="https://github.com/OpenBionics/Prosthetic-Hands" target="_blank" rel="noopener">OpenBionics/Prosthetic-Hands</a>，commit <code>639aca3a53c682d00c5a10d9c96e47c74e04a57c</code>，源文件 <code>CAD/3D Design/Right_hand/Whiffletree/src/mainBar.SLDPRT</code>，CC BY-SA 4.0。</p>

<script type="module" src="{{ '/assets/interactive/vendor/model-viewer.min.js' | relative_url }}"></script>
