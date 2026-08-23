---
layout: page
title: 旋转导向钻井轨迹预测与下传解码
description: 围绕地面—井下信息链路开展的轨迹趋势预测与泥浆脉冲下传解码研究。
kicker: Industrial AI · Embedded Systems
importance: 0
category: industrial-project
permalink: /projects/rotary-steering-system/
img: /assets/img/rotary-steering/system-chain.svg
---

## 系统视角

围绕旋转导向钻井的“地面决策—指令下传—井下执行—状态测量”链路，我先后参与了两项工业研究：已结题的泥浆脉冲下传解码解决井下指令的传输与恢复；在研的轨迹趋势预测则面向地面侧多井数据建模与决策辅助。下文按系统关系合并展示，**不表示两项工作已集成为井场在线闭环产品**。

<figure class="project-figure project-figure--system-cover">
  <img src="{{ '/assets/img/rotary-steering/system-chain.svg' | relative_url }}" alt="旋转导向钻井地面决策、泥浆脉冲下传、井下执行与测量信息链路示意图">
  <figcaption>两项工作在系统链路中的位置：轨迹预测服务于地面侧趋势判断与决策辅助，下传解码负责恢复经泥浆脉冲传输的井下控制指令。</figcaption>
</figure>

<div class="focus-grid project-module-grid">
  <div class="focus-card">
    <h3>项目一｜泥浆脉冲下传解码</h3>
    <p><strong>2024.03–2024.12｜独立开发｜已结题</strong><br>从模拟信号调理、MCU 实时采集与阀门时序提取，到 0/1 编码恢复和 Qt 历史回放验证。</p>
  </div>
  <div class="focus-card">
    <h3>项目二｜旋转导向轨迹趋势预测</h3>
    <p><strong>2025.12–至今｜核心成员 / 算法开发｜在研</strong><br>国家重大专项子项目、中石化合作；面向多井数据构建缺失感知时序建模与物理—数据融合流程。</p>
  </div>
</div>

## 项目一：泥浆脉冲下传解码

面向测井仪器泥浆脉冲下传信号，构建从模拟电压采集到编码恢复的工程链路：使用信号调理电路获取压力波形，由 MC9S12XET256 固件以 10 Hz 采样并转换为阀门开关时间序列，再依据时序关系解析 0/1 编码；同时开发 Qt 上位机完成历史数据回放、波形观察和软硬件联调。

<div class="metric-row project-metrics">
  <div class="metric"><strong>10 Hz</strong><span>MCU 采集与解码</span></div>
  <div class="metric"><strong>25 口井</strong><span>历史数据覆盖</span></div>
  <div class="metric"><strong>252 条</strong><span>历史数据回放</span></div>
  <div class="metric"><strong>94.8%</strong><span>回放解码成功率</span></div>
</div>

> 94.8% 为历史数据回放验证结果，不等同于井下在线运行结果。

<div class="focus-grid project-module-grid">
  <div class="focus-card">
    <h3>信号调理与采集</h3>
    <p>完成压力传感模拟信号的调理、滤波与接口设计，为 MCU 稳定采样提供输入。</p>
  </div>
  <div class="focus-card">
    <h3>时序与编码解析</h3>
    <p>通过滤波、相关分析、极值检测和自适应阈值提取阀门开关时序，并据此恢复 0/1 编码。</p>
  </div>
  <div class="focus-card">
    <h3>嵌入式固件</h3>
    <p>基于 MC9S12XET256 实现 10 Hz 实时采集、状态管理、时序识别、参数解码和数据回传。</p>
  </div>
  <div class="focus-card">
    <h3>Qt 验证平台</h3>
    <p>支持历史数据回放、波形显示、运行模式切换及上下位机联调，用于算法与硬件链路验证。</p>
  </div>
</div>

<div class="project-media-grid project-media-grid--hardware">
  <figure class="project-figure project-figure--pcb">
    <img src="{{ '/assets/img/mud-pulse/pcb-layout.png' | relative_url }}" alt="泥浆脉冲下传解码电路 PCB 布局">
    <figcaption>采集、处理与通信电路 PCB 布局</figcaption>
  </figure>
  <figure class="project-figure">
    <img src="{{ '/assets/img/mud-pulse/qt-playback.png' | relative_url }}" alt="泥浆脉冲解码 Qt 上位机回放界面">
    <figcaption>Qt 历史波形回放与解码检查</figcaption>
  </figure>
