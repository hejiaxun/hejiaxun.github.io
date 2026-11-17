---
layout: about
title: 首页
permalink: /
description: 贺加勋的机器人研究与工程个人主页。
---

<div id="work"></div>

## 代表工作

<h3 class="work-tier-title">核心研究与实习</h3>

<div class="work-list">
  <article class="work-item">
    <a class="work-media" href="{{ '/projects/ral-tendon-estimation/' | relative_url }}"><video muted autoplay loop playsinline preload="metadata" poster="{{ '/assets/img/ral/problem.png' | relative_url }}"><source src="{{ '/assets/video/previews/ral-preview.mp4' | relative_url }}" type="video/mp4"></video></a>
    <div class="work-body">
      <div class="work-meta"><span>IEEE RA-L</span><span>第一作者</span><span>2026</span></div>
      <h3><a href="{{ '/projects/ral-tendon-estimation/' | relative_url }}">绳驱超冗余机械臂张力状态估计与真机闭环验证</a></h3>
      <p class="work-title-en">Physics-Guided Learning for Tendon State Estimation of Cable-Driven Hyper-Redundant Robots</p>
      <p class="work-authors"><strong>Jiaxun He</strong>, Jun-Guo Lu, Qing-Hao Zhang, Zhenpu Zhu, Zhanxuan Peng, Guoying Gu</p>
      <p>提出物理引导级联状态估计模型 PG-CHTC，在仅有末端关节侧监督的条件下在线估计全臂张力，并部署到 10 Hz 真机闭环。</p>
      <p class="work-evidence">24 DoF 实机 · 6.8 万帧 · 37.6→11.2 N RMSE · 23.5 ms</p>
      <p class="work-links"><a href="{{ '/projects/ral-tendon-estimation/' | relative_url }}">项目主页</a><a href="https://doi.org/10.1109/LRA.2026.3709642">论文</a></p>
    </div>
  </article>

  <article class="work-item">
    <a class="work-media work-media--dexumi" href="{{ '/projects/dexumi-codesign/' | relative_url }}"><img src="{{ '/assets/img/dexumi/dexumi-codesign-cover.jpg' | relative_url }}" alt="MANO 人手与 DexUMI 穿戴仿真"></a>
    <div class="work-body">
      <div class="work-meta"><span>穹彻智能</span><span>具身智能实习生</span><span>2026.05–2026.10</span></div>
      <h3><a href="{{ '/projects/dexumi-codesign/' | relative_url }}">UMI / DexUMI 无本体数采装置 Co-design</a></h3>
      <p>从开源 DexUMI–XHand 系统复现出发，自主扩展多模态数采与仿真遥操作，进一步连接 MANO 穿戴控制、人体工效诊断与参数化 CAD，支撑装置方案比较与迭代。</p>
      <p><strong>4 类装配体 · 775 项完整回归测试通过</strong></p>
      <p class="work-links"><a href="{{ '/projects/dexumi-codesign/' | relative_url }}">项目主页</a></p>
    </div>
  </article>

  <article class="work-item" id="astribot">
    <a class="work-media" href="{{ '/projects/astribot-app-agent/' | relative_url }}"><img src="{{ '/assets/img/astribot/xiangqi-overview.jpg' | relative_url }}" alt="T1机器人在仿真中执行象棋走子"></a>
    <div class="work-body">
      <div class="work-meta"><span>星尘智能</span><span>实习生</span><span>2026.10–至今</span></div>
      <h3><a href="{{ '/projects/astribot-app-agent/' | relative_url }}">机器人象棋应用与 Agent 执行适配</a></h3>
      <p>参与星尘 OS 象棋应用开发与 SDK 联调，以及 ASPIRE 在 T1 平台的复现与适配，连接任务请求、动作执行、状态反馈与仿真验证。</p>
      <p class="work-evidence">三回合走子与吃子 · App / SDK 联调 · 仿真抓取抬升</p>
      <p class="work-links"><a href="{{ '/projects/astribot-app-agent/' | relative_url }}">项目与视频</a></p>
    </div>
  </article>

  <article class="work-item">
    <a class="work-media work-media--video-cover" href="{{ '/projects/cdhrr-planning/' | relative_url }}"><video muted autoplay loop playsinline preload="metadata" poster="{{ '/assets/img/cast/zigzag-corridor-poster.png' | relative_url }}"><source src="{{ '/assets/video/cast/zigzag-corridor-comparison.mp4' | relative_url }}" type="video/mp4"></video></a>
    <div class="work-body">
      <div class="work-meta"><span>学术研究</span><span>在研</span><span>2025–至今</span></div>
      <h3><a href="{{ '/projects/cdhrr-planning/' | relative_url }}">面向绳驱超冗余机器人的封闭空间闭环规划与评价（CAST）</a></h3>
      <p class="work-title-en">Closed-loop Planning and Evaluation for Cable-Driven Hyper-Redundant Robots</p>
      <p>构建参数化机器人与绳驱控制、九类语义场景、闭环成功数据、扩散策略、全臂几何选择和绳驱遥测评价的一体化研究链。</p>
      <p><strong>24 DoF / 36 绳 · 9 类场景 · 任务 / 几何 / 绳驱评价</strong></p>
      <p class="work-links"><a href="{{ '/projects/cdhrr-planning/' | relative_url }}">项目主页</a></p>
    </div>
  </article>
