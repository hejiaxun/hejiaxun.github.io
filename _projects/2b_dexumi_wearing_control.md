---
layout: page
title: MANO 驱动的穿戴仿真与物理控制
description: 在仿真中建立人手—装置穿戴关系，并研究 UMI 与 DexUMI 两类接口的规划、控制和物理可行性。
kicker: DexUMI Co-design · Module 02
category: internship-module
permalink: /projects/dexumi-codesign/wearing-control/
---

{% include dexumi-module-nav.html %}

<p class="project-lead">这一模块回答“给定人手和接口设计后，如何在仿真中生成可穿戴、可运动的状态与轨迹”。MANO 是统一的人手几何与运动表示；实际求解分别由优化规划/控制、运动学映射和强化学习完成。</p>

## 两条技术路线

<div class="wearing-route-grid">
  <section class="wearing-route-card">
    <span class="module-index">GRIPPER UMI</span>
    <h3>夹爪式 UMI：接触驱动与优化求解</h3>
    <p>由 MANO 人手接触驱动被动机构，研究穿戴状态生成、闭合轨迹的优化规划与控制，并通过离散/连续碰撞检测检查几何可行性。</p>
    <div class="route-tags"><span>MANO</span><span>Optimization</span><span>FCL / IPC</span></div>
  </section>
  <section class="wearing-route-card">
    <span class="module-index">DEXUMI</span>
    <h3>DexUMI：穿戴运动学与强化学习控制</h3>
    <p>建立 MANO–DexUMI 的穿戴与接触关系，研究运动学映射及物理环境中的强化学习轨迹跟踪，验证已知可达关节运动的控制可行性。</p>
    <div class="route-tags"><span>Newton</span><span>Kinematics</span><span>Reinforcement Learning</span></div>
  </section>
</div>

## 后续将补充

<div class="content-slot-grid">
  <div class="content-slot"><strong>穿戴状态生成</strong><span>不同手型与装置参数下的初始状态</span></div>
  <div class="content-slot"><strong>UMI 轨迹视频</strong><span>被动机构接触驱动与几何检查</span></div>
  <div class="content-slot"><strong>DexUMI 控制视频</strong><span>强化学习物理轨迹跟踪</span></div>
</div>

## 与 Co-design 回环的关系

该模块是设计评价回环中的物理求解器：将 CAD 设计变量转化为具体穿戴状态、运动轨迹与任务可行性结果，并把后续人体评价所需的接触与运动数据输出给评价模块。

<div class="claim-boundary">公开页面不会将 MANO 表述为控制算法，也不会把仿真中的几何可行性等同于真实穿戴安全或舒适度结论。</div>
