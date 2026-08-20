---
layout: page
title: MANO 驱动的穿戴运动与物理控制
description: 从静态穿戴标定到分指运动投影，并分别研究夹爪式 UMI 的优化求解与 DexUMI 的 PPO 物理控制。
kicker: DexUMI Co-design · Module 02
category: internship-module
permalink: /projects/dexumi-codesign/wearing-control/
---

{% include dexumi-module-nav.html %}

<p class="project-lead">这一模块回答一个基础问题：给定人手、动作和接口设计，设备应当如何稳定地穿戴在手上，并生成自身可实现的运动。MANO 提供统一的人手形状与动作表示；运动学层先得到可追溯的设备参考轨迹，随后再进入接触仿真、物理控制与人体工效评价。</p>

## 运动学穿戴基础层

<div class="wearing-flow" aria-label="DexUMI 运动学穿戴流程">
  <span>静态穿戴标定</span><i>→</i>
  <span>固定掌根关系</span><i>→</i>
  <span>分指可达空间投影</span><i>→</i>
  <span>穿戴约束修正</span><i>→</i>
  <span>设备参考轨迹</span>
</div>

静态阶段先确定设备相对手掌的根位姿、初始关节角和指套语义对应；序列阶段保持掌根穿戴关系固定，只求解设备主动关节。不同手指按各自自由度进行投影：可实现运动映射到 DexUMI 的可达空间，不可表达的侧向运动或轴向偏差则作为残差保留，而不是通过移动设备根位姿制造更低误差。

## 两类装置，两种求解路径

<div class="wearing-route-grid">
  <section class="wearing-route-card">
    <span class="module-index">GRIPPER UMI</span>
    <h3>夹爪式 UMI：优化规划与被动控制</h3>
    <p>由 MANO 人手接触驱动被动机构，以优化方法求解闭合轨迹，并通过 FCL 离散碰撞检测与 IPC 连续碰撞检测检查轨迹的几何可行性。</p>
    <div class="route-tags"><span>MANO</span><span>Optimization</span><span>FCL / IPC</span></div>
  </section>
  <section class="wearing-route-card">
    <span class="module-index">DEXUMI</span>
    <h3>DexUMI：运动学映射与 PPO 物理控制</h3>
    <p>由分指投影得到设备可达的参考轨迹，再在 Newton 接触环境中使用 PPO 学习物理控制，验证已知可达近端/远端关节轨迹的跟踪能力。</p>
    <div class="route-tags"><span>Newton</span><span>Projection IK</span><span>PPO</span></div>
  </section>
</div>

## 方法演示

### 运动学 Retarget：设备跟随人手完成抓取

固定掌根穿戴关系后，MANO 动作经分指投影映射为 DexUMI 可达关节轨迹。下方演示展示的是**运动学 retarget**，用于检查设备是否能够表达目标人手动作；它不依赖 PPO 控制。

<div class="project-video">
  <video controls muted loop playsinline preload="metadata">
    <source src="{{ '/assets/video/dexumi/05_kinematic_retarget_grasp.mp4' | relative_url }}" type="video/mp4">
  </video>
  <p>运动学 retarget 抓取演示：由 MANO 动作生成 DexUMI 可达关节轨迹。</p>
</div>

### PPO 物理控制：已知可达轨迹跟踪

运动学层先给出已确认可达的参考轨迹，PPO 再在 Newton 接触环境中根据目标、设备状态与跟踪误差输出控制动作，形成闭环物理跟踪。

<div class="project-video">
  <video controls muted loop playsinline preload="metadata">
    <source src="{{ '/assets/video/dexumi/06_ppo_physics_tracking.mp4' | relative_url }}" type="video/mp4">
  </video>
  <p>PPO 物理控制演示：在接触约束下跟踪已知可达的近端与远端关节轨迹。</p>
</div>

### 夹爪式 UMI：优化运动控制

夹爪式 UMI 由 MANO 接触驱动被动机构，通过优化方法求解闭合与连续运动；FCL/IPC 用于独立检查轨迹的几何可行性。

<div class="video-grid">
  <div class="project-video">
    <video controls muted loop playsinline preload="metadata">
      <source src="{{ '/assets/video/dexumi/07_gripper_umi_optimized_control.mp4' | relative_url }}" type="video/mp4">
    </video>
    <p>夹爪式 UMI 优化运动控制：接触驱动下的被动机构运动。</p>
  </div>
  <div class="project-video">
    <video controls muted loop playsinline preload="metadata">
      <source src="{{ '/assets/video/dexumi/08_gripper_umi_optimized_control_comparison.mp4' | relative_url }}" type="video/mp4">
    </video>
    <p>多组穿戴状态下的夹爪式 UMI 优化运动对比。</p>
  </div>
</div>

<div class="metric-row project-metrics project-metrics--two">
  <div class="metric"><strong>0.052 rad</strong><span>DexUMI 近端平均跟踪误差</span></div>
  <div class="metric"><strong>0.026 rad</strong><span>DexUMI 远端平均跟踪误差</span></div>
</div>

## 在 Co-design 中的作用

该模块把接口结构转化为可执行的设备运动与接触状态：夹爪式 UMI 采用优化求解，DexUMI 采用运动学投影与 PPO 物理控制；生成的轨迹、干涉和接触结果随后进入人体工效与任务评价，用于比较不同接口设计。

<p class="project-attribution"><strong>来源说明：</strong>人手表示采用 <a href="https://mano.is.tue.mpg.de/" target="_blank" rel="noopener">MANO</a>；DexUMI 的系统基线参考 <a href="https://github.com/real-stanford/DexUMI" target="_blank" rel="noopener">Stanford DexUMI 官方仓库</a>。本页展示的是在该基线之上开展的穿戴建模、运动学映射、优化求解与物理控制研究。</p>