</div>

## 项目二：旋转导向轨迹趋势预测

面向旋转导向钻井中跨井采样测深不一致、字段缺失与工况变化问题，构建多源实钻数据的固定测深对齐、缺失感知时序建模与简化物理校正流程，预测下一个 10 m 井段的井斜、方位与轨迹趋势。项目当前为阶段验证，不代表已完成井场在线部署或闭环控制。

<div class="metric-row project-metrics">
  <div class="metric"><strong>10 口井</strong><span>多源实钻数据</span></div>
  <div class="metric"><strong>3289 条</strong><span>固定测深样本</span></div>
  <div class="metric"><strong>约 0.15°</strong><span>稳斜段井斜平均偏差</span></div>
  <div class="metric"><strong>约 0.50°</strong><span>强造斜段井斜平均偏差</span></div>
</div>

<div class="focus-grid project-module-grid">
  <div class="focus-card">
    <h3>多源测深对齐</h3>
    <p>统一清洗、插值与对齐多井传感和控制数据，生成 10 m 固定测深样本，并保留来源、质量与缺失标记。</p>
  </div>
  <div class="focus-card">
    <h3>缺失感知时序建模</h3>
    <p>使用时序主干表达钻进历史，将缺失掩码与目标工况作为增强输入，降低不同井、不同传感配置带来的分布偏移。</p>
  </div>
  <div class="focus-card">
    <h3>物理—数据融合</h3>
    <p>将简化钻进机理先验与数据驱动预测经门控融合，输出井斜、方位和轨迹趋势，兼顾复杂工况表达与物理可解释性。</p>
  </div>
  <div class="focus-card">
    <h3>统一评测与随钻更新</h3>
    <p>对 34 类模型和 4 类评估协议进行统一比较，组织“历史井预训练 → 随钻更新”流程，并为困难工况保留加权与回退策略。</p>
  </div>
</div>

### 预测流程

<div class="prediction-pipeline" role="img" aria-label="历史窗口与缺失标记进入时序主干，再与目标工况和简化物理先验门控融合，输出下一个十米井段的趋势预测">
  <div class="prediction-stage">
    <span class="prediction-stage__index">01</span>
    <strong>历史窗口</strong>
    <small>多源传感与控制序列</small>
    <span class="prediction-stage__tag">缺失掩码 · 质量标记</span>
  </div>
  <span class="prediction-arrow" aria-hidden="true">→</span>
  <div class="prediction-stage">
    <span class="prediction-stage__index">02</span>
    <strong>缺失感知时序主干</strong>
    <small>TCN / Transformer / LSTM</small>
    <span class="prediction-stage__tag">学习滞后响应</span>
  </div>
  <span class="prediction-arrow" aria-hidden="true">→</span>
  <div class="prediction-stage prediction-stage--fusion">
    <span class="prediction-stage__index">03</span>
    <strong>物理—数据门控融合</strong>
    <div class="prediction-stage__inputs">
      <span>目标工况</span>
      <span>简化物理先验</span>
    </div>
  </div>
  <span class="prediction-arrow" aria-hidden="true">→</span>
  <div class="prediction-stage prediction-stage--result">
    <span class="prediction-stage__index">04</span>
    <strong>下一 10 m 趋势</strong>
    <small>井斜 · 方位 · 轨迹</small>
  </div>
</div>

### 单井示例结果

<figure class="project-figure">
  <img src="{{ '/assets/img/rotary-steering/example-result.png' | relative_url }}" alt="旋转导向钻井井斜与方位趋势预测示例">
  <figcaption>单井示例用于展示趋势跟踪和强造斜工况下的预测表现；项目总体阶段指标以上述 10 口井统一评测结果为准。</figcaption>
</figure>

两项工作分别证明了我在工业仪器软硬件链路和物理—数据融合时序研究中的能力；公开页面保留两者的系统关系，同时严格区分历史回放、阶段验证与现场在线部署。