</div>

<h3 class="work-tier-title">竞赛与工业项目</h3>

<div class="work-list">
  <article class="work-item">
    <a class="work-media" href="{{ '/competitions/robocon-2022/' | relative_url }}"><video muted autoplay loop playsinline preload="metadata" poster="{{ '/assets/img/robocon/video/tongchuang-2022.jpg' | relative_url }}"><source src="{{ '/assets/video/previews/robocon-preview.mp4' | relative_url }}" type="video/mp4"></video></a>
    <div class="work-body">
      <div class="work-meta"><span>机器人竞赛</span><span>全国一等奖 ×2</span><span>全国二等奖 ×1</span></div>
      <h3><a href="{{ '/competitions/robocon-2022/' | relative_url }}">ROBOCON 2022 机器人电控与整机联调</a></h3>
      <p>担任电控硬件负责人，完成 PCB、传感采集、电机与通信接口，以及四台参赛机器人的布线、调试与赛场保障。</p>
      <p class="work-evidence">4 台机器人 · 全国一等奖 ×2 · 全国二等奖 ×1</p>
      <p class="work-links"><a href="{{ '/competitions/robocon-2022/' | relative_url }}">竞赛主页</a></p>
    </div>
  </article>

  <article class="work-item">
    <a class="work-media" href="{{ '/projects/rotary-steering-system/' | relative_url }}"><img src="{{ '/assets/img/rotary-steering/system-chain.png' | relative_url }}" alt="旋转导向钻井地面—井下信息链路示意图"></a>
    <div class="work-body">
      <div class="work-meta"><span>工业项目</span><span>算法与嵌入式</span><span>2024–至今</span></div>
      <h3><a href="{{ '/projects/rotary-steering-system/' | relative_url }}">旋转导向钻井轨迹预测与下传解码</a></h3>
      <p>围绕地面—井下信息链路开展轨迹趋势预测与泥浆脉冲下传解码研究，覆盖物理—数据融合时序建模及嵌入式仪器链路。</p>
      <p class="work-evidence">轨迹趋势预测 · 10 Hz 下传解码 · 252 条历史回放</p>
      <p class="work-links"><a href="{{ '/projects/rotary-steering-system/' | relative_url }}">项目主页</a></p>
    </div>
  </article>
</div>

<div id="videos"></div>

## 机器人与实验视频

