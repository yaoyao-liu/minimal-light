### Diese Datei wird automatisch von [Google Translate](https://translate.google.com/) übersetzt. Wenn es Fehler gibt, lesen Sie bitte [die englische Version](https://github.com/yaoyao-liu/minimal-light/blob/master/README.md) und erstellen Sie eine [Pull-Anfrage](https://github.com/yaoyao-liu/minimal-light/pulls), um diese zu beheben. Vielen Dank.
# Das Minimal Light Thema

[![LICENSE](https://img.shields.io/github/license/yaoyao-liu/minimal-light?style=flat-square&logo=creative-commons&color=EF9421)](https://github.com/yaoyao-liu/minimal-light/blob/main/LICENSE)

\[[Demo](https://minimal-light-theme.yliu.me/)\]  \[[English](https://github.com/yaoyao-liu/minimal-light/blob/master/README.md) | [简体中文](https://github.com/yaoyao-liu/minimal-light/blob/master/README_zh_Hans.md) | [繁體中文](https://github.com/yaoyao-liu/minimal-light/blob/master/README_zh_Hant.md)\]
 
*Dies ist der Quellcode meiner Homepage. Ich baue diese Website basierend auf [minimal](https://github.com/orderedlist/minimal).*
<br>
*Sie können den Quellcode jederzeit verwenden und freigeben.*

## Eigenschaften

- Einfaches und elegantes persönliches Homepage-Thema
- Jekyll-Theme, wird automatisch von GitHub-Seiten bereitgestellt
- Grundlegende Suchmaschinenoptimierung
- Handyfreundlich
- Support Markdown 
- Unterstützt den dunklen Modus

## Verwendung

### Verwenden auf GitHub

Um dieses Thema zu verwenden, fügen Sie dem `_config.yml` Ihres Repositorys Folgendes hinzu:
```yaml
remote_theme: yaoyao-liu/minimal-light
```

Bitte beachten Sie, dass durch Hinzufügen der obigen Zeile alle Standardeinstellungen in diesem Repository direkt auf Ihre angewendet werden.

Wenn Sie Dateien bearbeiten möchten (z. B. `index.md`), müssen Sie sie dennoch in Ihr Repository kopieren. 

Sie können dieses Repository auch verzweigen (oder [Verwenden Sie dieses Repository als Vorlage](https://docs.github.com/de/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)) und ändern Sie den Namen in `your-username.github.io`.

Dann müssen Sie die GitHub-Seiten für dieses Repository aktivieren, indem Sie die Schritte [hier](https://docs.github.com/de/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site) ausführen.

### Lokal mit Jekyll verwenden

*Sie müssen [Ruby](https://www.ruby-lang.org/en/) und [Jekyll](https://jekyllrb.com/) fisrt installieren.*

Klonen Sie dieses Repository:

```bash
git clone https://github.com/yaoyao-liu/minimal-light.git
cd minimal-light
```
Installieren und ausführen:

```bash
bundle install
bundle exec jekyll server
```

Zeigen Sie die Live-Seite mit `localhost` an: 
<http://localhost:4000>. Sie können die HTML-Dateien im Ordner `_site` abrufen.

## Customizing

### Konfigurationsvariablen

Das Minimal Light-Thema berücksichtigt die folgenden Variablen, wenn es in der `_config.yml` Ihrer Site festgelegt ist:

  ```yaml
# Grundinformation
title: Ihren Namen
position: Ph.D. Student
affiliation: Ihre Zugehörigkeit
email: yourname (at) example.edu

# Suchmaschinenoptimierung (SEO)
# Die folgenden Informationen werden verwendet, um den Website-Traffic von Suchmaschinen, z. B. Google, zu verbessern.
keywords: minimal light
description: The Minimal Light is a simple and elegant jekyll theme for academic personal homepage.
canonical: https://minimal-light-theme.yliu.me/

# Verknüpfungen
# Wenn Sie eine davon nicht benötigen, können Sie die entsprechende Zeile löschen.
google_scholar: https://scholar.google.com/
cv_link: files/Curriculum_Vitae.pdf
github_link: https://github.com/
linkedin: https://www.linkedin.com/
twitter: https://twitter.com/

# Bilder (z. B. Ihr Profilbild und das Favicon Ihrer Website)
# "favicon" und "favicon_dark" werden für den Hell- bzw. Dunkelmodus verwendet.
avatar: ./assets/img/avatar.png
favicon: ./assets/img/favicon.png
favicon_dark: ./assets/img/favicon-dark.png

# Google Analytics ID
# Bitte entfernen Sie dies, wenn Sie Google Analytics nicht verwenden
google_analytics: UA-111540567-4
  ```
### Bearbeiten von `index.md`

Erstellen Sie `index.md` und fügen Sie Ihre persönlichen Daten hinzu (z. B. Veröffentlichungen, Recherchen).

### Stylesheet

Wenn Sie Ihre eigenen benutzerdefinierten Stile hinzufügen möchten:

1. Erstellen Sie auf Ihrer Site eine Datei mit dem Namen `/assets/css/style.scss`
2. Fügen Sie den folgenden Inhalt genau wie gezeigt oben in die Datei ein:

    ```scss
    ---
    ---

    @import "{{ site.theme }}";
    ```
3. Fügen Sie jedes benutzerdefinierte CSS (oder Sass, einschließlich Importe), das Sie möchten, unmittelbar nach der Zeile `@import` hinzu

### Layouts

Wenn Sie das HTML-Layout des Themas ändern möchten:

1. [Kopieren Sie die Originalvorlage](https://github.com/yaoyao-liu/minimal-light/blob/master/_layouts/homepage.html) aus dem Repository des Themas<br />(*Tipp: Klicken Sie auf "raw", um das Kopieren zu vereinfachen*)
2. Erstellen Sie auf Ihrer Site eine Datei mit dem Namen `/_layouts/homepage.html`
3. Fügen Sie den im ersten Schritt kopierten Standardlayoutinhalt ein
4. Passen Sie das Layout nach Ihren Wünschen an

## Lizenz

Diese Arbeit unterliegt den Bestimmungen einer [Creative Commons Zero v1.0 Universal](https://github.com/yaoyao-liu/minimal-light/blob/master/LICENSE) Lizenz. 

## Danksagung

Unser Projekt verwendet den Quellcode aus den folgenden Repositorys:

* [pages-themes/minimal](https://github.com/pages-themes/minimal)

* [orderedlist/minimal](https://github.com/orderedlist/minimal)

* [al-folio](https://github.com/alshedivat/al-folio)
