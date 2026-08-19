---
layout: page
title: DexUMI–XHand 数采系统复现与工程扩展
description: 基于公开 DexUMI–XHand 系统复现真实数采链路，并自主搭建多模态工作站与仿真遥操作环境。
kicker: DexUMI Co-design · Module 01
category: internship-module
permalink: /projects/dexumi-codesign/baseline/
---

{% include dexumi-module-nav.html %}

<p class="project-lead">这一模块回答“真实系统如何工作、设计问题从哪里来”。我参考 Stanford REAL Lab 公开的 DexUMI–XHand 硬件与软件框架，完成外骨骼装配、设备标定和基础采集链复现；在此基础上，自主搭建多模态数采上位机、空间信息处理与 XHand 仿真遥操作环境，并完成仿真任务执行验证。</p>

<p class="project-attribution"><strong>开源基线与复现依据：</strong> <a href="https://github.com/real-stanford/DexUMI" target="_blank" rel="noopener">DexUMI 官方仓库</a> · <a href="https://dex-umi.github.io/tutorial/hardware.html" target="_blank" rel="noopener">官方硬件装配教程</a> · <a href="https://dex-umi.github.io/" target="_blank" rel="noopener">项目主页</a>。本页将公开项目提供的系统基线与个人完成的工程扩展分开说明。</p>

## 问题与目标

在 XHand 平台上建立从真实穿戴设备到可回放数据、再到仿真交互的实验入口；通过实际装配、标定、采集和任务操作，识别影响穿戴适配、数据质量及后续 Co-design 的关键问题。

<figure class="project-figure project-figure--wide">
  <img src="{{ '/assets/img/dexumi/dexumi-real-sensor-callout.png' | relative_url }}" alt="DexUMI–XHand 真实整机与多模态采集硬件" loading="lazy">
  <figcaption>真实整机与采集硬件：12 路编码器、第一视角相机、iPhone RGB-D / 6-DoF 位姿、MCU 与触觉采集接口共同构成多模态数据入口。</figcaption>
</figure>

## 系统链路

<div class="module-route-grid">
  <div class="module-route-card"><span>01</span><strong>硬件与 CAD 装配</strong><p>依据公开硬件资料完成外骨骼、XHand 与采集硬件装配及接口适配。</p></div>
  <div class="module-route-card"><span>02</span><strong>标定与同步采集</strong><p>统一编码器、第一视角视觉、RGB-D、位姿与触觉数据入口。</p></div>
  <div class="module-route-card"><span>03</span><strong>空间信息处理</strong><p>恢复手部、相机与场景点云之间的一致空间关系并支持回放。</p></div>
  <div class="module-route-card"><span>04</span><strong>仿真遥操作</strong><p>将真实 DexUMI 输入映射到 XHand，记录控制与仿真状态并验证操作任务。</p></div>
</div>

## 系统演示

<div class="video-grid">
  <div class="project-video">
    <video controls muted playsinline preload="metadata" poster="{{ '/assets/img/dexumi/posters/01-multimodal-workstation.jpg' | relative_url }}">
      <source src="{{ '/assets/video/dexumi/01_multimodal_workstation.mp4' | relative_url }}" type="video/mp4">
    </video>
    <p><strong>多模态数采上位机。</strong>自主搭建统一工作站，将 12 路编码器、iPhone RGB-D / Pose、OAK-1、触觉与 Newton 状态纳入同一条可保存、可回放的时间轴。</p>
  </div>
  <div class="project-video">
    <video controls muted playsinline preload="metadata" poster="{{ '/assets/img/dexumi/posters/02-spatial-reconstruction.jpg' | relative_url }}">
      <source src="{{ '/assets/video/dexumi/02_spatial_reconstruction.mp4' | relative_url }}" type="video/mp4">
    </video>
    <p><strong>空间感知与三维重建。</strong>展示移动过程中 Root 轨迹、RGB-D 点云、手部姿态与指尖运动的一致空间关系及重复回放结果。</p>
  </div>
  <div class="project-video">
    <video controls muted playsinline preload="metadata" poster="{{ '/assets/img/dexumi/posters/03-virtual-teleoperation.jpg' | relative_url }}">
      <source src="{{ '/assets/video/dexumi/03_virtual_teleoperation.mp4' | relative_url }}" type="video/mp4">
    </video>
    <p><strong>DexUMI → XHand 仿真遥操作。</strong>自主搭建关节与 Root 映射、Newton 接触仿真和同步记录链路，连续控制虚拟 XHand 的姿态与任务空间运动。</p>
  </div>
  <div class="project-video">
    <video controls muted playsinline preload="metadata" poster="{{ '/assets/img/dexumi/posters/04-task-execution-success.jpg' | relative_url }}">
      <source src="{{ '/assets/video/dexumi/04_task_execution_success.mp4' | relative_url }}" type="video/mp4">
    </video>
    <p><strong>仿真任务执行。</strong>基于自主遥操作环境完成 XHand 推块任务，记录真实动作输入、控制器状态、物体状态与虚拟传感信息。</p>
  </div>
</div>

## 在 Co-design 中的作用

该模块提供真实设备、数据与任务操作基线：一方面检验候选接口是否能够被实际装配、标定和使用，另一方面为后续穿戴控制、人体工效评价与参数化设计提供问题定义和数据入口。

