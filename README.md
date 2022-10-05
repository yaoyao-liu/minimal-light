# The Minimal Light Theme

[![LICENSE](https://img.shields.io/github/license/yaoyao-liu/minimal-light?logo=creative-commons&color=EF9421)](https://github.com/yaoyao-liu/minimal-light/blob/main/LICENSE)
[![gem](https://img.shields.io/gem/v/minimal-light?logo=rubygems&color=E9573F)](https://rubygems.org/gems/minimal-light)
[![Jekyll](https://img.shields.io/badge/jekyll-%3E%3D%203.5-orange.svg?logo=jekyll)](https://jekyllrb.com/)
[![Build Status](https://github.com/yaoyao-liu/minimal-light/actions/workflows/ci.yaml/badge.svg)](https://github.com/yaoyao-liu/minimal-light/actions/workflows/ci.yaml)

\[[Demo the theme](https://minimal-light.yyliu.net/)\]  \[[简体中文](https://github.com/yaoyao-liu/minimal-light/blob/master/README_zh_Hans.md) | [繁體中文](https://github.com/yaoyao-liu/minimal-light/blob/master/README_zh_Hant.md) | [Deutsche](https://github.com/yaoyao-liu/minimal-light/blob/master/README_de.md)\]

**Update: the latest version of my homepage is available [here](https://github.com/yaoyao-liu/homepage).**
 
*This is the source code of my homepage. I build this website based on [minimal](https://github.com/orderedlist/minimal).*
<br>
*Feel free to use and share the source code anywhere you like.*

## Features

- Simple and elegant personal homepage theme
- Jekyll theme, deploy automatically by GitHub pages
- Basic Search Engine Optimization
- Mobile friendly
- Support Markdown 
- Support dark mode

## Usage

### Using on GitHub 

To use this theme, add the following to your repository's `_config.yml`:

```yaml
remote_theme: yaoyao-liu/minimal-light
```

Please note that adding the above line will directly apply all the default settings in this repository to yours.

If you hope to edit any files (e.g., `index.md`), you still need to copy them to your repository.

You may also fork this repository (or [use this repository as a template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)) and change the name to `your-username.github.io`.

Then you need to enable the GitHub pages for that repository following the steps [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site).

#### Using a custom domain on GitHub

Add a `CNAME` DNS record to your domain as follows:
```
Host: whatever you want. e.g., "www" 
Target / Canonical name: your-username.github.io.
TTL: 10 min
```
You may also add an `A` DNS record instead of the `CNAME` record as follows:
```
Host: whatever you want. e.g., "www" or "@"
IP: 185.199.108.153
    185.199.109.153
    185.199.110.153
    185.199.111.153
TTL: 10 min
```

Then, change the contents of the [CNAME](./CNAME) file in this repository to your domain.

### Using Locally with Jekyll

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
# Basic Information 
title: Your Name
position: Ph.D. Student
affiliation: Your Affiliation
email: yourname (at) example.edu

# Search Engine Optimization (SEO)
# The following information is used to improve the website traffic from search engines, e.g., Google.
keywords: minimal academic
description: The Minimal Light is a simple and elegant jekyll theme for academic personal homepage.
canonical: https://minimal-light.yyliu.net/

# Links 
# If you don't need one of them, you may delete the corresponding line.
google_scholar: https://scholar.google.com/
github_link: https://github.com/yaoyao-liu/minimal-light
linkedin: https://www.linkedin.com/

# Images (e.g., your profile picture and your website's favicon) 
# "favicon" and "favicon_dark" are used for the light and dark modes, respectively. 
avatar: ./assets/img/avatar.png
favicon: ./assets/img/favicon.png
favicon_dark: ./assets/img/favicon-dark.png

# Google Analytics ID
# Please remove this if you don't use Google Analytics
google_analytics: UA-111540567-4
  ```
### Editing `index.md`

Create `index.md` and add your personal information (e.g. publications, research).

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
