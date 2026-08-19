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

## 与 Co-design 回环的关系

该模块是设计评价回环中的物理求解器：MANO 提供人手几何与运动表示，优化、运动学映射和强化学习负责求解具体控制问题；输出的穿戴状态、接触与运动数据用于评估候选设计的仿真可行性和人体工效。
