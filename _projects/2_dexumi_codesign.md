---
layout: page
title: UMI / DexUMI 人机接口 Co-design
description: 在目标执行器固定条件下，围绕人机接口设计建立“设计—穿戴控制—人体与任务评价—方案比较”的研究框架。
kicker: 穹彻智能 · 具身智能实习生
importance: 1
category: internship
permalink: /projects/dexumi-codesign/
---

{% include dexumi-module-nav.html %}

<div class="internship-role-strip">
  <strong>穹彻智能</strong>
  <span>具身智能实习生</span>
  <span>2026.05 – 至今</span>
</div>

<p class="project-lead">本项研究在<strong>目标执行器固定</strong>的条件下，围绕 UMI / DexUMI 人机接口开展 Co-design。DexUMI–XHand 实物系统提供装配、标定与数采基线；参数化接口设计、MANO 驱动的穿戴仿真与控制、人体工效与任务评价共同构成设计评价回环。</p>

<figure class="dexumi-overview-figure">
  <img src="{{ '/assets/img/dexumi/codesign-scope-clean.svg' | relative_url }}" alt="UMI / DexUMI 人机接口 Co-design 设计评价回环">
</figure>

## 四个工作模块

<div class="dexumi-module-grid">
  <a class="dexumi-module-card" href="{{ '/projects/dexumi-codesign/baseline/' | relative_url }}">
    <span class="module-index">01 · SYSTEM BASELINE</span>
    <h3>DexUMI 全链路 baseline 与数采工程</h3>
    <p>复现公开 DexUMI–XHand 的硬件、标定、采集、视觉处理与仿真遥操作链路，并从真实系统中识别人机接口设计问题。</p>
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

<p class="project-attribution"><strong>开源基础与个人工作：</strong>DexUMI 由 Stanford REAL Lab 公开发布，详见<a href="https://github.com/real-stanford/DexUMI" target="_blank" rel="noopener">原始 GitHub 仓库</a>与<a href="https://dex-umi.github.io/" target="_blank" rel="noopener">项目主页</a>。本项目以其 XHand 系统为 baseline，页面重点展示我完成的系统复现、工程扩展，以及围绕穿戴控制、人体工效和参数化设计建立的 Co-design 研究工作。</p>
