# Minimal Light 主题

[![LICENSE](https://img.shields.io/github/license/yaoyao-liu/minimal-academic?style=flat-square)](https://github.com/yaoyao-liu/minimal-light/blob/master/LICENSE)
[![gem](https://img.shields.io/gem/v/minimal-light?style=flat-square)](https://rubygems.org/gems/minimal-light)
[![Gem](https://img.shields.io/gem/dt/minimal-light?style=flat-square)](https://rubygems.org/gems/minimal-light)
[![Jekyll](https://img.shields.io/badge/jekyll-%3E%3D%203.5-orange.svg?style=flat-square)](https://jekyllrb.com/)
[![Build Status](https://img.shields.io/travis/com/yaoyao-liu/minimal-light?style=flat-square)](https://travis-ci.com/yaoyao-liu/minimal-light)

\[[在线演示](https://minimal-light.yyliu.net/)\] \[[English](https://github.com/yaoyao-liu/minimal-light/blob/master/README.md)\]
 
*这个项目包含我主页的源代码. 基于GitHub官方主题之一[minimal](https://github.com/orderedlist/minimal)创建*
<br>
*如果您喜欢这个项目，欢迎您使用和分享*

## 项目特点

- 简单优雅的学术个人主页模板
- 基于Jekyll, 可以在GitHub Pages服务下自动部署
- 基本的搜索引擎优化
- 移动端适配
- 支持Markdown
- 支持自动的暗黑模式

## 使用指南
### 在GitHub上使用

只要在你的项目中添加如下内容的`_config.yml`文件，GitHub Pages服务就会使用该主题部署网页:

```yaml
remote_theme: yaoyao-liu/minimal-light
```
请注意：添加上述内容到你的项目，会直接应用这个仓库的所有的默认设置。

如果你希望编辑任何文件（例如：`index.md`)，你仍需要把该文件拷贝到你的项目中。

你也可以直接fork这个仓库(或者[使用这个仓库作为模板](https://docs.github.com/cn/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template))，然后把名字改为`your-username.github.io`.

#### 在GitHub上使用自定义域名

在你的DNS设置中添加如下的`CNAME`解析记录：

```
Host: 根据需求自定义，例如： "www" 
Target / Canonical name: your-username.github.io.
TTL: 10 min
```
你也可以添加如下的`A`解析记录（如果无法使用`CNAME`记录的话）：
```
Host: 根据需求自定义，例如： "www" 或 "@"
IP: 185.199.108.153
    185.199.109.153
    185.199.110.153
    185.199.111.153
TTL: 10 min
```
然后，编辑这个仓库中 [CNAME](./CNAME) 文件的内容为你自定义的域名。

### 通过Jekyll在本地使用

*首先你需要安装[Ruby](https://www.ruby-lang.org/en/)和[Jekyll](https://jekyllrb.com/).*

克隆这个项目:

```bash
git clone https://github.com/yaoyao-liu/minimal-light.git
cd minimal-light
```
安装并运行:

```bash
bundle install
bundle exec jekyll server
```
在`localhost`预览网页:
<http://localhost:4000>. 
你可以在`_site`文件夹中找到html文件.

## 自定义内容

### 配置变量

Minimal Light 主题有以下的变量, 你可以在`_config.yml`文件中修改:

  ```yaml
title: 你的名字
affiliation: 你的单位
email: yourname (at) example.edu
google_scholar: https://scholar.google.com/
github_link: https://github.com/yaoyao-liu/minimal-light
linkedin: https://www.linkedin.com/
avatar: ./assets/img/avatar.png
google_analytics: UA-111540567-4
favicon: ./assets/img/favicon.png
favicon_dark: ./assets/img/favicon-dark.png
description: 在这里输入网页描述.
canonical: https://minimal-light.yyliu.net/
remote_theme: yaoyao-liu/minimal-light
  ```
### 编辑 `index.md`

创建`index.md`并添加你的个人信息(如：发表的论文，研究课题等).

### 网页样式（CSS)

如果你需要修改网页的风格（基于CSS）:

1. 在你的项目中创建`/assets/css/style.scss`文件
2. 在该文件的顶端加入如下内容:

    ```scss
    ---
    ---

    @import "{{ site.theme }}";
    ```
3. 在`@import`那一行添加自定义CSS(或Sass)格式

### 网页样式（基于html）

如果你需要修改网页的html样式:

1. 从本项目中[复制原始模板](https://github.com/yaoyao-liu/minimal-light/blob/master/_layouts/homepage.html)<br />(*小提示: 点击"raw"可以直接显示原始文件, 拷贝起来更方便*)
2. 在你的项目中创建`/_layouts/homepage.html`文件
3. 把第一步中复制的原始模板粘贴进去
4. 根据自己的需求修改html文件

## 许可证

这个项目使用[Creative Commons Zero v1.0 Universal](https://github.com/yaoyao-liu/minimal-light/blob/master/LICENSE)许可证.

## 致谢

我们的项目用到了以下项目的源代码:

* [pages-themes/minimal](https://github.com/pages-themes/minimal)

* [orderedlist/minimal](https://github.com/orderedlist/minimal)
