---
layout: page
title: 项目
permalink: /projects/
description: 机器人研究、具身智能与真实机器人系统项目。
kicker: Selected Projects
display_categories: [research, embodied-ai, robot-systems]
---

<div class="projects">
{% for category in page.display_categories %}
  {% if category == "research" %}
    {% assign category_title = "机器人研究" %}
  {% elsif category == "embodied-ai" %}
    {% assign category_title = "具身智能" %}
  {% else %}
    {% assign category_title = "机器人系统" %}
  {% endif %}
  <h2 class="category">{{ category_title }}</h2>
  {% assign categorized_projects = site.projects | where: "category", category | sort: "importance" %}
  {% for project in categorized_projects %}
    {% include projects_horizontal.html %}
  {% endfor %}
{% endfor %}
</div>
