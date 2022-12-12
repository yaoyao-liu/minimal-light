### 這份說明文檔僅將文字從簡體中文轉化為繁體中文，並沒有針對繁體中文地區的名詞和使用習慣進行優化。如果有錯誤或者表述不清楚的內容，可以參照[英文版本](https://github.com/yaoyao-liu/minimal-light/blob/main/README.md)。歡迎通過 [pull requests](https://github.com/yaoyao-liu/minimal-light/pulls) 更正該文檔。

# Minimal Light 主題

[![LICENSE](https://img.shields.io/github/license/yaoyao-liu/minimal-light?style=flat-square&logo=creative-commons&color=EF9421)](https://github.com/yaoyao-liu/minimal-light/blob/main/LICENSE)

\[[在線演示](https://minimal-light-theme.yliu.me/)\] \[[简体中文](https://github.com/yaoyao-liu/minimal-light/blob/master/README_zh_Hans.md) | [English](https://github.com/yaoyao-liu/minimal-light/blob/master/README.md) | [Deutsche](https://github.com/yaoyao-liu/minimal-light/blob/master/README_de.md)\]
 
*這個項目包含我主頁的源代碼. 基於 GitHub 官方主題之一 [minimal](https://github.com/orderedlist/minimal) 創建*
<br>
*如果您喜歡這個項目，歡迎您使用和分享*

## 項目特點

- 簡單優雅的學術個人主頁模板
- 基於 Jekyll, 可以在 GitHub Pages 服務下自動部署
- 基本的搜索引擎優化
- 移動端適配
- 支持 Markdown
- 支持自動的暗黑模式

## 使用指南
### 在GitHub上使用

只要在你的項目中添加如下內容的`_config.yml`文件，GitHub Pages 服務就會使用該主題部署網頁:

```yaml
remote_theme: yaoyao-liu/minimal-light
```
請注意：添加上述內容到你的項目，會直接應用這個倉庫的所有的默認設置。

如果你希望編輯任何文件（例如：`index.md`)，你仍需要把該文件拷貝到你的項目中。

你也可以直接 fork 這個倉庫(或者[使用這個倉庫作為模板](https://docs.github.com/cn/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template))，然後把名字改為`your-username.github.io`.

然後，你可以根據[這裡的說明](https://docs.github.com/cn/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site)開啟這個倉庫的GitHub Pages服務。

### 通過Jekyll在本地使用

*首先你需要安裝 [Ruby](https://www.ruby-lang.org/en/) 和 [Jekyll](https://jekyllrb.com/).*

克隆這個項目:

```bash
git clone https://github.com/yaoyao-liu/minimal-light.git
cd minimal-light
```
安裝並運行:

```bash
bundle install
bundle exec jekyll server
```
在`localhost`預覽網頁:
<http://localhost:4000>. 
你可以在`_site`文件夾中找到 html 文件.

## 自定義內容

### 配置變量

Minimal Light 主題有以下的變量, 你可以在`_config.yml`文件中修改:

  ```yaml
# 基本信息
title: 你的名字
position: Ph.D. Student
affiliation: 你的單位
email: yourname (at) example.edu

# 搜索引擎優化 (SEO)
keywords: minimal light
description: 在這裡輸入網頁描述.
canonical: https://minimal-light-theme.yliu.me/

# 鏈接
google_scholar: https://scholar.google.com/
cv_link: files/Curriculum_Vitae.pdf
github_link: https://github.com/
linkedin: https://www.linkedin.com/
twitter: https://twitter.com/

# 圖片路徑
avatar: ./assets/img/avatar.png
favicon: ./assets/img/favicon.png
favicon_dark: ./assets/img/favicon-dark.png

# Google Analytics ID
google_analytics: UA-111540567-4
  ```
### 編輯 `index.md`

創建`index.md`並添加你的個人信息(如：發表的論文，研究課題等).

### 網頁樣式（CSS)

如果你需要修改網頁的風格（基於 CSS）:

1. 在你的項目中創建`/assets/css/style.scss`文件
2. 在該文件的頂端加入如下內容:

    ```scss
    ---
    ---

    @import "{{ site.theme }}";
    ```
3. 在`@import`那一行添加自定義 CSS (或 Sass)格式

### 網頁樣式（基于 html）

如果你需要修改網頁的 html 樣式:

1. 從本項目中[複製原始模板](https://github.com/yaoyao-liu/minimal-light/blob/master/_layouts/homepage.html)<br />(*小提示: 點擊"raw "可以直接顯示原始文件, 拷貝起來更方便*)
2. 在你的項目中創建`/_layouts/homepage.html`文件
3. 把第一步中復制的原始模板粘貼進去
4. 根據自己的需求修改 html 文件

## 許可證

這個項目使用 [Creative Commons Zero v1.0 Universal](https://github.com/yaoyao-liu/minimal-light/blob/master/LICENSE) 許可證.

## 致謝

我們的項目用到了以下項目的源代碼:

* [pages-themes/minimal](https://github.com/pages-themes/minimal)

* [orderedlist/minimal](https://github.com/orderedlist/minimal)

* [al-folio](https://github.com/alshedivat/al-folio)
