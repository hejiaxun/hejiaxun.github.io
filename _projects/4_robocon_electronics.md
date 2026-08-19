---
layout: page
title: ROBOCON 2022 机器人电控与整机联调
description: 从 PCB、传感采集和电机驱动接口，到四台参赛机器人的布线、调试与赛场保障。
kicker: Robot Electronics · ROBOCON 2022
img: assets/img/robocon/electronics-architecture.svg
importance: 1
category: robot-systems
permalink: /projects/robocon-electronics/
---

**电控硬件负责人（硬件组唯一成员）** · 武汉大学代表队 · 2021.06–2022.07

我负责四台参赛机器人的电路设计、板卡制作、整机布线、联调与维护，工作重点是 PCB、传感采集、电机驱动接口和整机电控，不涉及机械结构设计。

<div class="row text-center">
  <div><strong>4 台</strong><br><small>参赛机器人</small></div>
  <div><strong>2 项</strong><br><small>全国一等奖</small></div>
  <div><strong>1 项</strong><br><small>全国二等奖</small></div>
  <div><strong>3 类</strong><br><small>CAN / UART / 以太网</small></div>
</div>

## 电控系统

{% include figure.html path="assets/img/robocon/electronics-architecture.svg" alt="ROBOCON 机器人电控系统架构" caption="传感采集、主控与接口、电机执行和整机布线共同构成机器人电控链路。" %}

<div class="focus-grid">
  <div class="focus-card">
    <h3>主控与接口</h3>
    <p>使用 Altium Designer 设计 STM32F405 主控与接口电路，覆盖电源、滤波、ADC 采集、电机驱动及 CAN / UART / 以太网通信。</p>
  </div>
  <div class="focus-card">
    <h3>传感采集</h3>
    <p>完成 10 kHz / 16 位激光测距采集与 24 位光纤陀螺采集电路，承担从原理图、PCB 到板级调试的完整工程工作。</p>
  </div>
  <div class="focus-card">
    <h3>电机与驱动</h3>
    <p>参与电机与编码器选型，以及基于开源 ODrive 方案的无刷电机 FOC 驱动器研发和机器人集成。</p>
  </div>
  <div class="focus-card">
    <h3>整机联调</h3>
    <p>完成供电、开关、CAN / 串口线束和多机器人调试，处理板卡、通信、传感器与执行器之间的系统级故障。</p>
  </div>
</div>

## 代表性电路工程

<div class="media-pair">
  {% include figure.html path="assets/img/robocon/main-controller-top-schematic.png" alt="STM32F405 主控顶板原理图" caption="主控顶板：STM32F405、通信接口及机器人 I/O。" %}
  {% include figure.html path="assets/img/robocon/main-controller-bottom-schematic.png" alt="机器人主控底板原理图" caption="主控底板：电源、CAN / UART 及接口电路。" %}
</div>

<div class="media-pair">
  {% include figure.html path="assets/img/robocon/adc-sampling-schematic.png" alt="传感器采样板原理图" caption="传感采集板：ADC、电源与信号接口。" %}
  {% include figure.html path="assets/img/robocon/solenoid-driver-schematic.png" alt="电磁阀控制板原理图" caption="执行器控制板：多路电磁阀驱动与控制接口。" %}
</div>

这些预览由原始 Altium 工程直接恢复。后续开源仓库将提供经过整理的 `PrjPcb`、`SchDoc` 与 `PcbDoc` 源文件，并以独立目录区分个人电路工程和第三方开源驱动参考。

## 电机与整机系统

驱动部分基于 ODrive 开源方案开展研发与集成。我参与电机、编码器和驱动方案选型，以及板卡接入、参数调试和整机应用；不将 ODrive 原始算法或完整 FOC 三环控制器表述为个人独立实现。

在四台参赛机器人并行开发过程中，我同时承担板级测试、线束制作、通信联调、现场维修与赛场故障定位。该经历形成了从电路设计到真实机器人稳定运行的完整工程视角。

## 比赛结果

- “同创辉煌”：全国一等奖。
- “机器马术”：两支参赛队分别获得全国一等奖、全国二等奖。
- 合计：全国一等奖 2 项、全国二等奖 1 项。

## 工程复盘

比赛暴露的问题不仅来自单块电路，也来自传感器、电磁干扰、线束规范、接口一致性和多节点通信之间的耦合。赛后复盘重点覆盖激光测距可靠性、模拟传感器抗干扰、CAN 线束与端口编号、主控负载、紧急断电和电源冗余等问题，为后续板卡和整机设计形成了可复用的检查项。

[查看 2022 年工程复盘（PDF）]({{ '/assets/pdf/robocon-2022-retrospective.pdf' | relative_url }})

## 个人贡献与开源边界

我负责上述个人 Altium 电路工程、板卡制作与调试，以及整机电控集成。ODrive、VESC、DGM 等已有工程仅作为第三方开源参考；公开时将保留其原始许可和上游链接，只发布可明确归属的个人设计、适配、配置与复盘材料。
