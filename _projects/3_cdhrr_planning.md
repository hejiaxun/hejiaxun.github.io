---
layout: page
title: 面向绳驱超冗余机器人的封闭空间闭环规划与评价（CAST）
description: 从参数化机器人、36 绳控制器和语义 Benchmark，到闭环成功数据、扩散策略、几何选择与绳驱遥测评价。
kicker: Closed-loop Planning and Evaluation for Cable-Driven Hyper-Redundant Robots
importance: 2
category: research
permalink: /projects/cdhrr-planning/
---

<div class="project-video project-video--hero">
  <video muted autoplay loop playsinline preload="auto" poster="{{ '/assets/img/cast/zigzag-corridor-poster.png' | relative_url }}">
    <source src="{{ '/assets/video/cast/zigzag-corridor-comparison.mp4' | relative_url }}" type="video/mp4">
  </video>
  <p>折线通道 HARD 场景：对比方法发生碰撞，CAST 完成全臂无碰撞闭环规划。</p>
</div>

<p class="project-lead"><strong>CAST 将慢速闭环成功搜索蒸馏为毫秒级局部策略，并在部署时进行全臂几何选择。</strong>在锁定的五种子主协议中，方法达到 82.2% 成功率、69.8% HARD 场景成功率与 7.7 ms/step 规划时延。</p>

<div class="metric-row project-metrics project-metrics--three">
  <div class="metric"><strong>82.2±2.4%</strong><span>总体成功率</span></div>
  <div class="metric"><strong>69.8%</strong><span>HARD 场景成功率</span></div>
  <div class="metric"><strong>7.7 ms</strong><span>单步规划时延</span></div>
</div>

<p class="project-actions"><a class="button button-primary" href="{{ '/assets/interactive/cast/CAST-interactive-exhibit.html' | relative_url }}">查看交互证据</a><a class="button" href="#项目视频">观看完整讲解</a></p>

## 为什么普通路径规划不够

绳驱超冗余机械臂需要让整条细长本体穿过多层框架、管线、连续收缩口和半封闭结构。**末端到达、全臂无碰撞和绳驱可执行性是三个不同问题**：几何上可行的路径不一定能被低层绳驱控制器稳定执行，较大的障碍间隙也不能替代张力工作区、跟踪误差和绳长变化等指标。

<figure class="project-figure project-figure--wide">
  <img src="{{ '/assets/img/cast/benchmark_nine_scene_families.png' | relative_url }}" alt="九类语义封闭场景，包括多层框架、管线、连续收缩和密集随机障碍">
  <figcaption>九类语义封闭场景覆盖多层框架、管线、多隔舱、柱阵、连续收缩、折线通道、半封闭结构、非结构障碍和密集随机场。</figcaption>
</figure>

## 先把机器人与绳驱控制做成可复用系统

项目首先建立参数化 CDHRR 建模基础设施：以节数 <em>N</em>、单节长度、直径和绳路参数生成 MuJoCo XML，自动构造 <em>2N</em> 个转动关节、<em>3N</em> 根空间绳、执行器与绳长传感器。配套控制器从模型读取维度，通过关节 PD、数值绳长 Jacobian、目标绳长前馈、预张力引导和绳长速率限制，将关节参考转换为 <em>3N</em> 路绳长命令。

<figure class="project-figure project-figure--wide">
  <img src="{{ '/assets/img/cast/parameterized_cdhrr_and_controller.svg' | relative_url }}" alt="参数化 CDHRR 模型生成与 N 参数化绳驱控制链">
  <figcaption>参数化机器人与绳驱控制链。4、8、12、16 节模型用于结构和控制接口检查；锁定规划评测仍采用 12 节、24 自由度、36 绳固定基座配置。</figcaption>
</figure>

这层系统工作把机器人结构、绳路、低层控制和上层规划解耦，使上层方法始终通过“观测—关节参考—绳长命令”的统一接口运行。它证明的是**可配置的建模与控制基础设施**，并不等同于学习策略已经实现跨形态零样本泛化。

## CAST：从闭环成功回合到快速局部规划

训练阶段使用完整 MuJoCo 与绳驱控制链进行闭环随机尝试，只保留真实到达目标的成功回合，并转化为“当前观测—未来关节增量块”监督。部署阶段，条件扩散策略一次提出 32 个 <em>8×24</em> 动作块，先以链上锚点进行快速全臂筛选，再对前五个候选计算 MuJoCo 胶囊间隙；系统仅执行最优候选的前四步，随后根据新观测滚动重规划。

<figure class="project-figure project-figure--wide">
  <img src="{{ '/assets/img/cast/system_method_overview.png' | relative_url }}" alt="从控制器在环成功回合到扩散策略与部署时全臂几何选择的 CAST 方法链">
  <figcaption>从控制器在环成功回合、条件扩散蒸馏，到部署时粗到细全臂几何选择的完整链路。</figcaption>
