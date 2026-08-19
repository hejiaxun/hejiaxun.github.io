---
layout: page
title: DexUMI 全链路 baseline 与数采工程
description: 从公开 DexUMI–XHand 系统复现真实数采链路，并形成后续人机接口研究的实验基线。
kicker: DexUMI Co-design · Module 01
category: internship-module
permalink: /projects/dexumi-codesign/baseline/
---

{% include dexumi-module-nav.html %}

<p class="project-lead">这一模块回答“真实系统如何工作、设计问题从哪里来”。工作范围限定为 <strong>DexUMI 数采系统与仿真遥操作 baseline</strong>，不把尚未完成的策略训练与真实机器人部署写入复现范围。</p>

## 问题与目标

基于公开 DexUMI，在 XHand 平台上复现并工程化从穿戴硬件到可用数据的完整入口；在真实装配、标定与采集过程中记录影响穿戴适配、数据质量和后续 Co-design 的关键问题。

## 已确认的技术链

<div class="module-route-grid">
  <div class="module-route-card"><span>01</span><strong>硬件与 CAD 装配</strong><p>外骨骼、XHand 与采集硬件的制作、装配及接口适配。</p></div>
  <div class="module-route-card"><span>02</span><strong>标定与多模态采集</strong><p>坐标/部署标定，以及视觉、位姿、编码器和触觉等数据入口。</p></div>
  <div class="module-route-card"><span>03</span><strong>视觉与数据处理</strong><p>手部去除、具身替换相关处理与基础数据组织。</p></div>
  <div class="module-route-card"><span>04</span><strong>仿真遥操作</strong><p>验证 XHand 在仿真中的动作映射与任务遥操作链路。</p></div>
</div>

## 后续将补充

<div class="content-slot-grid">
  <div class="content-slot"><strong>系统总览图</strong><span>硬件、软件与数据流的对应关系</span></div>
  <div class="content-slot"><strong>演示视频</strong><span>数据采集与仿真 XHand 遥操作任务</span></div>
  <div class="content-slot"><strong>工程扩展</strong><span>触觉传感器、PCB 接口与 MCU 固件</span></div>
</div>

## 与 Co-design 回环的关系

该模块提供真实装置、数据与问题基线，帮助确定人机接口的设计变量和评价需求；它是整个研究的实验入口，但不直接等同于外层设计优化器。

<div class="claim-boundary">本页将始终明确区分“公开 DexUMI 系统复现”与“个人完成的工程扩展”。</div>
