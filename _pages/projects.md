---
layout: page
title: 项目
permalink: /projects/
description: 学术研究、具身智能实习与工业项目。
kicker: Selected Projects
display_categories: [research, internship, industrial-project]
---

<div class="projects">
{% for category in page.display_categories %}
  {% if category == "research" %}
    {% assign category_title = "学术研究" %}
  {% elsif category == "internship" %}
    {% assign category_title = "实习" %}
  {% elsif category == "industrial-project" %}
    {% assign category_title = "工业项目" %}
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
