# The Minimal Light Theme

[![LICENSE](https://img.shields.io/github/license/yaoyao-liu/minimal-academic)](https://github.com/yaoyao-liu/minimal-light/blob/master/LICENSE)
[![gem](https://img.shields.io/gem/v/minimal-light)](https://rubygems.org/gems/minimal-light)
[![Gem](https://img.shields.io/gem/dt/minimal-light)](https://rubygems.org/gems/minimal-light)
[![Jekyll](https://img.shields.io/badge/jekyll-%3E%3D%203.5-orange.svg)](https://jekyllrb.com/)
[![Build Status](https://travis-ci.com/yaoyao-liu/minimal-light.svg?branch=master)](https://travis-ci.com/yaoyao-liu/minimal-light)

\[[Demo the theme](https://minimal-light.yyliu.net/)\]  \[[🇨🇳 简体中文](https://github.com/yaoyao-liu/minimal-light/blob/master/README_CN.md)\]
 
*This is the source code of my homepage. I build this website based on [minimal](https://github.com/orderedlist/minimal).*
<br>
*Feel free to use or share the source code anywhere you like.*

## Features

- Simple and elegant personal homepage theme
- Jekyll theme, deploy automatically by GitHub pages
- Mobile friendly
- Support Markdown 
- Support dark mode

## Usage

### Using on GitHub 

To use this theme, add the following to your site's `_config.yml`:

```yaml
remote_theme: yaoyao-liu/minimal-light
```

### Using with Jekyll

*You need to install [Ruby](https://www.ruby-lang.org/en/) and [Jekyll](https://jekyllrb.com/) fisrt.*

Clone this repository:

```bash
git clone https://github.com/yaoyao-liu/minimal-light.git
cd minimal-light
```
Install and run:

```bash
bundle install
bundle exec jekyll server
```
View the live page using `localhost`:
<http://localhost:4000>. You can get the html files in `_site` folder.

## Customizing

### Configuration variables

The Minimal Light theme will respect the following variables, if set in your site's `_config.yml`:

  ```yaml
title: Your Name
affiliation: Your Affiliation
email: yourname (at) example.edu
google_scholar: https://scholar.google.com/
github_link: https://github.com/yaoyao-liu/minimal-light
linkedin: https://www.linkedin.com/
avatar: ./assets/img/avatar.png
google_analytics: UA-111540567-4
favicon: ./assets/img/favicon.png
favicon_dark: ./assets/img/favicon-dark.png
description: The Minimal Light is a simple and elegant jekyll theme for academic personal homepage.
canonical: https://minimal-light.yyliu.net/
remote_theme: yaoyao-liu/minimal-light
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

1. [Copy the original template](https://github.com/yaoyao-liu/minimal-light/blob/master/_layouts/homepage.html) from the theme's repository<br />(*Pro-tip: click "raw" to make copying easier*)
2. Create a file called `/_layouts/homepage.html` in your site
3. Paste the default layout content copied in the first step
4. Customize the layout as you'd like

## License

This work is licensed under a [Creative Commons Zero v1.0 Universal](https://github.com/yaoyao-liu/minimal-light/blob/master/LICENSE) License.

## Acknowledgements

Our project uses the source code from the following repositories:

* [pages-themes/minimal](https://github.com/pages-themes/minimal)

* [orderedlist/minimal](https://github.com/orderedlist/minimal)
