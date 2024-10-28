<h2 id="publications" style="margin: 2px 0px -15px;">Publications</h2>

<div class="publications">
<ol class="bibliography">

{% for link in site.data.publications.main %}

<li>
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative ;padding-right: 15px;padding-left: 15px;">
    {% if link.image %} 
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width=100;height=auto">
    {% if link.conference_short %} 
    <abbr class="badge">{{ link.conference_short }}</abbr>
    {% endif %}
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative ;padding-right: 15px;padding-left: 20px;">
      <div class="title"><a href="{{ link.pdf }}">{{ link.title }}</a></div>
      <div class="author">{{ link.authors }}</div>
      <div class="periodical"><em>{{ link.conference }}</em>
      </div>
    <div class="links">
      {% if link.pdf %} 
      <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">PDF</a>
      {% endif %}
      {% if link.code %} 
      <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
      {% endif %}
      {% if link.page %} 
      <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Project Page</a>
      {% endif %}
      {% if link.bibtex %} 
      <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">BibTex</a>
      {% endif %}
      {% if link.notes %} 
      <strong> <i style="color:#e74d3c">{{ link.notes }}</i></strong>
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
<!-- <a id="show-more-btn" class="btn btn-sm z-depth-0" role="button" style="position: relative; font-family: Georgia; font-size: 12px; margin-top: 15px;" onclick="togglePublications()">Show more</a>   -->
</ol>
</div>

<script>
  function togglePublications() {
    // Select all hidden items
    const hiddenItems = document.querySelectorAll('.pub-item.hidden');
    const visibleItems = document.querySelectorAll('.pub-item:not(.hidden)');
    const showMoreBtn = document.getElementById('show-more-btn');

    if (hiddenItems.length > 0) {
      // Show all hidden items if there are any
      hiddenItems.forEach(item => item.classList.remove('hidden'));
      showMoreBtn.textContent = 'Show less';
    } else {
      // Hide all items after the third when "Show less" is clicked
      visibleItems.forEach((item, index) => {
        if (index >= 3) {
          item.classList.add('hidden');
        }
      });
      showMoreBtn.textContent = 'Show more';

      // Scroll back to the top of the publications section for better user experience.
      window.scrollTo({
        top: document.getElementById('publications').offsetTop,
        behavior: 'smooth'
      });
    }
  }
</script>

<style>
  .hidden {
    display: none;
  }

  .btn.z-depth-0 {
    background-color: #ffffff; /* Adjust this to match your button color */
    color: #000000;
    border: #000000;
    padding: 5px 5px;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
  }

  .btn.z-depth-0:hover {
    background-color: #D3D3D3; /* Slightly darker shade for hover */
  }
</style>
