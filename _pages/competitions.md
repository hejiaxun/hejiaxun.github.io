---
layout: page
title: 竞赛
permalink: /competitions/
description: 机器人竞赛经历、个人技术职责、比赛成果与工程复盘。
kicker: Robotics Competitions
---

<div class="projects">
{% assign competitions = site.competitions | sort: "importance" %}
{% for project in competitions %}
  {% include projects_horizontal.html %}
{% endfor %}
</div>
