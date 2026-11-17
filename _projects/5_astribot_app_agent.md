---
layout: page
title: 机器人象棋应用与 Agent 执行适配
description: 星尘 OS 象棋应用、SDK 联调与 ASPIRE 到 T1 的仿真执行适配。
kicker: 星尘智能 · 实习 · 2026.10–至今
img: assets/img/astribot/xiangqi-overview.jpg
importance: 3
category: internship
signal: 三回合走子与吃子 · App / SDK 联调 · 仿真抓取抬升
permalink: /projects/astribot-app-agent/
---

围绕机器人应用落地，参与将上层任务请求接入机器人执行接口，并通过状态反馈、执行记录和仿真演示检查应用行为。当前展示包含象棋应用与机器人 Agent 平台适配两个模块。

<div class="project-signal-strip">
  <p><strong>个人贡献</strong><span>参与应用开发与联调、开源框架复现、T1 平台接口适配和仿真验证。</span></p>
  <p><strong>展示范围</strong><span>仿真功能演示；象棋固定三回合，抓取为单场执行样例。</span></p>
</div>

## 星尘 OS 机器人象棋应用 {#xiangqi}

将 App 棋局请求与 SDK 动作执行衔接，联调走子、吃子、执行状态及异常处理。固定场景中完成连续三回合走子，吃子过程包含将被吃棋子移至盘外，再移动主动棋子。

**执行链：**棋局请求 → 动作执行与反馈 → 棋局状态提交 → 仿真记录与回放。

<figure class="project-video">
  <video controls playsinline preload="none" poster="{{ '/assets/img/astribot/xiangqi-overview.jpg' | relative_url }}"><source src="{{ '/assets/video/astribot/xiangqi-overview.mp4' | relative_url }}" type="video/mp4">可<a href="{{ '/assets/video/astribot/xiangqi-overview.mp4' | relative_url }}">直接打开视频</a>。</video>
  <figcaption><strong>三回合概览 · 28 秒。</strong>固定 32 子场景，包含走子和吃子；由记录的仿真原状态离线渲染，按原墙钟速度回放。</figcaption>
</figure>

<figure class="project-video">
  <video controls playsinline preload="none" poster="{{ '/assets/img/astribot/xiangqi-app-sdk.jpg' | relative_url }}"><source src="{{ '/assets/video/astribot/xiangqi-app-sdk.mp4' | relative_url }}" type="video/mp4">可<a href="{{ '/assets/video/astribot/xiangqi-app-sdk.mp4' | relative_url }}">直接打开视频</a>。</video>
  <figcaption><strong>App / SDK 联调演示 · 53 秒。</strong>结合实际 App 执行证据与仿真状态回放，展示三回合六个半回合；删去章节间人工审图等待，动作内部保持原速。</figcaption>
</figure>

两段演示来自不同迭代版本，均为固定脚本场景。人步由模拟摆子完成；当前材料验证应用与执行链衔接，不代表在线视觉识别人步、任意整局对弈或真机验收。

## ASPIRE 到 T1 的机器人 Agent 适配 {#agent}

基于既有 ASPIRE 框架，参与 T1 观测、动作执行、任务复位与评价接口适配，连接代码策略执行、反馈记录与失败分析。框架本身为开源复现，个人工作侧重平台接入与验证。

**执行链：**任务与观测 → 代码策略调用机器人接口 → 动作执行与状态反馈 → 任务结果检查。

<figure class="project-video">
  <video controls playsinline preload="none" poster="{{ '/assets/img/astribot/agent-lift.jpg' | relative_url }}"><source src="{{ '/assets/video/astribot/agent-lift.mp4' | relative_url }}" type="video/mp4">可<a href="{{ '/assets/video/astribot/agent-lift.mp4' | relative_url }}">直接打开视频</a>。</video>
  <figcaption><strong>抓取抬升 · 23 秒。</strong>T1 / SDK 仿真开发场景中的一次方块抓取抬升录像。</figcaption>
</figure>

该片展示单次仿真执行结果，不代表跨场景成功率、真机部署或持续学习技能库已验证。
