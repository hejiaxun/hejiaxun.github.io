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

## SJTU-III 实验平台

**SJTU-III 是上海交通大学机械与动力工程学院谷国迎团队自主研发的绳驱超冗余机器人平台。**系统由驱动箱、绳索导向机构、12 节机器人本体、直线进给平台与移动平台组成，面向管道、罐体等受限空间中的检测与作业任务。本研究基于该平台开展张力状态估计、在线部署和闭环实验。

<div class="media-pair">
  {% include figure.html path="assets/img/ral/sjtu-iii-platform.png" alt="SJTU-III 绳驱超冗余机器人平台组成" caption="SJTU-III 系统组成：驱动箱、绳索导向机构、机器人本体、直线进给平台与移动平台。" %}
  {% include figure.html path="assets/img/ral/sjtu-iii-pipe-tank-inspection.gif" alt="SJTU-III 机器人执行管罐系统巡检任务" caption="SJTU-III 在管罐系统中的受限空间巡检演示。" %}
</div>

## 问题

绳驱超冗余机械臂的关节侧绳张力是控制中的重要状态，但沿机械臂链路通常无法直接测量。系统能够测得所有绳索的驱动侧张力，却只能在末节获得关节侧真实张力。解析传动模型会累积摩擦误差，而缺少中间监督的纯数据驱动模型又难以可靠辨识整条传动链。

{% include figure.html path="assets/img/ral/problem.png" alt="绳驱超冗余机械臂的传感约束与张力估计问题" caption="12 节、24 自由度绳驱超冗余机械臂：驱动侧张力可测，训练阶段仅有末节关节侧张力监督。" %}

## 方法

我提出了 **Physics-Guided Cable-Hole Transmission Cascade（PG-CHTC）**：在各导向孔间复用正值逐元素张力比预测器，引入 Euler–Eytelwein / Capstan 物理先验，并以严格因果时序残差补偿反向运动、迟滞和历史相关误差。训练阶段仅使用末节关节侧张力监督，部署阶段则只依赖驱动侧传感。

{% include figure.html path="assets/img/ral/method.png" alt="PG-CHTC 物理引导级联模型" caption="共享级联单元将静态传动模型、物理先验与因果时序修正结合起来。" %}

## 真机部署

估计器以独立 CPU 推理服务部署，并通过 UDP 接入既有 Qt 控制器。在不改动控制器主逻辑的前提下，模型估计结果进入 10 Hz 张力—构型混合控制闭环，用于验证状态估计对真实机器人动态响应的作用。

{% include figure.html path="assets/img/ral/deployment.png" alt="张力估计器接入真机闭环" caption="PG-CHTC 在线推理服务与既有控制系统的闭环集成。" %}

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
