# Minimal Light 主題

[![LICENSE](https://img.shields.io/github/license/yaoyao-liu/minimal-light?style=flat-square&logo=creative-commons&color=EF9421)](LICENSE)

\[[線上展示](https://minimal-light-theme.yliu.me/)\]  \[[English](README.md) | [简体中文](README_zh_Hans.md) | [Deutsch](README_de.md)\]

*這是我個人首頁的原始碼，基於 [minimal](https://github.com/orderedlist/minimal) 主題建構。*
<br>
*歡迎隨意使用和分享這些原始碼。*

**我個人首頁的最新版本在這裡：<br><https://github.com/yaoyao-liu/yaoyaoliu-homepage>**

*這份文件譯自[英文版本](README.md)。如有錯誤或表述不清楚的地方，請以英文版本為準，也歡迎透過 [pull request](https://github.com/yaoyao-liu/minimal-light/pulls) 更正。*

## 專案特點

- 簡潔優雅的個人首頁主題
- 基於 Jekyll，可由 GitHub Pages 自動部署
- 基本的搜尋引擎最佳化
- 支援行動裝置
- 支援 Markdown
- 支援深色模式

## 專案結構

```
.
├── _data
|   └── publications.yml                      # 論文列表的 YAML 資料檔
├── _includes
|   ├── publications.md                       # 論文列表的 Markdown 檔案
|   └── service.md                            # 學術服務的 Markdown 檔案
├── _layouts
|   └── homepage.html                         # 首頁的 HTML 範本
├── _sass
|   ├── minimal-light.scss                    # 該檔案會被編譯為 CSS 檔案，用於控制頁面樣式
|   ├── minimal-light-no-dark-mode.scss       # 與 minimal-light.scss 類似，但停用了深色模式
|   ├── minimal-light-publications.scss       # 論文列表的樣式
|   └── minimal-light-variables.scss          # 各樣式表共用的顏色變數和深色模式開關
├── assets                                    # 靜態檔案（CSS、JavaScript、圖片和 PDF）
├── html_source_file                          # 編譯好的 HTML 檔案
├── .gitignore                                # 指定 Git 應忽略的未追蹤檔案
├── CNAME                                     # 自訂網域，供 GitHub Pages 服務使用
├── Gemfile                                   # 列出所需 Ruby gem 的檔案
├── LICENSE                                   # 授權條款檔案
├── README.md                                 # 說明文件（英文）
├── README_de.md                              # 說明文件（德文）
├── README_zh_Hans.md                         # 說明文件（簡體中文）
├── README_zh_Hant.md                         # 說明文件（繁體中文）
├── _config.yml                               # Jekyll 設定檔，包含頁面的一些選項
└── index.md                                  # 首頁內容，使用 Markdown 撰寫
```

## 使用指南

這個範本有以下兩種使用方式：
- **透過 GitHub Pages 服務使用。** GitHub 會為你提供伺服器來產生並託管網頁。
- **透過 Jekyll 在本機使用。** 你可以在自己的電腦上安裝 Jekyll，用這個範本產生靜態網頁（即 HTML 檔案），然後把 HTML 檔案上傳到你的伺服器。

詳細說明如下。

### 透過 GitHub Pages 服務使用

在 GitHub 上使用這個範本有兩種方法：

#### Fork 這個儲存庫

- Fork 這個儲存庫（或者[把這個儲存庫用作範本](https://docs.github.com/zh/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)），並把名稱改為 `your-username.github.io`。

- 按照[這裡的步驟](https://docs.github.com/zh/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site)為該儲存庫啟用 GitHub Pages。

#### 把這個儲存庫用作遠端主題

要使用這個主題，請在你的儲存庫的 `_config.yml` 中加入以下內容：

```yaml
remote_theme: yaoyao-liu/minimal-light
```

請注意，加入上面這一行會把這個儲存庫的所有預設設定直接套用到你的儲存庫。

如果你想編輯某些檔案（例如 `index.md`），仍然需要把它們複製到你的儲存庫中。

### 透過 Jekyll 在本機使用

首先，安裝 [Ruby](https://www.ruby-lang.org/zh_tw/) 和 [Jekyll](https://jekyllrb.com/)。安裝說明請見：<https://jekyllrb.com/docs/installation/#guides>

然後，複製（clone）這個儲存庫：

```bash
git clone https://github.com/yaoyao-liu/minimal-light.git
cd minimal-light
```

安裝相依套件並啟動伺服器：

```bash
bundle install
bundle exec jekyll server
```

在 <http://localhost:4000> 預覽網頁。產生的 HTML 檔案位於 `_site` 資料夾中。

### 使用 HTML 版本

編譯好的 HTML 檔案位於 `html_source_file` 資料夾中。如果你不想使用 Jekyll，可以直接編輯並使用 HTML 版本。

## 自訂

### 設定變數

Minimal Light 主題支援以下變數，可以在你的網站的 `_config.yml` 中設定：

```yaml
# 基本資訊
title: 你的名字
position: Ph.D. Student
affiliation: 你的單位
affiliation_link: https://www.example.edu/
email: yourname (at) example.edu

# 搜尋引擎最佳化（SEO）
# 以下資訊用於提升來自搜尋引擎（例如 Google）的流量。
keywords: minimal light
description: The Minimal Light is a simple and elegant Jekyll theme for an academic personal homepage.
canonical: https://minimal-light-theme.yliu.me/

# 連結
# 如果不需要其中某一項，可以刪除對應的那一行。
google_scholar: https://scholar.google.com/
cv_link: assets/files/curriculum_vitae.pdf
github_link: https://github.com/
linkedin: https://www.linkedin.com/
twitter: https://twitter.com/

# 圖片（例如你的大頭貼和網站圖示）
# "favicon" 和 "favicon_dark" 分別用於淺色模式和深色模式。
avatar: ./assets/img/avatar.png
favicon: ./assets/img/favicon.png
favicon_dark: ./assets/img/favicon-dark.png

# 頁尾說明
# 可以用這個選項關閉頁尾的 "Powered by Jekyll and Minimal Light theme." 字樣。
enable_footnote: true

# 自動深色模式
# 可以用這個選項關閉自動深色主題。
auto_dark_mode: true

# 字型
# 可以用這個選項在襯線（Serif）和無襯線（Sans Serif）字型之間選擇。
font: "Serif" # 或 "Sans Serif"

# Google Analytics ID
# 取消下一行的註解並填入你的 Google Analytics 4 評估 ID（G-XXXXXXXXXX）即可啟用。
# google_analytics: G-XXXXXXXXXX
```

### 編輯 `index.md`

建立 `index.md` 並加入你的個人資訊。該檔案支援 **Markdown** 和 **HTML** 語法。

### 編輯被引入的檔案

`index.md` 中引入了兩個 Markdown 檔案：`_includes/publications.md` 和 `_includes/service.md`。這兩個檔案同樣支援 **Markdown** 和 **HTML** 語法。如果不想引入這兩個檔案，可以刪除 `index.md` 中的以下幾行：
https://github.com/yaoyao-liu/minimal-light/blob/b38070cd0b6bce45d8a885f3828549af8f82b7cb/index.md?plain=1#L21-L23

如果想在不改變格式的前提下編輯論文列表，可以編輯 `_data/publications.yml`：
https://github.com/yaoyao-liu/minimal-light/blob/77b1b3b31d4561091bcd739f37a2e1880e8b5ca5/_data/publications.yml#L3-L11

### 樣式表

如果想加入自訂樣式，可以編輯 `_sass/minimal-light.scss`。

### 頁面版面

如果想修改主題的 HTML 版面，可以編輯 `_layouts/homepage.html`。

## 授權條款

本專案採用 [Creative Commons Zero v1.0 Universal](LICENSE) 授權條款。

## 致謝

本專案使用了以下儲存庫的原始碼：

* [pages-themes/minimal](https://github.com/pages-themes/minimal)

* [orderedlist/minimal](https://github.com/orderedlist/minimal)

* [al-folio](https://github.com/alshedivat/al-folio)
