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

## 交互式案例回放

<p>这里保留原 Web Replay 的完整案例浏览方式。7 个案例覆盖 DexYCB 基础诊断、两段 DexUMI 操作序列和三组夹爪式 UMI 对照；可以切换三维 Rerun 回放、视频、诊断通道和不同计算后端。</p>

<div class="interactive-embed-shell interactive-embed-shell--ergonomics">
  <iframe src="{{ '/assets/interactive/ergonomics-full/index.html' | relative_url }}" title="MANO 人体工效完整证据浏览器" loading="lazy"></iframe>
</div>

<p><a class="button primary" href="{{ '/projects/dexumi-codesign/ergonomics/replay/' | relative_url }}">全屏打开案例浏览器</a></p>

## 视频证据

<div class="video-grid video-grid--three">
  <div class="project-video">
    <video controls muted playsinline preload="metadata"><source src="{{ '/assets/video/dexumi/09_dexumi_wearable_diagnostics.mp4' | relative_url }}" type="video/mp4"></video>
    <p>DexUMI 穿戴状态与人体侧诊断</p>
  </div>
  <div class="project-video">
    <video controls muted playsinline preload="metadata"><source src="{{ '/assets/video/dexumi/10_dexycb_load_fatigue_evaluation.mp4' | relative_url }}" type="video/mp4"></video>
    <p>DexYCB 操作序列的关节、肌肉与疲劳诊断</p>
  </div>
  <div class="project-video">
    <video controls muted playsinline preload="metadata"><source src="{{ '/assets/video/dexumi/11_gripper_umi_ergonomics_evaluation.mp4' | relative_url }}" type="video/mp4"></video>
    <p>夹爪式 UMI 的穿戴与人体工效评价</p>
  </div>
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

<p class="source-note"><strong>来源：</strong>人手模型与操作序列分别基于 <a href="https://mano.is.tue.mpg.de/" target="_blank" rel="noopener">MANO</a> 和 <a href="https://dex-ycb.github.io/" target="_blank" rel="noopener">DexYCB</a>；DexUMI 结构参考 <a href="https://github.com/real-stanford/DexUMI" target="_blank" rel="noopener">Stanford REAL Lab 官方仓库</a>。页面重放预计算的工程诊断结果，不在浏览器端重新求解接触、肌骨或疲劳模型。</p>
