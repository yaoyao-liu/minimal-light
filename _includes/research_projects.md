<h2 id="research-projects" style="margin: 2px 0px -15px;">Research Projects</h2>

<div class="research-projects">
<ol class="bibliography">

{% for project in site.data.research_projects.main %}

<li>
<div class="project-row">
  <div class="col-sm-3 abbr" style="position: relative; padding-right: 15px; padding-left: 15px;">
    {% if project.image %} 
    <img src="{{ project.image }}" class="teaser img-fluid z-depth-1" style="width=100;height=auto">
    {% if project.short_name %} 
    <abbr class="badge">{{ project.short_name }}</abbr>
    {% endif %}
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative; padding-right: 15px; padding-left: 20px;">
      <div class="title"><a href="{{ project.link }}">{{ project.title }}</a></div>
      <div class="team">{{ project.team }}</div>
      <div class="institution"><em>{{ project.institution }}</em></div>
    <div class="links">
      {% if project.link %} 
      <a href="{{ project.link }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Details</a>
      {% endif %}
      {% if project.report %} 
      <a href="{{ project.report }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Report</a>
      {% endif %}
      {% if project.code %} 
      <a href="{{ project.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
      {% endif %}
      {% if project.notes %} 
      <strong><i style="color:#e74d3c">{{ project.notes }}</i></strong>
      {% endif %}
    </div>
  </div>
</div>
</li>
<br>

{% endfor %}

</ol>
</div>
