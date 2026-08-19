---
layout: page
title: 旋转导向钻井轨迹趋势预测
description: 面向跨井缺失、测深不一致与随钻更新的物理—数据融合趋势预测项目。
kicker: Industrial AI & Time-Series Modeling
importance: 0
category: industrial-project
permalink: /projects/rotary-steering-prediction/
img: /assets/img/rotary-steering/model-architecture.png
---

## 项目概览

**时间：** 2025.12–至今  
**职责：** 核心成员 / 算法开发  
**项目属性：** 国家重大专项子项目｜中石化合作

面向旋转导向钻井中跨井采样测深不一致、字段缺失与工况变化问题，构建多源实钻数据的固定测深对齐、缺失感知时序建模与简化物理校正流程，预测下一个 10 m 井段的井斜、方位与轨迹趋势。项目当前为阶段验证，不代表已完成井场在线部署或闭环控制。

<div class="metric-row project-metrics">
  <div class="metric"><strong>10 口井</strong><span>多源实钻数据</span></div>
  <div class="metric"><strong>3289 条</strong><span>固定测深样本</span></div>
  <div class="metric"><strong>约 0.15°</strong><span>稳斜段井斜平均偏差</span></div>
  <div class="metric"><strong>约 0.50°</strong><span>强造斜段井斜平均偏差</span></div>
</div>

## 方法模块

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
    <p>将简化钻进机理先验与数据驱动预测经门控融合，输出井斜、方位和轨迹趋势，平衡复杂工况下的表达能力与物理可解释性。</p>
  </div>
  <div class="focus-card">
    <h3>统一评测与随钻更新</h3>
    <p>对 34 类模型和 4 类评估协议进行统一比较，组织“历史井预训练 → 随钻更新”流程，并为困难工况保留加权与回退策略。</p>
  </div>
</div>

## 模型架构

<figure class="project-figure">
  <img src="{{ '/assets/img/rotary-steering/model-architecture.png' | relative_url }}" alt="旋转导向钻井趋势预测模型架构">
  <figcaption>时序主干、缺失掩码、目标工况和简化物理先验经门控融合，预测下一 10 m 井段的井斜、方位与轨迹趋势。</figcaption>
</figure>

## 单井示例结果

<figure class="project-figure">
  <img src="{{ '/assets/img/rotary-steering/example-result.png' | relative_url }}" alt="旋转导向钻井井斜与方位趋势预测示例">
  <figcaption>单井示例用于展示趋势跟踪和强造斜工况下的预测表现；项目总体阶段指标以上述 10 口井统一评测结果为准。</figcaption>
</figure>

该项目主要证明了我在工业时序问题中将数据治理、缺失建模、物理先验和统一评测组织为可复现研究流程的能力。
