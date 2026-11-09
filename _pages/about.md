---
layout: about
title: 首页
permalink: /
description: 贺加勋的机器人研究与工程个人主页。
---

## 近期工作

<div class="news-list">
  <div class="news-item"><time>灵巧操作</time><p>以 DexUMI / XHand 复现为基础，将真实数采、仿真遥操作、MANO 穿戴控制与人体工效诊断连接到参数化装置设计，研究<strong>固定目标执行器下的数采装置 Co-design</strong>。<a href="{{ '/projects/dexumi-codesign/' | relative_url }}">四个工作模块 →</a></p></div>
  <div class="news-item"><time>规划控制</time><p>围绕 CAST 建立<strong>参数化机器人—绳驱控制—闭环规划—执行评价</strong>研究链，联合考察任务到达、全臂避障与绳驱执行状态。<a href="{{ '/projects/cdhrr-planning/' | relative_url }}">研究方法与验证 →</a></p></div>
  <div class="news-item"><time>物理学习</time><p>从 RA-L 的全臂张力估计出发，关注物理先验与时序学习如何服务机器人状态感知，并完成<strong>估计器在环的真机验证</strong>。<a href="{{ '/projects/ral-tendon-estimation/' | relative_url }}">论文与实验 →</a></p></div>
</div>

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
      <p class="work-links"><a href="{{ '/projects/ral-tendon-estimation/' | relative_url }}">项目主页</a><a href="https://doi.org/10.1109/LRA.2026.3709642">论文</a><a href="{{ '/assets/video/ral/pg-chtc-overview.mp4' | relative_url }}">视频</a></p>
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
      <p class="work-links"><a href="{{ '/competitions/robocon-2022/' | relative_url }}">竞赛主页</a></p>
    </div>
  </article>

  <article class="work-item">
    <a class="work-media" href="{{ '/projects/rotary-steering-system/' | relative_url }}"><img src="{{ '/assets/img/rotary-steering/system-chain.png' | relative_url }}" alt="旋转导向钻井地面—井下信息链路示意图"></a>
    <div class="work-body">
      <div class="work-meta"><span>工业项目</span><span>算法与嵌入式</span><span>2024–至今</span></div>
      <h3><a href="{{ '/projects/rotary-steering-system/' | relative_url }}">旋转导向钻井轨迹预测与下传解码</a></h3>
      <p>围绕地面—井下信息链路开展轨迹趋势预测与泥浆脉冲下传解码研究，覆盖物理—数据融合时序建模及嵌入式仪器链路。</p>
      <p class="work-links"><a href="{{ '/projects/rotary-steering-system/' | relative_url }}">项目主页</a></p>
    </div>
  </article>
</div>

## 最新动态

<div class="news-list">
  <div class="news-item"><time>2026.10</time><p>完成穹彻智能具身智能算法实习。</p></div>
  <div class="news-item"><time>2026.07</time><p>第一作者论文 <em>Physics-Guided Learning for Tendon State Estimation of Cable-Driven Hyper-Redundant Robots</em> 正式发表于 IEEE Robotics and Automation Letters。</p></div>
  <div class="news-item"><time>2026.05</time><p>加入穹彻智能，担任具身智能算法实习生。</p></div>
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
