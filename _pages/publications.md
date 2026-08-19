---
layout: page
permalink: /research/
title: research
description: Peer-reviewed publications and selected research outcomes.
years: [2026]
nav: true
nav_order: 1
---

<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
