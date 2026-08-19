---
layout: page
title: 测井仪器泥浆脉冲下传解码
description: 从模拟信号调理、阀门时序提取、MCU 实时解码到 Qt 回放验证的软硬件项目。
kicker: Embedded Systems & Signal Processing
importance: 1
category: embedded-systems
permalink: /projects/mud-pulse-downlink/
img: /assets/img/mud-pulse/test-rig.png
---

## 项目概览

**时间：** 2024.03–2024.12  
**职责：** 独立开发  
**技术关键词：** MC9S12XET256、10 Hz 采集、信号调理、时序解码、Qt

面向测井仪器泥浆脉冲下传信号，构建从模拟电压采集到编码恢复的完整工程链路：使用信号调理电路获取压力波形，由 MC9S12XET256 固件以 10 Hz 采样并转换为阀门开关时间序列，再依据时序关系解析 0/1 编码；同时开发 Qt 上位机完成历史数据回放、波形观察和软硬件联调。

<div class="metric-row project-metrics">
  <div class="metric"><strong>10 Hz</strong><span>MCU 采集与解码</span></div>
  <div class="metric"><strong>25 口井</strong><span>历史数据覆盖</span></div>
  <div class="metric"><strong>252 条</strong><span>历史数据回放</span></div>
  <div class="metric"><strong>94.8%</strong><span>回放解码成功率</span></div>
</div>

> 94.8% 为历史数据回放验证结果，不等同于井下在线运行结果。

## 系统组成

<div class="focus-grid project-module-grid">
  <div class="focus-card">
    <h3>信号调理与采集</h3>
    <p>完成压力传感模拟信号的调理、滤波与接口设计，为 MCU 稳定采样提供输入。</p>
  </div>
  <div class="focus-card">
    <h3>时序与编码解析</h3>
    <p>通过滤波、相关分析、极值检测和自适应阈值提取阀门开关时序，并据此恢复 0/1 编码。</p>
  </div>
  <div class="focus-card">
    <h3>嵌入式固件</h3>
    <p>基于 MC9S12XET256 实现 10 Hz 实时采集、状态管理、时序识别、参数解码和数据回传。</p>
  </div>
  <div class="focus-card">
    <h3>Qt 验证平台</h3>
    <p>支持历史数据回放、波形显示、运行模式切换及上下位机联调，用于算法与硬件链路验证。</p>
  </div>
</div>

## 硬件与信号链

<div class="project-media-grid project-media-grid--hardware">
  <figure class="project-figure project-figure--pcb">
    <img src="{{ '/assets/img/mud-pulse/pcb-layout.png' | relative_url }}" alt="泥浆脉冲下传解码电路 PCB 布局">
    <figcaption>采集、处理与通信电路 PCB 布局</figcaption>
  </figure>
  <figure class="project-figure">
    <img src="{{ '/assets/img/mud-pulse/signal-conditioning.png' | relative_url }}" alt="泥浆脉冲信号调理电路">
    <figcaption>模拟信号调理与接口电路</figcaption>
  </figure>
</div>

## 回放与联调验证

<div class="project-media-grid">
  <figure class="project-figure">
    <img src="{{ '/assets/img/mud-pulse/test-rig.png' | relative_url }}" alt="泥浆脉冲解码室内联调装置">
    <figcaption>室内联调与拖动实验装置</figcaption>
  </figure>
  <figure class="project-figure">
    <img src="{{ '/assets/img/mud-pulse/qt-playback.png' | relative_url }}" alt="泥浆脉冲解码 Qt 上位机回放界面">
    <figcaption>Qt 历史波形回放与解码检查</figcaption>
  </figure>
</div>

项目完成后形成了可独立验证的信号调理、实时采集、时序解码与回放分析链路。该经历主要证明工业仪器场景中的电路、嵌入式、算法和调试平台协同开发能力。
