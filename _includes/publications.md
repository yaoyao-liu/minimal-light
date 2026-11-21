<h2 id="publications" class="publications-heading">Publications</h2>

<div class="publications">
<ol class="bibliography">

{% for link in site.data.publications.main %}

<li>
<div class="pub-row">
  <div class="col-sm-3 abbr{% unless link.image %} no-teaser{% endunless %}">
    {% if link.image %}
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" alt="{{ link.title | strip_html | escape }}" loading="lazy">
    {% endif %}
    {% if link.conference_short %}
    <abbr class="badge{% unless link.image %} badge-static{% endunless %}">{{ link.conference_short }}</abbr>
    {% endif %}
  </div>
  <div class="col-sm-9">
    <div class="title">{% if link.pdf %}<a href="{{ link.pdf }}">{{ link.title }}</a>{% else %}{{ link.title }}{% endif %}</div>
    <div class="author">{{ link.authors }}</div>
    <div class="periodical"><em>{{ link.conference }}</em></div>
    <div class="links">
      {% if link.pdf %}
      <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener">PDF</a>
      {% endif %}
      {% if link.code %}
      <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener">Code</a>
      {% endif %}
      {% if link.page %}
      <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener">Project Page</a>
      {% endif %}
      {% if link.bibtex %}
      <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener">BibTex</a>
      {% endif %}
      {% if link.notes %}
      <strong><i class="notes">{{ link.notes }}</i></strong>
      {% endif %}
      {% if link.others %}
      {{ link.others }}
      {% endif %}
    </div>
  </div>
</div>
</li>
<br>

{% endfor %}

</ol>
</div>
