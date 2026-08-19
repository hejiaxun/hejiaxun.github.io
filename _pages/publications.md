---
layout: page
permalink: /research/
title: 学术研究
description: 正式发表论文与经过核验的研究成果。
kicker: Research & Publications
years: [2026]
---

<div class="publications">
{% for y in page.years %}
  <h2 class="year">{{ y }}</h2>
  {% bibliography -f papers -q @*[year={{ y }}]* %}
{% endfor %}
</div>
