# Minimal Light 主题

[![LICENSE](https://img.shields.io/github/license/yaoyao-liu/minimal-light?style=flat-square&logo=creative-commons&color=EF9421)](LICENSE)

\[[在线演示](https://minimal-light-theme.yliu.me/)\]  \[[English](README.md) | [繁體中文](README_zh_Hant.md) | [Deutsch](README_de.md)\]

*这是我个人主页的源代码，基于 [minimal](https://github.com/orderedlist/minimal) 主题构建。*
<br>
*欢迎随意使用和分享这些源代码。*

**我个人主页的最新版本在这里：<br><https://github.com/yaoyao-liu/yaoyaoliu-homepage>**

## 项目特点

- 简洁优雅的个人主页主题
- 基于 Jekyll，可由 GitHub Pages 自动部署
- 基本的搜索引擎优化
- 适配移动端
- 支持 Markdown
- 支持深色模式

## 项目结构

```
.
├── _data
|   └── publications.yml                      # 论文列表的 YAML 数据文件
├── _includes
|   ├── publications.md                       # 论文列表的 Markdown 文件
|   └── service.md                            # 学术服务的 Markdown 文件
├── _layouts
|   └── homepage.html                         # 主页的 HTML 模板
├── _sass
|   ├── minimal-light.scss                    # 该文件会被编译为 CSS 文件，用于控制页面样式
|   ├── minimal-light-no-dark-mode.scss       # 与 minimal-light.scss 类似，但禁用了深色模式
|   ├── minimal-light-publications.scss       # 论文列表的样式
|   └── minimal-light-variables.scss          # 各样式表共用的颜色变量和深色模式开关
├── assets                                    # 静态文件（CSS、JavaScript、图片和 PDF）
├── html_source_file                          # 编译好的 HTML 文件
├── .gitignore                                # 指定 Git 应忽略的未跟踪文件
├── CNAME                                     # 自定义域名，供 GitHub Pages 服务使用
├── Gemfile                                   # 列出所需 Ruby gem 的文件
├── LICENSE                                   # 许可证文件
├── README.md                                 # 说明文档（英文）
├── README_de.md                              # 说明文档（德文）
├── README_zh_Hans.md                         # 说明文档（简体中文）
├── README_zh_Hant.md                         # 说明文档（繁体中文）
├── _config.yml                               # Jekyll 配置文件，包含页面的一些选项
└── index.md                                  # 首页内容，使用 Markdown 编写
```

## 使用指南

这个模板有以下两种使用方式：
- **通过 GitHub Pages 服务使用。** GitHub 会为你提供服务器来生成并托管网页。
- **通过 Jekyll 在本地使用。** 你可以在自己的电脑上安装 Jekyll，用这个模板生成静态网页（即 HTML 文件），然后把 HTML 文件上传到你的服务器。

详细说明如下。

### 通过 GitHub Pages 服务使用

在 GitHub 上使用这个模板有两种方法：

#### Fork 这个仓库

- Fork 这个仓库（或者[把这个仓库用作模板](https://docs.github.com/zh/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)），并把名字改为 `your-username.github.io`。

- 按照[这里的步骤](https://docs.github.com/zh/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site)为该仓库开启 GitHub Pages。

#### 把这个仓库用作远程主题

要使用这个主题，请在你的仓库的 `_config.yml` 中加入以下内容：

```yaml
remote_theme: yaoyao-liu/minimal-light
```

请注意，加入上面这一行会把这个仓库的所有默认设置直接应用到你的仓库。

如果你想编辑某些文件（例如 `index.md`），仍然需要把它们复制到你的仓库中。

### 通过 Jekyll 在本地使用

首先，安装 [Ruby](https://www.ruby-lang.org/zh_cn/) 和 [Jekyll](https://jekyllrb.com/)。安装说明见：<https://jekyllrb.com/docs/installation/#guides>

然后，克隆这个仓库：

```bash
git clone https://github.com/yaoyao-liu/minimal-light.git
cd minimal-light
```

安装依赖并启动服务：

```bash
bundle install
bundle exec jekyll server
```

在 <http://localhost:4000> 预览网页。生成的 HTML 文件位于 `_site` 文件夹中。

### 使用 HTML 版本

编译好的 HTML 文件位于 `html_source_file` 文件夹中。如果你不想使用 Jekyll，可以直接编辑并使用 HTML 版本。

## 自定义

### 配置变量

Minimal Light 主题支持以下变量，可以在你的站点的 `_config.yml` 中设置：

```yaml
# 基本信息
title: 你的名字
position: Ph.D. Student
affiliation: 你的单位
affiliation_link: https://www.example.edu/
email: yourname (at) example.edu

# 搜索引擎优化（SEO）
# 以下信息用于提升来自搜索引擎（例如 Google）的访问量。
keywords: minimal light
description: The Minimal Light is a simple and elegant Jekyll theme for an academic personal homepage.
canonical: https://minimal-light-theme.yliu.me/

# 链接
# 如果不需要其中某一项，可以删除对应的行。
google_scholar: https://scholar.google.com/
cv_link: assets/files/curriculum_vitae.pdf
github_link: https://github.com/
linkedin: https://www.linkedin.com/
twitter: https://twitter.com/

# 图片（例如你的头像和网站图标）
# "favicon" 和 "favicon_dark" 分别用于浅色模式和深色模式。
avatar: ./assets/img/avatar.png
favicon: ./assets/img/favicon.png
favicon_dark: ./assets/img/favicon-dark.png

# 页脚说明
# 可以用这个选项关闭页脚的 "Powered by Jekyll and Minimal Light theme." 字样。
enable_footnote: true

# 自动深色模式
# 可以用这个选项关闭自动深色主题。
auto_dark_mode: true

# 字体
# 可以用这个选项在衬线（Serif）和无衬线（Sans Serif）字体之间选择。
font: "Serif" # 或 "Sans Serif"

# Google Analytics ID
# 取消下一行的注释并填入你的 Google Analytics 4 衡量 ID（G-XXXXXXXXXX）即可启用。
# google_analytics: G-XXXXXXXXXX
```

### 编辑 `index.md`

创建 `index.md` 并添加你的个人信息。该文件支持 **Markdown** 和 **HTML** 语法。

### 编辑被引入的文件

`index.md` 中引入了两个 Markdown 文件：`_includes/publications.md` 和 `_includes/service.md`。这两个文件同样支持 **Markdown** 和 **HTML** 语法。如果不想引入这两个文件，可以删除 `index.md` 中的以下几行：
https://github.com/yaoyao-liu/minimal-light/blob/b38070cd0b6bce45d8a885f3828549af8f82b7cb/index.md?plain=1#L21-L23

如果想在不改变格式的前提下编辑论文列表，可以编辑 `_data/publications.yml`：
https://github.com/yaoyao-liu/minimal-light/blob/77b1b3b31d4561091bcd739f37a2e1880e8b5ca5/_data/publications.yml#L3-L11

### 样式表

如果想添加自定义样式，可以编辑 `_sass/minimal-light.scss`。

### 页面布局

如果想修改主题的 HTML 布局，可以编辑 `_layouts/homepage.html`。

## 许可证

本项目采用 [Creative Commons Zero v1.0 Universal](LICENSE) 许可证。

## 致谢

本项目使用了以下仓库的源代码：

* [pages-themes/minimal](https://github.com/pages-themes/minimal)

* [orderedlist/minimal](https://github.com/orderedlist/minimal)

* [al-folio](https://github.com/alshedivat/al-folio)
