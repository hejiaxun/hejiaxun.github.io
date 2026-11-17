---
layout: page
title: 机器人象棋应用与 Agent 执行适配
description: 星尘 OS 象棋应用、SDK 联调与 ASPIRE 到 T1 的仿真执行适配。
kicker: 星尘智能 · 实习 · 2026.10–至今
img: assets/img/astribot/xiangqi-overview.jpg
importance: 3
category: internship
signal: 三回合走子与吃子 · App / SDK 联调 · Lift / Stack / 抓取入篮
permalink: /projects/astribot-app-agent/
---

围绕机器人应用落地，参与将上层任务请求接入机器人执行接口，并通过状态反馈、执行记录和仿真演示检查应用行为。当前展示包含象棋应用与机器人 Agent 平台适配两个模块。

<div class="project-signal-strip">
  <p><strong>个人贡献</strong><span>参与应用开发与联调、开源框架复现、T1 平台接口适配和仿真验证。</span></p>
  <p><strong>展示范围</strong><span>象棋应用真机演示与仿真联调；Agent 的 Lift、Stack 和抓取入篮仿真成功回合。</span></p>
</div>

## 星尘 OS 机器人象棋应用 {#xiangqi}

### 妙手象棋：真机演示

<figure class="project-video">
  <video controls playsinline preload="none" poster="{{ '/assets/img/astribot/xiangqi-real.jpg' | relative_url }}"><source src="{{ '/assets/video/astribot/xiangqi-real.mp4' | relative_url }}" type="video/mp4">可<a href="{{ '/assets/video/astribot/xiangqi-real.mp4' | relative_url }}">直接打开视频</a>。</video>
  <figcaption><strong>真机对局与悔棋 · 约 74 秒。</strong>“过河小兵”团队的妙手象棋应用真实拍摄成片，展示 T1 与实体棋盘、真人交互。</figcaption>
</figure>

路演材料中的个人分工为操作 / App，杨浩俊负责识别 / App；共同完成团队应用演示。此片呈现真机效果，未按成片推算完整整局成功率或全部环节的自主程度。

### App / SDK 仿真联调

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

这两段仿真演示来自不同迭代版本，均为固定脚本场景。人步由模拟摆子完成；当前材料验证应用与执行链衔接，不代表在线视觉识别人步、任意整局对弈或真机验收。

## ASPIRE 到 T1 的机器人 Agent 适配 {#agent}

基于既有 ASPIRE 框架，参与 T1 观测、动作执行、任务复位与评价接口适配，连接代码策略执行、反馈记录与失败分析。框架本身为开源复现，个人工作侧重平台接入与验证。

**执行链：**任务与观测 → 代码策略调用机器人接口 → 动作执行与状态反馈 → 任务结果检查。

### Stack：从提示词到成功回合

<figure class="project-video">
  <video controls playsinline preload="none" poster="{{ '/assets/img/astribot/agent-stack.jpg' | relative_url }}"><source src="{{ '/assets/video/astribot/agent-stack.mp4' | relative_url }}" type="video/mp4">可<a href="{{ '/assets/video/astribot/agent-stack.mp4' | relative_url }}">直接打开视频</a>。</video>
  <figcaption><strong>叠方块 · 30.5 秒。</strong>任务提示词 → SAM3 感知 → 初版失败反馈 → 策略修改 → 四路相机中的成功回合。动作素材原采样为 5 fps，成片动作段约 1.6 倍速。</figcaption>
</figure>

视频中的单回合通过原任务谓词；开发集与一次未见检查分别为 19/25、4/5，不是正式留出结果。该条件末尾曾出现 step 失败反馈，因此不将成功画面外推为稳定保持能力。

### Lift：多视角与执行反馈

<figure class="project-video">
  <video controls playsinline preload="none" poster="{{ '/assets/img/astribot/agent-lift-v06.jpg' | relative_url }}"><source src="{{ '/assets/video/astribot/agent-lift-v06.mp4' | relative_url }}" type="video/mp4">可<a href="{{ '/assets/video/astribot/agent-lift-v06.mp4' | relative_url }}">直接打开视频</a>。</video>
  <figcaption><strong>抬方块 · 25.8 秒。</strong>Actor v06 开发场景中的成功样例，结合第三视角、头部相机和执行事件，展示接近、闭爪与抬升。</figcaption>
</figure>

### 抓取入篮：完整抓放流程样例

<figure class="project-video">
  <video controls playsinline preload="none" poster="{{ '/assets/img/astribot/agent-basket.jpg' | relative_url }}"><source src="{{ '/assets/video/astribot/agent-basket.mp4' | relative_url }}" type="video/mp4">可<a href="{{ '/assets/video/astribot/agent-basket.mp4' | relative_url }}">直接打开视频</a>。</video>
  <figcaption><strong>抓取入篮 · 8.06 秒仿真时间。</strong>原 T1 / no-SDK 场景 seed280 的第三视角，原任务与完整抓放判定通过；画面分辨率为 256×192，目标存在遮挡。</figcaption>
</figure>

这些样例来自不同任务与执行条件，不能合并计算成功率。入篮片按仿真时间编码；与 SDK 任务分开记录。当前展示体现仿真中的任务执行与反馈迭代，不代表真机部署、完整物理安全验证或新增持续学习技能已通过独立验证。
