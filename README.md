# The Minimal Academic theme

[![LICENSE](https://img.shields.io/github/license/yaoyao-liu/minimal-academic)](https://github.com/yaoyao-liu/minimal-academic/blob/master/LICENSE)
[![gem](https://img.shields.io/gem/v/jekyll-theme-minimal-academic)](https://rubygems.org/gems/jekyll-theme-minimal-academic)

*This is the source code of my homepage. I build this website based on [minimal](https://github.com/orderedlist/minimal).*
<br>
*Feel free to use the source code anywhere you like.*

![Thumbnail](https://raw.githubusercontent.com/yaoyao-liu/minimal-academic/master/thumbnail.png)

## Features

- Simple and elegant personal homepage theme
- Jekyll theme, deploy automatically by GitHub pages
- Support Markdown 
- Support dark mode

## Usage

To use this theme, add the following to your site's `_config.yml`:

```yaml
remote_theme: yaoyao-liu/minimal-academic
```

## Customizing

### Configuration variables

Minimal Academic theme will respect the following variables, if set in your site's `_config.yml`:

  ```yaml
  title: Yaoyao Liu
  affiliation: MPI for Informatics
  email: yaoyao.liu (at) mpi-inf.mpg.de
  google_scholar: https://scholar.google.com/citations?user=Uf9GqRsAAAAJ
  github_link: https://github.com/yaoyao-liu/
  linkedin: https://www.linkedin.com/in/liuyaoyao/
  avatar: /assets/img/avatar.png
  favicon: /assets/img/favicon.png
  favicon_dark: /assets/img/favicon-dark.png
  description: Yaoyao Liu is a Ph.D. student in computer science. His research lies in few-shot learning, meta learning, continual learning, and image generation.
  remote_theme: yaoyao-liu/minimal-academic
  ```
### Editing `index.md`

Edit `index.md` and add your personal information (e.g. publications, research).

### Stylesheet

If you'd like to add your own custom styles:

1. Create a file called `/assets/css/style.scss` in your site
2. Add the following content to the top of the file, exactly as shown:

    ```scss
    ---
    ---

    @import "{{ site.theme }}";
    ```
3. Add any custom CSS (or Sass, including imports) you'd like immediately after the `@import` line

### Layouts

If you'd like to change the theme's HTML layout:

1. [Copy the original template](https://github.com/yaoyao-liu/minimal-academic/blob/master/_layouts/default.html) from the theme's repository<br />(*Pro-tip: click "raw" to make copying easier*)
2. Create a file called `/_layouts/default.html` in your site
3. Paste the default layout content copied in the first step
4. Customize the layout as you'd like

## License

This work is licensed under a [Creative Commons Zero v1.0 Universal](https://github.com/yaoyao-liu/minimal-academic/blob/master/LICENSE) License.
