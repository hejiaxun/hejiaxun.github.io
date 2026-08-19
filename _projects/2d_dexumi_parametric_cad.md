---
layout: page
title: 参数化 CAD 与 Co-design 基础设施
description: 以 CAD 特征构建兼顾可解释性、制造语义和搜索规模的中尺度设计空间。
kicker: DexUMI Co-design · Module 04
category: internship-module
permalink: /projects/dexumi-codesign/parametric-cad/
---

{% include dexumi-module-nav.html %}

<p class="project-lead">这一模块回答“设计空间应该如何表示”。少量几何尺寸易解释但表达能力有限，直接优化 Mesh 顶点又维度过高且缺少制造语义；因此选择以<strong>装配关系与 CAD 特征</strong>为中间层，形成可重建、可验证、可导出到仿真的设计参数化方法。</p>

## 设计表示的选择

<div class="design-spectrum">
  <div><span>低维</span><strong>少量几何尺寸</strong><small>易解释，但难以覆盖复杂形态</small></div>
  <div class="design-spectrum-focus"><span>当前选择</span><strong>CAD 特征与装配参数</strong><small>保留设计语义，适合约束搜索和资产生成</small></div>
  <div><span>高维</span><strong>Mesh 顶点</strong><small>表达自由，但搜索空间大且难以制造</small></div>
</div>

## 基础设施骨架

<div class="module-route-grid">
  <div class="module-route-card"><span>01</span><strong>几何/拓扑观测</strong><p>从 STEP B-rep 与装配资产中提取候选设计信息。</p></div>
  <div class="module-route-card"><span>02</span><strong>受约束 CAD 重建</strong><p>以特征和装配约束恢复可编辑、可验证的设计资产。</p></div>
  <div class="module-route-card"><span>03</span><strong>跨平台验证</strong><p>通过 SolidWorks 与 Linux 几何/位姿对照检查资产一致性。</p></div>
  <div class="module-route-card"><span>04</span><strong>仿真资产生成</strong><p>生成 STEP、URDF/MJCF 等下游资产，连接批量穿戴与评价。</p></div>
</div>

## 后续将补充

<div class="content-slot-grid">
  <div class="content-slot"><strong>参数化示例</strong><span>同一 CAD 特征在设计空间中的变化</span></div>
  <div class="content-slot"><strong>验证可视化</strong><span>SolidWorks–Linux 几何与装配对照</span></div>
  <div class="content-slot"><strong>方案搜索</strong><span>候选生成、仿真评价与比较结果</span></div>
</div>

## 与 Co-design 回环的关系

该模块负责生成下一组候选人机接口设计，并将设计参数及仿真资产交给穿戴控制与人体评价模块。当前定位是设计空间与批量评价基础设施，不宣称已经完成成熟的自动化最优设计器。
