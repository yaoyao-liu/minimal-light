<h2 id="publications" style="margin: 2px 0px -15px;">Publications</h2>

<div class="publications">
<ol class="bibliography">

{% for link in site.data.publications.main %}

<li>
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    <!-- You can replace 'image-link.jpg' with the actual image link if available -->
    <img src="image-link.jpg" class="teaser img-fluid z-depth-1" style="width=100;height=40%">
    <!-- Conference abbreviation if applicable -->
    <abbr class="badge">NeurIPS</abbr>
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <!-- Link to the PDF of the paper -->
      <div class="title"><a href="https://proceedings.neurips.cc/paper_files/paper/2023/hash/f64e55d03e2fe61aa4114e49cb654acb-Abstract-Datasets_and_Benchmarks.html">Benchmarking Foundation Models with Language-Model-as-an-Examiner</a></div>
      <!-- List of authors -->
      <div class="author">Yushi Bai*, <strong>Jiahao Ying*</strong>, Yixin Cao, Xin Lv, Yuze He, Xiaozhi Wang, Jifan Yu, Kaisheng Zeng, Yijia Xiao, Haozhe Lyu, Jiayin Zhang, Juanzi Li, Lei Hou</div>
      <!-- Conference full name -->
      <div class="periodical"><em>Conference on Neural Information Processing Systems (NeurIPS)</em></div>
    <div class="links">
      <!-- PDF link -->
      <a href="https://proceedings.neurips.cc/paper_files/paper/2023/hash/f64e55d03e2fe61aa4114e49cb654acb-Abstract-Datasets_and_Benchmarks.html" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">PDF</a>
      <!-- Links for code, project page, BibTex if available -->
      <a href="link-to-code" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
      <a href="link-to-project-page" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Project Page</a>
      <a href="link-to-bibtex" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">BibTex</a>
      <!-- Optional notes or other links -->
      <strong> <i style="color:#e74d3c">Optional Note Here</i></strong>
    </div>
  </div>
</div>
</li>
<br>

{% endfor %}

</ol>
</div>