</figure>

## 锁定 Benchmark 与主要结果

Benchmark 使用 EASY / MEDIUM / HARD 三档目标、五个随机种子和统一终止协议，同时评价任务结果、规划几何、控制跟踪和绳驱执行状态；主评测中每种方法覆盖 1,620 个 episode。对比对象包括同一 runner 下适配的 RRT-Connect、DLS / FABRIK IK、IK + null-space MPC、行为克隆扩散策略和优化式规划方法。

<figure class="project-figure project-figure--wide">
  <img src="{{ '/assets/img/cast/main_results.png' | relative_url }}" alt="CAST 在五种子协议下的成功率、时延和分难度结果">
  <figcaption>锁定五种子协议下的成功率—规划时延关系及 EASY / MEDIUM / HARD 分层结果。</figcaption>
</figure>

## 为什么还要看绳驱指标

项目将张力可行子步比例、峰值张力代理、跟踪误差、绳长变化和限位裕度纳入统一评价。最小障碍间隙与张力可行子步比例接近不相关，说明**几何安全裕度不能替代绳驱执行评价**；不同规划与控制配置也会在任务成功率、标称工作区一致性和峰值载荷代理之间形成权衡。

<div class="project-media-grid">
  <figure class="project-figure">
    <img src="{{ '/assets/img/cast/clearance_vs_tfsub.png' | relative_url }}" alt="最小障碍间隙与张力可行子步比例的关系">
    <figcaption>最小间隙与张力可行子步比例接近不相关。</figcaption>
  </figure>
  <figure class="project-figure">
    <img src="{{ '/assets/img/cast/success_tendon_tradeoff.png' | relative_url }}" alt="任务成功、张力工作区一致性和峰值载荷之间的权衡">
    <figcaption>任务成功、标称张力工作区一致性与峰值载荷代理之间的权衡。</figcaption>
  </figure>
</div>

## 仿真—实测静态力尺度对应

基于真实平台连续运动过程中采集的数据，对仿真模型的预张力与等效刚度进行标定，并以姿态分组五折留出方式比较 36 根绳的仿真与实测静态力。共评估 50,834 个姿态帧，留出 MAE 为 17.4 N、RMSE 为 26.3 N、NMAE 为 10.0%。

<figure class="project-figure project-figure--wide">
  <img src="{{ '/assets/img/cast/sim_real_static_force.png' | relative_url }}" alt="36 绳仿真与实测静态力的五折留出对应结果">
  <figcaption>36 绳真实静态力与仿真预测的姿态分组五折留出对应。该结果验证静态力尺度对应关系，不代表规划策略已完成动态实机障碍部署。</figcaption>
</figure>

## 项目视频
{: #项目视频 }

<div class="project-video">
  <video controls playsinline preload="metadata" poster="{{ '/assets/img/cast/cover_overview_16x9.png' | relative_url }}">
    <source src="{{ '/assets/video/cast/project_talk_90s.mp4' | relative_url }}" type="video/mp4">
  </video>
  <p>90 秒项目讲解：系统、方法、评测和公开边界。</p>
</div>

<div class="video-grid video-grid--cases">
  <div class="project-video"><video controls muted playsinline preload="metadata"><source src="{{ '/assets/video/cast/cases/sequential_constriction_hard_success.mp4' | relative_url }}" type="video/mp4"></video><p>连续收缩场景 · HARD · 成功</p></div>
  <div class="project-video"><video controls muted playsinline preload="metadata"><source src="{{ '/assets/video/cast/cases/zigzag_corridor_hard_success.mp4' | relative_url }}" type="video/mp4"></video><p>折线通道场景 · HARD · 成功</p></div>
  <div class="project-video"><video controls muted playsinline preload="metadata"><source src="{{ '/assets/video/cast/cases/random_dense_hard_success.mp4' | relative_url }}" type="video/mp4"></video><p>密集随机场景 · HARD · 成功</p></div>
  <div class="project-video"><video controls muted playsinline preload="metadata"><source src="{{ '/assets/video/cast/cases/pipeline_crossing_hard_boundary.mp4' | relative_url }}" type="video/mp4"></video><p>管线穿越场景 · HARD · 边界案例</p></div>
</div>

## 当前公开边界

<div class="claim-boundary">
  <ul>
    <li>锁定规划 Benchmark 是固定基座、12 节、24 自由度、36 绳的 MuJoCo 仿真。</li>
    <li>在线选择器基于运动学与离散命令节点的胶囊间隙，不是在线动力学 rollout 或连续扫掠体证明。</li>
    <li>张力可行子步比例描述固定标称工作区一致性，不代表完整硬件张力安全认证。</li>
    <li>静态力实验验证留出姿态上的力尺度对应，不等同于动态实机障碍规划或策略 Sim-to-Real。</li>
  </ul>
</div>
