---
layout: page
title: Physics-Guided Tendon State Estimation
description: First-author IEEE RA-L paper on terminal-supervised tendon-state estimation and real-robot closed-loop validation.
img: assets/img/ral/problem.png
importance: 1
category: research
permalink: /projects/ral-tendon-estimation/
---

## Physics-Guided Learning for Tendon State Estimation of Cable-Driven Hyper-Redundant Robots

**Jiaxun He**, Jun-Guo Lu, Qing-Hao Zhang, Zhenpu Zhu, Zhanxuan Peng, and Guoying Gu

*IEEE Robotics and Automation Letters*, 2026 · [DOI: 10.1109/LRA.2026.3709642](https://doi.org/10.1109/LRA.2026.3709642)

### Problem

Joint-side tendon tensions are important state variables for controlling cable-driven hyper-redundant robots, but they are typically unavailable along the chain. Actuator-side tensions are measurable for all tendons, while joint-side measurements are available only at the terminal joint. Analytical transmission models accumulate friction errors, whereas unconstrained data-driven models are poorly identified under this limited supervision.

{% include figure.html path="assets/img/ral/problem.png" title="Problem setting" class="img-fluid rounded z-depth-1" %}
<div class="caption">A 12-module, 24-DoF cable-driven hyper-redundant robot with actuator-side sensing and terminal-only joint-side supervision.</div>

### Method

I proposed the **Physics-Guided Cable-Hole Transmission Cascade (PG-CHTC)**. A positive element-wise tension-ratio predictor is shared across cable guides, regularized by an Euler–Eytelwein/Capstan prior, and corrected by a strictly causal temporal residual. Training uses terminal joint-side tension supervision; deployment relies only on actuator-side sensing.

{% include figure.html path="assets/img/ral/method.png" title="PG-CHTC architecture" class="img-fluid rounded z-depth-1" %}
<div class="caption">Shared cascade units combine a static transmission model, a physical prior, and a causal temporal correction.</div>

### Real-robot deployment

The estimator was deployed as an independent CPU inference service and connected to the existing Qt controller through UDP. Its estimates were used by a 10 Hz tension–configuration hybrid-control loop without changing the controller's main logic.

{% include figure.html path="assets/img/ral/deployment.png" title="Closed-loop deployment" class="img-fluid rounded z-depth-1" %}

### Results

<div class="row text-center mt-3 mb-3">
  <div class="col-sm-3"><strong>70.2%</strong><br><small>tension RMSE reduction</small></div>
  <div class="col-sm-3"><strong>11.2 N</strong><br><small>final overall RMSE</small></div>
  <div class="col-sm-3"><strong>23.5 ms</strong><br><small>CPU inference</small></div>
  <div class="col-sm-3"><strong>44.4–50.8%</strong><br><small>settling-time reduction</small></div>
</div>

- Evaluated on four experimental protocols and approximately 68,000 real-robot frames.
- Reduced overall tension RMSE from 37.6 N to 11.2 N relative to the tuned physical baseline.
- Achieved an overall \(R^2\) of 0.868 and CPU inference latency of 23.5 ms.
- Reduced joint-angle tracking settling time by 44.4%–50.8% after closed-loop deployment.

### My contribution

I was the first author. I formulated the terminal-supervision problem, developed the PG-CHTC architecture and physics-guided objectives, built the data and evaluation pipeline, completed CPU inference integration, and conducted the closed-loop validation. The pre-existing hybrid controller itself is not claimed as my independent contribution.
