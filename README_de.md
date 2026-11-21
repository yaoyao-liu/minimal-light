# Das Minimal-Light-Theme

[![LICENSE](https://img.shields.io/github/license/yaoyao-liu/minimal-light?style=flat-square&logo=creative-commons&color=EF9421)](LICENSE)

\[[Demo des Themes](https://minimal-light-theme.yliu.me/)\]  \[[English](README.md) | [简体中文](README_zh_Hans.md) | [繁體中文](README_zh_Hant.md)\]

*Dies ist der Quellcode meiner Homepage. Ich habe diese Website auf Basis von [minimal](https://github.com/orderedlist/minimal) erstellt.*
<br>
*Sie können den Quellcode gerne beliebig verwenden und weitergeben.*

**Die neueste Version meiner Homepage finden Sie hier: <br><https://github.com/yaoyao-liu/yaoyaoliu-homepage>**

*Diese Datei wurde maschinell aus der [englischen Version](README.md) übersetzt. Sollten Sie Fehler finden, richten Sie sich bitte nach der englischen Version; Korrekturen per [Pull-Request](https://github.com/yaoyao-liu/minimal-light/pulls) sind willkommen.*

## Funktionen

- Einfaches und elegantes Theme für persönliche Homepages
- Jekyll-Theme, das automatisch über GitHub Pages bereitgestellt wird
- Grundlegende Suchmaschinenoptimierung
- Für Mobilgeräte geeignet
- Unterstützt Markdown
- Unterstützt den Dunkelmodus

## Projektstruktur

```
.
├── _data
|   └── publications.yml                      # die YAML-Datei für die Publikationen
├── _includes
|   ├── publications.md                       # die Markdown-Datei für die Publikationen
|   └── service.md                            # die Markdown-Datei für die akademischen Tätigkeiten
├── _layouts
|   └── homepage.html                         # die HTML-Vorlage der Homepage
├── _sass
|   ├── minimal-light.scss                    # wird zu einer CSS-Datei kompiliert, die das Aussehen der Seite steuert
|   ├── minimal-light-no-dark-mode.scss       # wie minimal-light.scss, jedoch ohne Dunkelmodus
|   ├── minimal-light-publications.scss       # die Stile der Publikationsliste
|   └── minimal-light-variables.scss          # die gemeinsamen Farbvariablen und der Schalter für den Dunkelmodus
├── assets                                    # statische Dateien (CSS, JavaScript, Bilder und PDFs)
├── html_source_file                          # kompilierte HTML-Dateien
├── .gitignore                                # legt fest, welche nicht versionierten Dateien Git ignorieren soll
├── CNAME                                     # die eigene Domain, wird vom GitHub-Pages-Dienst verwendet
├── Gemfile                                   # die Datei mit den benötigten Ruby-Gems
├── LICENSE                                   # die Lizenzdatei
├── README.md                                 # die Readme-Datei (Englisch)
├── README_de.md                              # die Readme-Datei (Deutsch)
├── README_zh_Hans.md                         # die Readme-Datei (vereinfachtes Chinesisch)
├── README_zh_Hant.md                         # die Readme-Datei (traditionelles Chinesisch)
├── _config.yml                               # die Jekyll-Konfigurationsdatei mit einigen Optionen der Seite
└── index.md                                  # der Inhalt der Startseite, in Markdown geschrieben
```

## Erste Schritte

Diese Vorlage kann auf die folgenden zwei Arten verwendet werden:
- **Verwendung mit dem GitHub-Pages-Dienst.** GitHub stellt Ihnen einen Server zur Verfügung, der die Webseiten erzeugt und hostet.
- **Lokale Verwendung mit Jekyll.** Sie können Jekyll auf Ihrem eigenen Computer installieren und mit dieser Vorlage statische Webseiten (d. h. HTML-Dateien) erzeugen. Anschließend können Sie die HTML-Dateien auf Ihren Server hochladen.

Die ausführliche Anleitung finden Sie unten.

### Verwendung mit dem GitHub-Pages-Dienst

Es gibt zwei Möglichkeiten, diese Vorlage auf GitHub zu verwenden:

#### Dieses Repository forken

- Forken Sie dieses Repository (oder [verwenden Sie es als Vorlage](https://docs.github.com/de/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)) und ändern Sie den Namen in `your-username.github.io`.

- Aktivieren Sie GitHub Pages für dieses Repository, indem Sie den Schritten [hier](https://docs.github.com/de/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site) folgen.

#### Dieses Repository als Remote-Theme verwenden

Um dieses Theme zu verwenden, fügen Sie der `_config.yml` Ihres Repositorys Folgendes hinzu:

```yaml
remote_theme: yaoyao-liu/minimal-light
```

Bitte beachten Sie, dass durch das Hinzufügen der obigen Zeile alle Standardeinstellungen dieses Repositorys direkt auf Ihr Repository angewendet werden.

Wenn Sie Dateien bearbeiten möchten (z. B. `index.md`), müssen Sie diese dennoch in Ihr Repository kopieren.

### Lokale Verwendung mit Jekyll

Installieren Sie zunächst [Ruby](https://www.ruby-lang.org/de/) und [Jekyll](https://jekyllrb.com/). Die Installationsanleitung finden Sie hier: <https://jekyllrb.com/docs/installation/#guides>

Klonen Sie anschließend dieses Repository:

```bash
git clone https://github.com/yaoyao-liu/minimal-light.git
cd minimal-light
```

Installieren Sie die Abhängigkeiten und starten Sie den Server:

```bash
bundle install
bundle exec jekyll server
```

Die Seite können Sie unter <http://localhost:4000> ansehen. Die erzeugten HTML-Dateien finden Sie im Ordner `_site`.

### Verwendung der HTML-Version

Die kompilierten HTML-Dateien befinden sich im Ordner `html_source_file`. Wenn Sie Jekyll nicht verwenden möchten, können Sie die HTML-Version direkt bearbeiten und verwenden.

## Anpassung

### Konfigurationsvariablen

Das Minimal-Light-Theme berücksichtigt die folgenden Variablen, sofern sie in der `_config.yml` Ihrer Website gesetzt sind:

```yaml
# Grundlegende Informationen
title: Ihr Name
position: Ph.D. Student
affiliation: Ihre Einrichtung
affiliation_link: https://www.example.edu/
email: yourname (at) example.edu

# Suchmaschinenoptimierung (SEO)
# Die folgenden Angaben dienen dazu, die Zugriffe über Suchmaschinen (z. B. Google) zu erhöhen.
keywords: minimal light
description: The Minimal Light is a simple and elegant Jekyll theme for an academic personal homepage.
canonical: https://minimal-light-theme.yliu.me/

# Links
# Wenn Sie einen davon nicht benötigen, können Sie die entsprechende Zeile löschen.
google_scholar: https://scholar.google.com/
cv_link: assets/files/curriculum_vitae.pdf
github_link: https://github.com/
linkedin: https://www.linkedin.com/
twitter: https://twitter.com/

# Bilder (z. B. Ihr Profilbild und das Favicon Ihrer Website)
# "favicon" und "favicon_dark" werden für den Hell- bzw. den Dunkelmodus verwendet.
avatar: ./assets/img/avatar.png
favicon: ./assets/img/favicon.png
favicon_dark: ./assets/img/favicon-dark.png

# Fußzeile
# Mit dieser Option können Sie den Hinweis "Powered by Jekyll and Minimal Light theme." in der Fußzeile ausblenden.
enable_footnote: true

# Automatischer Dunkelmodus
# Mit dieser Option können Sie das automatische dunkle Theme deaktivieren.
auto_dark_mode: true

# Schriftart
# Mit dieser Option können Sie zwischen Serifenschrift (Serif) und serifenloser Schrift (Sans Serif) wählen.
font: "Serif" # oder "Sans Serif"

# Google-Analytics-ID
# Entfernen Sie das Kommentarzeichen in der folgenden Zeile und tragen Sie Ihre Google-Analytics-4-Mess-ID (G-XXXXXXXXXX) ein, um Google Analytics zu aktivieren.
# google_analytics: G-XXXXXXXXXX
```

### `index.md` bearbeiten

Erstellen Sie `index.md` und fügen Sie Ihre persönlichen Informationen hinzu. Die Datei unterstützt **Markdown**- und **HTML**-Syntax.

### Eingebundene Dateien bearbeiten

In `index.md` werden zwei Markdown-Dateien eingebunden: `_includes/publications.md` und `_includes/service.md`. Auch diese beiden Dateien unterstützen **Markdown**- und **HTML**-Syntax. Wenn Sie diese beiden Dateien nicht einbinden möchten, können Sie die folgenden Zeilen in `index.md` entfernen:
https://github.com/yaoyao-liu/minimal-light/blob/b38070cd0b6bce45d8a885f3828549af8f82b7cb/index.md?plain=1#L21-L23

Wenn Sie die Publikationsliste bearbeiten möchten, ohne das Format zu ändern, können Sie `_data/publications.yml` bearbeiten:
https://github.com/yaoyao-liu/minimal-light/blob/77b1b3b31d4561091bcd739f37a2e1880e8b5ca5/_data/publications.yml#L3-L11

### Stylesheet

Wenn Sie eigene Stile hinzufügen möchten, können Sie `_sass/minimal-light.scss` bearbeiten.

### Layouts

Wenn Sie das HTML-Layout des Themes ändern möchten, können Sie `_layouts/homepage.html` bearbeiten.

## Lizenz

Dieses Werk steht unter der Lizenz [Creative Commons Zero v1.0 Universal](LICENSE).

## Danksagung

Dieses Projekt verwendet Quellcode aus den folgenden Repositorys:

* [pages-themes/minimal](https://github.com/pages-themes/minimal)

* [orderedlist/minimal](https://github.com/orderedlist/minimal)

* [al-folio](https://github.com/alshedivat/al-folio)
