---
layout: about
title: 首页
permalink: /
description: 贺加勋的机器人研究与工程个人主页。
---

## 研究兴趣

我的研究兴趣包括**机器人状态估计与控制、高自由度机械臂规划、物理引导学习、机器人仿真与具身智能系统**。我尤其关注如何把物理模型、学习方法、传感与嵌入式系统连接起来，并在真实机器人上完成可验证的部署。

## 最新动态

<div class="news-list">
  <div class="news-item"><time>2026.07</time><p>第一作者论文 <em>Physics-Guided Learning for Tendon State Estimation of Cable-Driven Hyper-Redundant Robots</em> 正式发表于 IEEE Robotics and Automation Letters。</p></div>
  <div class="news-item"><time>2026.05</time><p>加入穹彻智能，开展 DexUMI / XHand 灵巧手数采、MANO 驱动控制、人体工效诊断与参数化 Co-design 研究。</p></div>
  <div class="news-item"><time>2025.08</time><p>开始绳驱超冗余机械臂受限空间规划与绳驱约束控制研究。</p></div>
</div>

## 代表工作

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
    <a class="work-media" href="{{ '/projects/cdhrr-planning/' | relative_url }}"><img src="{{ '/assets/img/ral/sjtu-iii-platform.png' | relative_url }}" alt="SJTU-III 绳驱超冗余机械臂平台"></a>
    <div class="work-body">
      <div class="work-meta"><span>学术研究</span><span>在研</span><span>2025–至今</span></div>
      <h3><a href="{{ '/projects/cdhrr-planning/' | relative_url }}">绳驱超冗余机械臂受限空间规划与绳驱约束控制</a></h3>
      <p>面向 12 节、24 自由度、36 绳机械臂，研究高自由度全臂规划、控制器在环仿真、绳驱执行约束及仿真—实测标定。</p>
      <p class="work-links"><a href="{{ '/projects/cdhrr-planning/' | relative_url }}">项目主页</a></p>
    </div>
  </article>

  <article class="work-item">
    <a class="work-media work-media-text" href="{{ '/projects/dexumi-codesign/' | relative_url }}"><span>DexUMI<br>XHand<br>Co-design</span></a>
    <div class="work-body">
      <div class="work-meta"><span>具身智能实习</span><span>穹彻智能</span><span>2026–至今</span></div>
      <h3><a href="{{ '/projects/dexumi-codesign/' | relative_url }}">UMI / DexUMI 人机接口 Co-design</a></h3>
      <p>围绕固定目标执行器，研究灵巧手数采、MANO 驱动控制、人体工效诊断与参数化 CAD，形成从设计、物理验证到方案比较的 Co-design 流程。</p>
      <p class="work-links"><a href="{{ '/projects/dexumi-codesign/' | relative_url }}">项目主页</a></p>
    </div>
  </article>

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
    <a class="work-media" href="{{ '/projects/rotary-steering-system/' | relative_url }}"><img src="{{ '/assets/img/rotary-steering/cover.svg' | relative_url }}" alt="旋转导向钻井地面—井下信息链路"></a>
    <div class="work-body">
      <div class="work-meta"><span>工业项目</span><span>算法与嵌入式</span><span>2024–至今</span></div>
      <h3><a href="{{ '/projects/rotary-steering-system/' | relative_url }}">旋转导向钻井轨迹预测与下传解码</a></h3>
      <p>围绕地面—井下信息链路开展轨迹趋势预测与泥浆脉冲下传解码研究，覆盖物理—数据融合时序建模及嵌入式仪器链路。</p>
      <p class="work-links"><a href="{{ '/projects/rotary-steering-system/' | relative_url }}">项目主页</a></p>
    </div>
  </article>
</div>
