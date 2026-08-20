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

<div class="interactive-model-shell">
  <div class="interactive-model-stage interactive-model-stage--dark">
    <model-viewer src="{{ '/assets/interactive/cad/openbionics-mainbar/overlay.glb' | relative_url }}" alt="OpenBionics MainBar 参数化重建与参考几何叠加模型" camera-controls auto-rotate shadow-intensity="0.75" environment-image="neutral" interaction-prompt="auto"></model-viewer>
  </div>
  <div class="interactive-model-copy">
    <p class="eyebrow">PUBLIC CAD VALIDATION CASE</p>
    <h2>OpenBionics MainBar 几何对照</h2>
    <p>交互模型叠加显示参数化重建结果与参考几何，用于观察二者的空间一致性。该公开案例只证明单零件、限定算子下的几何重建，不代表整套装配或制造等价。</p>
    <p><a class="button primary" href="{{ '/projects/dexumi-codesign/parametric-cad/observatory/' | relative_url }}">打开交互式几何对照</a></p>
  </div>
</div>

<div class="evidence-metrics" aria-label="OpenBionics MainBar 验证指标">
  <div><strong>6</strong><span>个特征完成转换</span></div>
  <div><strong>3</strong><span>个显式深度参数</span></div>
  <div><strong>0.000612 mm</strong><span>最大表面距离</span></div>
  <div><strong>PASS</strong><span>静态几何对照</span></div>
</div>

## 技术路线

<div class="stage-grid stage-grid--three">
  <div><span>01</span><strong>捕获几何真值</strong><p>从 SolidWorks 原生工程或 STEP/B-rep 提取特征、装配、位姿与 oracle 几何，并记录输入与环境 hash。</p></div>
  <div><span>02</span><strong>受约束参数化重建</strong><p>将可证明的候选特征写入 kernel-neutral Feature IR，在 Linux 以 FreeCAD/OCCT/build123d 重建。</p></div>
  <div><span>03</span><strong>验证与机器人资产</strong><p>执行快速/精确几何比较和装配审计，输出 FCStd、STEP、STL、URDF/MJCF 与证据清单。</p></div>
</div>

## 设计空间为什么选择 CAD 特征

少量几何尺寸虽然容易解释，却难以表达复杂结构；直接搜索 Mesh 顶点维度过高，也缺少装配和制造语义。当前采用 CAD 特征、装配参数和受保护接口作为中尺度设计变量，使候选设计既能批量生成，又能回到几何和装配证据中逐项核验。

<p class="source-note"><strong>公开案例声明：</strong>交互示例来自 <a href="https://github.com/OpenBionics/Prosthetic-Hands" target="_blank" rel="noopener">OpenBionics/Prosthetic-Hands</a> 的 <code>mainBar.SLDPRT</code>，固定到 commit <code>639aca3</code>，按 CC BY-SA 4.0 署名使用。站内只展示该公开零件的重建与几何对照；DexUMI、UMI3.0 等内部 CAD、装配和设计空间不在本站发布。</p>

<script type="module" src="{{ '/assets/interactive/vendor/model-viewer.min.js' | relative_url }}"></script>
