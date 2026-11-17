---
layout: page
title: 机器人象棋应用与 Agent 执行适配
description: 机器人应用开发、SDK 联调与 Agent 仿真执行验证。
kicker: 星尘智能 · 机器人算法工程师（全栈） · 2026.10–至今
img: assets/img/astribot/xiangqi-overview.jpg
importance: 3
category: internship
signal: 应用联调 · 机器人接口适配 · 多任务仿真
permalink: /projects/astribot-app-agent/
---

参与机器人应用开发、机器人接口适配与仿真验证，连接上层任务请求、动作执行及状态反馈。

<div class="project-signal-strip">
  <p><strong>个人贡献</strong><span>参与应用开发与联调、开源框架复现、平台接口适配和执行验证。</span></p>
  <p><strong>展示范围</strong><span>团队象棋应用真机演示与仿真联调；Agent 抬块、叠块和抓取入篮仿真样例。</span></p>
</div>

视频均为无声脱敏版本，仅展示操作局部；真机与仿真分别标注。

## 机器人象棋应用 {#xiangqi}

### 真机演示

<figure class="project-video">
  <video controls muted playsinline preload="none" poster="{{ '/assets/img/astribot/xiangqi-real.jpg?v=20261117-redacted' | relative_url }}"><source src="{{ '/assets/video/astribot/xiangqi-real.mp4?v=20261117-redacted' | relative_url }}" type="video/mp4">可<a href="{{ '/assets/video/astribot/xiangqi-real.mp4?v=20261117-redacted' | relative_url }}">直接打开视频</a>。</video>
  <figcaption><strong>真机象棋操作 · 约 74 秒。</strong>团队应用演示的局部画面，保留原动作顺序与速度。</figcaption>
</figure>

个人参与操作 / App 开发与联调，视觉识别为团队协作模块。视频展示真机效果，不据此推算完整整局成功率或所有环节的自主程度。

### 仿真联调

将 App 棋局请求与 SDK 动作执行衔接，联调走子、吃子、执行状态及异常处理。

<figure class="project-video">
  <video controls muted playsinline preload="none" poster="{{ '/assets/img/astribot/xiangqi-overview.jpg?v=20261117-redacted' | relative_url }}"><source src="{{ '/assets/video/astribot/xiangqi-overview.mp4?v=20261117-redacted' | relative_url }}" type="video/mp4">可<a href="{{ '/assets/video/astribot/xiangqi-overview.mp4?v=20261117-redacted' | relative_url }}">直接打开视频</a>。</video>
  <figcaption><strong>三回合仿真概览 · 约 28 秒。</strong>固定场景中的走子与吃子；由记录的仿真状态回放，动作保持原墙钟速度。</figcaption>
</figure>

人步由模拟摆子完成，当前材料验证应用与执行链衔接，不代表在线视觉识别人步或任意整局对弈。

## 机器人 Agent 执行适配 {#agent}

基于开源框架，参与机器人观测、动作执行、任务复位与评价接口适配，连接代码策略执行、状态反馈和失败分析。个人工作侧重平台接入与验证。

### 叠块

<figure class="project-video">
  <video controls muted playsinline preload="none" poster="{{ '/assets/img/astribot/agent-stack.jpg?v=20261117-redacted' | relative_url }}"><source src="{{ '/assets/video/astribot/agent-stack.mp4?v=20261117-redacted' | relative_url }}" type="video/mp4">可<a href="{{ '/assets/video/astribot/agent-stack.mp4?v=20261117-redacted' | relative_url }}">直接打开视频</a>。</video>
  <figcaption><strong>叠方块 · 12 秒。</strong>成功回合的动作片段，单视角裁切；沿用原成片约 1.6 倍动作速度。</figcaption>
</figure>

### 抬块

<figure class="project-video">
  <video controls muted playsinline preload="none" poster="{{ '/assets/img/astribot/agent-lift-v06.jpg?v=20261117-redacted' | relative_url }}"><source src="{{ '/assets/video/astribot/agent-lift-v06.mp4?v=20261117-redacted' | relative_url }}" type="video/mp4">可<a href="{{ '/assets/video/astribot/agent-lift-v06.mp4?v=20261117-redacted' | relative_url }}">直接打开视频</a>。</video>
  <figcaption><strong>抬方块 · 约 26 秒。</strong>仿真中的接近、闭爪与抬升，保留动作视角。</figcaption>
</figure>

### 抓取入篮

<figure class="project-video">
  <video controls muted playsinline preload="none" poster="{{ '/assets/img/astribot/agent-basket.jpg?v=20261117-redacted' | relative_url }}"><source src="{{ '/assets/video/astribot/agent-basket.mp4?v=20261117-redacted' | relative_url }}" type="video/mp4">可<a href="{{ '/assets/video/astribot/agent-basket.mp4?v=20261117-redacted' | relative_url }}">直接打开视频</a>。</video>
  <figcaption><strong>抓取入篮 · 约 8 秒仿真时间。</strong>低分辨率仿真样例，目标存在遮挡。</figcaption>
</figure>

各样例来自不同任务和执行条件，不合并计算成功率，也不代表稳定泛化、真机部署或完整物理安全验证。
