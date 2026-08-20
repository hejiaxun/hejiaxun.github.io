---
layout: page
title: MANO 人体工效与生物力学诊断基础设施
description: 将人手运动、接触载荷、关节与肌肉力学、疲劳模型组织为可复用的人体侧工程诊断链。
kicker: DexUMI Co-design · Module 03
category: internship-module
permalink: /projects/dexumi-codesign/ergonomics/
---

{% include dexumi-module-nav.html %}

<p class="project-lead">这一模块不是输出单一“舒适度分数”，而是把穿戴轨迹逐层转换为<strong>接触、关节负荷、肌肉募集与疲劳/恢复</strong>等工程指标，用于比较不同人手、装置和任务条件下的人体侧差异。</p>

<div class="interactive-model-shell">
  <div class="interactive-model-stage">
    <model-viewer src="{{ '/assets/interactive/dexumi-xhand/dexumi_xhand.glb' | relative_url }}" alt="DexUMI–XHand 开源设备名义构型三维模型" camera-controls auto-rotate shadow-intensity="0.8" environment-image="neutral" interaction-prompt="auto"></model-viewer>
  </div>
  <div class="interactive-model-copy">
    <p class="eyebrow">OPEN-SOURCE DEVICE CONTEXT</p>
    <h2>DexUMI–XHand 交互式设备查看</h2>
    <p>拖动旋转、滚轮缩放。这里展示的是公开 DexUMI/XHand 几何在名义关节状态下的设备上下文，不是人体工效结果，也不包含许可受限的 MANO 或 DexYCB 数据。</p>
    <p><a class="button primary" href="{{ '/projects/dexumi-codesign/ergonomics/replay/' | relative_url }}">全屏查看三维模型</a></p>
  </div>
</div>

## 评价对象

<div class="case-summary-grid">
  <div><strong>DexUMI 穿戴轨迹</strong><p>消费运动学穿戴与物理控制模块输出，检查接触区域、关节负荷和疲劳相关代理。</p></div>
  <div><strong>DexYCB 公开序列</strong><p>在公开人手—物体操作序列上复用同一诊断接口，验证跨任务的数据组织与回放。</p></div>
  <div><strong>夹爪式 UMI</strong><p>面向另一类人机接口复用人体侧诊断链，用一致指标比较不同装置形态。</p></div>
</div>

## 分层诊断链

<div class="ergonomics-chain" aria-label="人体工效诊断链">
  <div><span>01</span><strong>人手与轨迹</strong><small>MANO 手型 · 姿态 · 运动</small></div><i>→</i>
  <div><span>02</span><strong>接触与载荷</strong><small>刚/软体 · 压力/剪切代理</small></div><i>→</i>
  <div><span>03</span><strong>关节与肌肉</strong><small>JᵀF · 肌肉募集 · 力矩闭合</small></div><i>→</i>
  <div><span>04</span><strong>疲劳与回放</strong><small>疲劳/恢复 · 分层结果 · 证据导出</small></div>
</div>

## 方法与来源

人体表示与公开序列分别参考 <a href="https://mano.is.tue.mpg.de/" target="_blank" rel="noopener">MANO</a> 和 <a href="https://dex-ycb.github.io/" target="_blank" rel="noopener">DexYCB</a>；刚体、接触与可视化链路使用或适配 <a href="https://mujoco.org/" target="_blank" rel="noopener">MuJoCo</a>、<a href="https://github.com/newton-physics/newton" target="_blank" rel="noopener">Newton</a>、<a href="https://gmsh.info/" target="_blank" rel="noopener">Gmsh</a> 与 <a href="https://rerun.io/" target="_blank" rel="noopener">Rerun</a>，软组织与肌骨接口面向 <a href="https://www.artisynth.org/" target="_blank" rel="noopener">ArtiSynth</a>、<a href="https://febio.org/" target="_blank" rel="noopener">FEBio</a>、<a href="https://www.myosuite.org/" target="_blank" rel="noopener">MyoSuite</a> 和 <a href="https://opensim.stanford.edu/" target="_blank" rel="noopener">OpenSim</a> 组织。

<p class="source-note"><strong>三维资产声明：</strong>页面中的 DexUMI 基线参考 <a href="https://github.com/real-stanford/DexUMI" target="_blank" rel="noopener">Stanford REAL Lab 官方仓库</a>；XHand 模型依其仓库内 BSD 3-Clause 声明使用。交互页只发布许可明确的设备几何。MANO、DexYCB 及项目内部轨迹不在本站重新分发。</p>

<script type="module" src="{{ '/assets/interactive/vendor/model-viewer.min.js' | relative_url }}"></script>
