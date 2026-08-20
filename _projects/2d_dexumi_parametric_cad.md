---
layout: page
title: 参数化 CAD 重建与 Co-design 基础设施
description: 在原生 CAD、STEP/B-rep 与机器人仿真资产之间建立可验证的参数化重建链。
kicker: DexUMI Co-design · Module 04
category: internship-module
permalink: /projects/dexumi-codesign/parametric-cad/
---

{% include dexumi-module-nav.html %}

<p class="project-lead">这一模块把 CAD 从“只能查看的几何文件”转化为<strong>可解释的设计参数、可在 Linux 重建的几何和可验证的机器人资产</strong>。核心不是任意 STEP 自动恢复原始特征树，而是在证据充分的范围内重建受约束设计，并用原生 CAD 对照和几何回归守住结果边界。</p>

## 重建流程演示

<div class="project-video project-video--hero">
  <video controls muted playsinline preload="metadata"><source src="{{ '/assets/video/dexumi/12_parametric_cad_reconstruction.mp4' | relative_url }}" type="video/mp4"></video>
  <p>参数化 CAD 重建、跨平台生成与证据审计流程演示</p>
</div>

## 交互式 CAD 证据台

<p>下面直接嵌入完整 CAD Co-design Flight Deck。可在 DexUMI XHand、Pollen PincOpen、DFKI Double Pendulum 与 UMI3.0 Wearable 间切换，查看名义/参数化变体、装配级 3D、B-rep 面级诊断、候选设计轴和各阶段验证结果。</p>

<div class="interactive-embed-shell interactive-embed-shell--cad">
  <iframe src="{{ '/assets/interactive/cad/co-design-flight-deck/index.html' | relative_url }}" title="CAD Co-design Assembly Flight Deck" loading="lazy"></iframe>
</div>

<p><a class="button primary" href="{{ '/projects/dexumi-codesign/parametric-cad/observatory/' | relative_url }}">全屏打开 CAD 证据台</a></p>

<div class="evidence-metrics" aria-label="参数化 CAD 交互范围">
  <div><strong>4</strong><span>类完整装配体</span></div>
  <div><strong>8</strong><span>名义/参数化状态</span></div>
  <div><strong>B-rep</strong><span>面级候选特征诊断</span></div>
  <div><strong>WebGL</strong><span>离线完整交互</span></div>
</div>

## 技术路线

<div class="stage-grid stage-grid--three">
  <div><span>01</span><strong>捕获几何真值</strong><p>从 SolidWorks 原生工程或 STEP/B-rep 提取特征、装配、位姿与 oracle 几何，并记录输入与环境 hash。</p></div>
  <div><span>02</span><strong>受约束参数化重建</strong><p>将可证明的候选特征写入 kernel-neutral Feature IR，在 Linux 以 FreeCAD/OCCT/build123d 重建。</p></div>
  <div><span>03</span><strong>验证与机器人资产</strong><p>执行快速/精确几何比较和装配审计，输出 FCStd、STEP、STL、URDF/MJCF 与证据清单。</p></div>
</div>

## 设计空间为什么选择 CAD 特征

少量几何尺寸虽然容易解释，却难以表达复杂结构；直接搜索 Mesh 顶点维度过高，也缺少装配和制造语义。当前采用 CAD 特征、装配参数和受保护接口作为中尺度设计变量，使候选设计既能批量生成，又能回到几何和装配证据中逐项核验。

<p class="source-note"><strong>来源：</strong>DexUMI/XHand 基线参考 <a href="https://github.com/real-stanford/DexUMI" target="_blank" rel="noopener">real-stanford/DexUMI</a>；其余公开装配体在 Flight Deck 内按项目名称标注。本站发布的是经确认可公开的装配几何、参数化变体与浏览器端诊断结果，不包含公司内部产品 CAD 或未授权设计资产。</p>
