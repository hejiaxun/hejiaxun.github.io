---
layout: page
title: projects
permalink: /projects/
description: Selected research, embodied-intelligence, and robot-system projects.
nav: true
nav_order: 2
display_categories: [research, embodied-ai, robot-systems]
horizontal: true
---

<div class="projects">
{%- if site.enable_project_categories and page.display_categories %}
  {%- for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    {% if category == "research" %}
      {% assign category_title = "Research" %}
    {% elsif category == "embodied-ai" %}
      {% assign category_title = "Embodied AI" %}
    {% elsif category == "robot-systems" %}
      {% assign category_title = "Robot Systems" %}
    {% else %}
      {% assign category_title = category | replace: '-', ' ' | capitalize %}
    {% endif %}
    <h2 class="category">{{ category_title }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category | sort: "importance" %}
  {% for project in categorized_projects %}
    {% include projects_horizontal.html %}
  {%- endfor %}
  {% endfor %}
{%- else %}
  {% assign sorted_projects = site.projects | sort: "importance" %}
  {% for project in sorted_projects %}
    {% include projects_horizontal.html %}
  {%- endfor %}
{%- endif %}
</div>