<div class="video-grid">
  <figure class="project-video">
    <video controls playsinline preload="none" poster="{{ '/assets/img/ral/problem.png' | relative_url }}"><source src="{{ '/assets/video/ral/pg-chtc-overview.mp4' | relative_url }}" type="video/mp4"></video>
    <figcaption><strong>绳驱机械臂张力估计</strong> · 论文方法与真机闭环验证。<a href="{{ '/projects/ral-tendon-estimation/' | relative_url }}">项目详情</a></figcaption>
  </figure>
  <figure class="project-video">
    <video controls playsinline preload="none" poster="{{ '/assets/img/ral/sjtu-iii-pipe-tank-inspection-poster.jpg' | relative_url }}"><source src="{{ '/assets/video/ral/sjtu-iii-pipe-tank-inspection.mp4' | relative_url }}" type="video/mp4"></video>
    <figcaption><strong>SJTU-Snake III 真机</strong> · 课题组实验平台的管罐巡检演示。</figcaption>
  </figure>
  <figure class="project-video">
    <video controls playsinline preload="none" poster="{{ '/assets/img/dexumi/posters/01-multimodal-workstation.jpg' | relative_url }}"><source src="{{ '/assets/video/dexumi/01_multimodal_workstation.mp4' | relative_url }}" type="video/mp4"></video>
    <figcaption><strong>DexUMI 多模态数采</strong> · 穿戴装置与真实数据采集。<a href="{{ '/projects/dexumi-codesign/baseline/' | relative_url }}">项目详情</a></figcaption>
  </figure>
  <figure class="project-video">
    <video controls playsinline preload="none" poster="{{ '/assets/img/dexumi/posters/04-task-execution-success.jpg' | relative_url }}"><source src="{{ '/assets/video/dexumi/04_task_execution_success.mp4' | relative_url }}" type="video/mp4"></video>
    <figcaption><strong>XHand 遥操作</strong> · 真实穿戴输入驱动仿真推块任务。</figcaption>
  </figure>
  <figure class="project-video">
    <video controls playsinline preload="none" poster="{{ '/assets/img/astribot/xiangqi-overview.jpg' | relative_url }}"><source src="{{ '/assets/video/astribot/xiangqi-overview.mp4' | relative_url }}" type="video/mp4">可<a href="{{ '/assets/video/astribot/xiangqi-overview.mp4' | relative_url }}">直接打开视频</a>。</video>
    <figcaption><strong>星尘 · 机器人象棋</strong> · 28 秒，固定三回合含吃子，仿真原状态回放。<a href="{{ '/projects/astribot-app-agent/#xiangqi' | relative_url }}">项目与完整演示</a></figcaption>
  </figure>
  <figure class="project-video">
    <video controls playsinline preload="none" poster="{{ '/assets/img/astribot/agent-lift.jpg' | relative_url }}"><source src="{{ '/assets/video/astribot/agent-lift.mp4' | relative_url }}" type="video/mp4">可<a href="{{ '/assets/video/astribot/agent-lift.mp4' | relative_url }}">直接打开视频</a>。</video>
    <figcaption><strong>星尘 · Agent 执行适配</strong> · 23 秒，T1 / SDK 仿真中的单次抓取抬升。<a href="{{ '/projects/astribot-app-agent/#agent' | relative_url }}">项目详情</a></figcaption>
  </figure>
  <figure class="project-video">
    <video controls playsinline preload="none" poster="{{ '/assets/img/robocon/video/tongchuang-2022.jpg' | relative_url }}"><source src="{{ '/assets/video/robocon/tongchuang-2022-second-match.mp4' | relative_url }}" type="video/mp4"></video>
    <figcaption><strong>ROBOCON 2022</strong> · “同创辉煌”比赛实况。<a href="{{ '/competitions/robocon-2022/' | relative_url }}">竞赛经历</a></figcaption>
  </figure>
</div>

## 教育经历

<div class="education-list">
  <div class="education-item">
    <div>
      <h3>上海交通大学</h3>
      <p>自动化与感知学院 · 控制科学与工程（学术硕士）</p>
    </div>
    <time>2024.09 – 2027.03（预计）</time>
  </div>
  <div class="education-item">
    <div>
      <h3>武汉大学</h3>
      <p>自动化（工学学士）</p>
    </div>
    <time>2020.09 – 2024.06</time>
  </div>
</div>
