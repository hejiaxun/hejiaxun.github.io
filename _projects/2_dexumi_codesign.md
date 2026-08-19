---
layout: page
title: UMI / DexUMI 人机接口 Co-design
description: 在目标执行器固定条件下，围绕人机接口设计建立“设计—穿戴控制—人体与任务评价—方案比较”的研究框架。
kicker: 穹彻智能 · 具身智能实习
importance: 1
category: internship
permalink: /projects/dexumi-codesign/
---

{% include dexumi-module-nav.html %}

<div class="internship-role-strip">
  <strong>穹彻智能（非夕科技）</strong>
  <span>具身智能实习生</span>
  <span>2026.05 – 至今</span>
</div>

<p class="project-lead">本项研究面向<strong>目标执行器固定、优化 UMI / DexUMI 人机接口</strong>的问题：通过参数化设计生成候选方案，在仿真中建立 MANO 人手与穿戴装置的运动及接触关系，再从人体工效与任务可行性两个维度评价方案。当前工作的重点是右侧的人机接口设计评价回环，而不是优化目标执行器本体。</p>

<figure class="dexumi-overview-figure">
  <img src="{{ '/assets/img/dexumi/codesign-scope.svg' | relative_url }}" alt="UMI / DexUMI 人机接口 Co-design 研究范围与四个工作模块">
  <figcaption>研究范围：真实数采系统提供问题基线；穿戴控制、人体工效与参数化设计构成当前 Co-design 设计评价回环。</figcaption>
</figure>

## 四个工作模块

<div class="dexumi-module-grid">
  <a class="dexumi-module-card" href="{{ '/projects/dexumi-codesign/baseline/' | relative_url }}">
    <span class="module-index">01 · SYSTEM BASELINE</span>
    <h3>DexUMI 全链路 baseline 与数采工程</h3>
    <p>复现 DexUMI–XHand 的硬件、标定、采集、视觉处理与仿真遥操作链路，并从真实系统中识别人机接口设计问题。</p>
    <strong>查看模块 →</strong>
  </a>
  <a class="dexumi-module-card" href="{{ '/projects/dexumi-codesign/wearing-control/' | relative_url }}">
    <span class="module-index">02 · WEARING & CONTROL</span>
    <h3>MANO 驱动的穿戴仿真与物理控制</h3>
    <p>为夹爪式 UMI 与 DexUMI 分别研究穿戴状态生成、优化规划/控制、运动学映射与强化学习物理控制。</p>
    <strong>查看模块 →</strong>
  </a>
  <a class="dexumi-module-card" href="{{ '/projects/dexumi-codesign/ergonomics/' | relative_url }}">
    <span class="module-index">03 · HUMAN METRICS</span>
    <h3>人体工效与生物力学诊断</h3>
    <p>从几何穿透与接触出发，逐层建立关节负荷、肌肉力学与疲劳/恢复等可解释工程评价指标。</p>
    <strong>查看模块 →</strong>
  </a>
  <a class="dexumi-module-card" href="{{ '/projects/dexumi-codesign/parametric-cad/' | relative_url }}">
    <span class="module-index">04 · DESIGN SPACE</span>
    <h3>参数化 CAD 与 Co-design 基础设施</h3>
    <p>在少量几何尺寸与高维 Mesh 顶点之间，以 CAD 特征构造可解释、可制造、可批量评价的中尺度设计空间。</p>
    <strong>查看模块 →</strong>
  </a>
</div>

## 后续内容计划

<div class="content-slot-grid">
  <div class="content-slot"><strong>总览动画</strong><span>Co-design 回环与四个模块之间的数据流</span></div>
  <div class="content-slot"><strong>系统实物</strong><span>DexUMI–XHand 装配、数采与遥操作演示</span></div>
  <div class="content-slot"><strong>评价案例</strong><span>不同手型、装置参数与任务下的方案对比</span></div>
</div>

<div class="claim-boundary">
  <strong>公开边界</strong>
  <ul>
    <li>公开 DexUMI 的原始框架与个人扩展将分开说明，不把开源工作表述为原创。</li>
    <li>当前公开内容只描述研究结构；公司内部素材、实现细节与指标将在确认可披露后逐项补充。</li>
    <li>现阶段称为 Co-design 设计评价基础设施，不宣称已经形成成熟的全自动外层优化器。</li>
  </ul>
</div>
