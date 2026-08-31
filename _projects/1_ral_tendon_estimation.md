---
layout: page
title: Physics-Guided Learning for Tendon State Estimation of Cable-Driven Hyper-Redundant Robots
description: 第一作者 IEEE RA-L 论文：终端监督下的绳张力状态估计与真机闭环验证。
kicker: IEEE Robotics and Automation Letters · 2026
img: assets/img/ral/problem.png
importance: 1
category: research
permalink: /projects/ral-tendon-estimation/
---

**Jiaxun He**, Jun-Guo Lu, Qing-Hao Zhang, Zhenpu Zhu, Zhanxuan Peng, Guoying Gu

*IEEE Robotics and Automation Letters*, vol. 11, no. 8, pp. 9962–9969, 2026<br>
[DOI: 10.1109/LRA.2026.3709642](https://doi.org/10.1109/LRA.2026.3709642)

## 视频概览 {#video-overview}

<div class="project-video">
  <video controls playsinline preload="metadata" poster="{{ '/assets/img/ral/problem.png' | relative_url }}">
    <source src="{{ '/assets/video/ral/pg-chtc-overview.mp4' | relative_url }}" type="video/mp4">
    当前浏览器不支持内嵌视频，可<a href="{{ '/assets/video/ral/pg-chtc-overview.mp4' | relative_url }}">直接打开视频</a>。
  </video>
  <p>论文问题、PG-CHTC 方法及真机闭环验证概览。视频仅在点击后播放。</p>
</div>

## SJTU-Snake III（SJTU-III）实验平台

**SJTU-Snake III（SJTU-III）是上海交通大学机械与动力工程学院谷国迎团队自主研发的绳驱超冗余机器人平台。**平台由 12 个串联两自由度关节模块构成，形成 24 个转动自由度并由 36 根绳索驱动。系统集成驱动箱、绳索导向机构、直线进给与移动平台，面向管道、罐体等受限空间中的检测与作业任务。本文在既有平台上研究关节侧张力状态估计、CPU 在线部署和闭环验证。

> **贡献边界：**平台本体、既有传感硬件与张力—构型混合控制器为课题组长期研发成果；本文个人贡献见文末。

<div class="media-pair">
  {% include figure.html path="assets/img/ral/sjtu-iii-platform.png" alt="SJTU-III 绳驱超冗余机器人平台组成" caption="SJTU-III 系统组成：驱动箱、绳索导向机构、机器人本体、直线进给平台与移动平台。" %}
  <figure class="project-video project-video--paired">
    <video controls muted playsinline preload="metadata" poster="{{ '/assets/img/ral/sjtu-iii-pipe-tank-inspection-poster.jpg' | relative_url }}">
      <source src="{{ '/assets/video/ral/sjtu-iii-pipe-tank-inspection.mp4' | relative_url }}" type="video/mp4">
      当前浏览器不支持内嵌视频，可<a href="{{ '/assets/video/ral/sjtu-iii-pipe-tank-inspection.mp4' | relative_url }}">直接打开视频</a>。
    </video>
    <figcaption>SJTU-III 在管罐系统中开展受限空间巡检的公开演示。</figcaption>
  </figure>
</div>

### 测量链与估计目标

<div class="platform-specs" aria-label="SJTU-Snake III 平台参数">
  <div><span>机构规模</span><strong>12 节 · 24 DoF · 36 绳</strong></div>
  <div><span>在线观测</span><strong>24 路角度 · 36 路张力</strong></div>
  <div><span>模型与控制接口</span><strong>10 Hz</strong></div>
</div>

平台在线提供 24 路关节角与 36 路驱动侧张力。绳索逐级穿过导向孔，摩擦、换向、迟滞和历史状态使驱动侧张力不能直接等同于各节关节侧张力；训练与离线验证阶段仅在末节设置关节侧张力参考，PG-CHTC 从在线可测量量估计全臂各节关节侧张力。

<div class="media-pair">
  {% include figure.html path="assets/img/ral/sjtu-snake3-force-sensing.png" alt="SJTU-Snake III 驱动侧张力测量方案示意" caption="平台驱动侧张力测量方案示意。图源：课题组既有技术材料；用于说明本文实验条件。" %}
  {% include figure.html path="assets/img/ral/sjtu-snake3-angle-sensing.png" alt="SJTU-Snake III 关节角测量方案示意" caption="平台关节角测量方案示意。图源：课题组既有技术材料；用于说明本文实验条件。" %}
</div>

[打开高清张力测量示意]({{ '/assets/img/ral/sjtu-snake3-force-sensing.png' | relative_url }}) · [打开高清关节角测量示意]({{ '/assets/img/ral/sjtu-snake3-angle-sensing.png' | relative_url }})

关节角由各节 AS5600 绝对磁编码链测得；驱动箱侧布置 36 路串联张力测量。各通道在进入模型与控制回路前进行统一时间对齐、滤波与 10 Hz 重采样。这里的 **10 Hz 指同步后的模型与控制接口**，不等同于原始传感器采样率。

## 问题

绳驱超冗余机械臂的关节侧绳张力是控制中的重要状态，但沿机械臂链路通常无法直接测量。系统能够测得所有绳索的驱动侧张力，却只能在末节获得关节侧真实张力。解析传动模型会累积摩擦误差，而缺少中间监督的纯数据驱动模型又难以可靠辨识整条传动链。

{% include figure.html path="assets/img/ral/problem.png" alt="绳驱超冗余机械臂的传感约束与张力估计问题" caption="12 节、24 自由度绳驱超冗余机械臂：驱动侧张力可测，训练阶段仅有末节关节侧张力监督。" %}

## 方法

我提出了 **Physics-Guided Cable-Hole Transmission Cascade（PG-CHTC）**：在各导向孔间复用正值逐元素张力比预测器，引入 Euler–Eytelwein / Capstan 物理先验，并以严格因果时序残差补偿反向运动、迟滞和历史相关误差。训练阶段仅使用末节关节侧张力监督，部署阶段则只依赖驱动侧传感。

{% include figure.html path="assets/img/ral/method.png" alt="PG-CHTC 物理引导级联模型" caption="共享级联单元将静态传动模型、物理先验与因果时序修正结合起来。" %}

## 状态估计如何进入机器人控制

闭环实验并不是另起一套控制器，而是将 PG-CHTC 作为虚拟传感器，接入课题组已有的**张力—构型混合控制器**。下面先用控制器论文原图说明完整控制关系，再单独标出本文新增模块。

### 既有张力—构型混合控制器

既有控制器以关节角跟踪为主支路，同时用绳张力反馈维持传动链稳定。多节系统还需要补偿绳孔间隔、绳索变形与摩擦传递，并依据收紧/放松状态及张力上下界约束驱动命令。

{% include figure.html path="assets/img/ral/zhu-2025-hybrid-control-fig4.png" alt="Zhu 等提出的单节与多节张力—构型混合控制器" caption="既有单节与多节张力—构型混合控制器。图源：Zhu et al., IEEE RA-L 2025, Fig. 4；© 2025 IEEE。此处仅作学术说明，原图及版权归原作者与 IEEE。" %}

[打开高清控制框图]({{ '/assets/img/ral/zhu-2025-hybrid-control-fig4.png' | relative_url }}) · [查看既有控制器论文原文](https://doi.org/10.1109/LRA.2025.3559829)

- **构型反馈：**根据参考关节角与实测关节角之间的误差生成构型校正量，并通过运动学/绳长映射作用于驱动绳。
- **张力反馈：**根据目标张力与关节侧张力之间的误差生成分段张力校正量，避免绳索松弛或过张紧造成跟踪不稳。
- **多节协调与安全：**将两类校正量与绳孔间隔、绳索变形及摩擦传递补偿合成；根据绳索收紧/放松状态和张力边界约束输出驱动命令。

### PG-CHTC 接入位置

PG-CHTC 读取实机能够在线获得的关节角与驱动侧张力，逐节估计原本无法直接测量的关节侧张力，再将估计结果送入张力反馈支路。它替换的是**内部张力状态的获取方式**，而不是构型控制器、张力控制器、驱动与安全逻辑。

{% include figure.html path="assets/img/ral/fig-estimator-in-loop.png" alt="论文中的 PG-CHTC estimator-in-the-loop 控制框图" caption="论文原图：PG-CHTC 读取关节角与驱动侧张力，在线估计全臂关节侧张力，并将估计结果反馈至既有张力—构型混合控制器。图源：He et al., IEEE RA-L 2026；© 2026 IEEE。" %}

[打开高清控制框图]({{ '/assets/img/ral/fig-estimator-in-loop.png' | relative_url }})

### 一个 10 Hz 闭环周期

1. Qt 控制器读取当前关节角 `θ(t)` 和驱动侧张力 `T_act(t)`。
2. 独立 CPU 推理服务按绳路级联顺序执行 PG-CHTC 因果前向推理，得到全臂关节侧张力估计 `T̂_joint(t)`。
3. 构型支路计算 `θ_ref − θ(t)`，张力支路计算 `T_ref − T̂_joint(t)`，分别形成校正量。
4. 控制器合成校正量并执行传动补偿与安全检查，随后驱动绳索；下一帧传感数据再次进入闭环。

### 工程接入与来源边界

PG-CHTC 以独立 CPU 服务运行，通过 UDP 接入既有 Qt 上位机，在不改动控制器主逻辑的前提下完成 10 Hz 在线调用。既有控制框架来源于 Zhenpu Zhu、Ziqing Li、Zhanxuan Peng、Chao Liu 与 Guoying Gu 的论文 [*Hybrid Tension and Configuration Control of Cable-Driven Hyper-Redundant Robots for High Accuracy and Stability*](https://doi.org/10.1109/LRA.2025.3559829)，发表于 *IEEE Robotics and Automation Letters*，2025。本文工作的贡献边界是 PG-CHTC 状态估计、CPU/UDP 部署及其闭环验证，不主张对既有控制器的设计所有权。

## 实验结果

<div class="row text-center">
  <div><strong>70.2%</strong><br><small>张力 RMSE 降幅</small></div>
  <div><strong>11.2 N</strong><br><small>最终总体 RMSE</small></div>
  <div><strong>23.5 ms</strong><br><small>CPU 推理时间</small></div>
  <div><strong>44.4–50.8%</strong><br><small>稳定时间缩短</small></div>
</div>

- 在 4 类实验协议、约 6.8 万帧真机数据上，将总体张力 RMSE 从 37.6 N 降至 11.2 N。
- 总体 R² 达到 0.868，CPU 单次推理时间为 23.5 ms。
- 接入闭环后，关节角跟踪稳定时间缩短 44.4%–50.8%。

## 个人贡献

我为论文第一作者，负责问题定义、PG-CHTC 架构与物理引导目标设计、数据与评估管线、CPU 推理集成及闭环验证；在线部署与实验基于课题组既有的张力—构型混合控制器完成。
