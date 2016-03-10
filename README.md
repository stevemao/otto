<p align="center">
  <img src="https://raw.githubusercontent.com/oivva/otto-goodies/master/media/logo.png" alt="Otto, your next interface theme for Sublime Text 3">
</p>

<p align="center">
    <a href="https://www.patreon.com/oivva" target="_blank">
       <img src="https://raw.githubusercontent.com/oivva/otto-goodies/master/media/donate.png" alt="Click here to lend your support to: Otto and make a donation at patreon.com !"> 
    </a>
</p>

<p align="center">
  <a href="https://github.com/oivva/otto/releases"><img src="https://img.shields.io/github/release/oivva/otto.svg?style=flat-square" alt="Release"></a>
  <a href="https://packagecontrol.io/packages/Theme%20-%20Otto"><img src="https://img.shields.io/packagecontrol/dt/Theme%20-%20Otto.svg?style=flat-square" alt="Downloads"></a>
  <a href="https://travis-ci.org/oivva/otto"><img src="https://img.shields.io/travis/oivva/otto.svg?style=flat-square" alt="Build Status"></a>
</p>

Easy customizable interface and syntax themes for **Sublime Text 3 3083+**. Come in, both, light and dark variations. All color schemes are optimized for JavaScript syntax highlighter (including [babel-sublime](https://github.com/babel/babel-sublime)).

**NOTE:** Active tab has the same background color as the background of the active color scheme to fit it more gracefully.

*If you have some problems, first search for a similar issue, and then report with [new one](https://github.com/oivva/otto/issues).*

Please read the [Known Issues](#known-issues) section before reporting a new one.

***

## Table of Contents

<!-- MarkdownTOC depth=2 autolink=true bracket=round -->

- [Themes](#themes)
- [Installation](#installation)
- [Activation](#activation)
- [Customization](#customization)
- [Recommended Settings](#recommended-settings)
- [HiDPI Support](#hidpi-support)
- [References](#references)
- [Contributing](#contributing)
- [Design & Extras](#design--extras)
- [Known Issues](#known-issues)

<!-- /MarkdownTOC -->

***

## Themes

### Otto Yesterday

Best for light color schemes, especially good with **Otto Yesterday** & [**Base16 Tomorrow Light**](http://chriskempson.github.io/base16/#tomorrow).

![Otto Yesterday](https://raw.githubusercontent.com/oivva/otto-goodies/master/media/yesterday.gif)

### Otto Tomorrow

Best for dark color schemes, especially good with **Otto Tomorrow** & [**Zenburn**](https://github.com/colinta/zenburn).

![Otto Tomorrow](https://raw.githubusercontent.com/oivva/otto-goodies/master/media/tomorrow.gif)

### Otto Oceanic

Best for dark color schemes, especially good with **Otto Oceanic**, [**Solarized Dark**](https://github.com/braver/Solarized) & [**Cobalt2**](https://github.com/wesbos/cobalt2).

![Otto Oceanic](https://raw.githubusercontent.com/oivva/otto-goodies/master/media/oceanic.gif)

### Otto Monokai

Best for dark color schemes, especially good with [**Monokai Extended**](https://github.com/jonschlinkert/sublime-monokai-extended) & [**Monokai Neue**](https://github.com/josh-kaplan/sublime-monokai-neue).

![Otto Monokai](https://raw.githubusercontent.com/oivva/otto-goodies/master/media/monokai.gif)

***

## Installation

### Package Control

The easiest way to install is using [Sublime Package Control](https://sublime.wbond.net), where [Otto](https://packagecontrol.io/packages/Theme%20-%20Otto) is listed as `Theme - Otto`.

1. Open *Command Palette* using menu item `Tools -> Command Palette...` (OS X: <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>P</kbd> | Windows/Linux: <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>)
2. Choose `Package Control: Install Package`
3. Find `Theme - Otto` and hit <kbd>Enter</kbd>


### Manual

You can also install the theme manually:

1. [Download the .zip](https://github.com/oivva/otto/releases)
2. Unzip and rename the folder to `Theme - Otto`
3. Copy the folder into `Packages` directory, which you can find using the menu item `Preferences -> Browse Packages...`

***

## Activation

![Activation](https://raw.githubusercontent.com/oivva/otto-goodies/master/docs/activation.gif)

Activate the UI theme and color scheme by modifying your user preferences file, which you can find using the menu item `Preferences -> Settings - User`.

**DON'T FORGET TO RESTART SUBLIME TEXT AFTER ACTIVATING THE THEME.**

```js
// Otto Yesterday
// -----------------

"theme": "Otto Yesterday.sublime-theme",
"color_scheme": "Packages/Theme - Otto/schemes/Otto Yesterday.tmTheme",

// Otto Tomorrow
// -----------------

"theme": "Otto Tomorrow.sublime-theme",
"color_scheme": "Packages/Theme - Otto/schemes/Otto Tomorrow.tmTheme",

// Otto Oceanic
// -----------------

"theme": "Otto Oceanic.sublime-theme",
"color_scheme": "Packages/Theme - Otto/schemes/Otto Oceanic.tmTheme",

// Otto Monokai
// -----------------

"theme": "Otto Monokai.sublime-theme",
"color_scheme": "Packages/Theme - Otto/schemes/Otto Monokai.tmTheme",
```

***

## Customization

**NOTE**: Some of the options may not work properly due to these well-known bugs & suggestions

- [Increasing font size of file tabs cuts off the font](https://forum.sublimetext.com/t/increaseing-font-size-of-file-tabs-cuts-off-the-font/7009)
- [Sidebar improvements](https://forum.sublimetext.com/t/sugestion-ui-sidebar-improvements/18028)
- [Quick panel font size](https://forum.sublimetext.com/t/quick-panel-font-size/4046)
- [Change font in quick panel](https://forum.sublimetext.com/t/change-font-in-quick-panel/7855)

_You can vote for these issues._

### Global Options

#### Sizes

```js
// By Default
// -----------------

"theme_otto_global_ui_medium": true,

// Available
// -----------------

"theme_otto_global_ui_small": true,
"theme_otto_global_ui_large": true,
```

#### Font

```js
// By Default
// -----------------

"theme_otto_global_font_size_11": true,

// Available
// -----------------

"theme_otto_global_font_size_12": true,
"theme_otto_global_font_size_13": true,
"theme_otto_global_font_size_14": true,
"theme_otto_global_font_size_15": true,
```

#### Accent Colors

![Accents](https://raw.githubusercontent.com/oivva/otto-goodies/master/docs/accents.gif)

```js
// By Default
// -----------------

"theme_otto_accent_blue": true,

// Available
// -----------------

"theme_otto_accent_green": true,
"theme_otto_accent_orange": true,
"theme_otto_accent_purple": true,
```

### Tabs

![Tabs](https://raw.githubusercontent.com/oivva/otto-goodies/master/docs/tabs.gif)

```js
// By Default
// -----------------

"theme_otto_tab_selected_default": true,
"theme_otto_tab_medium": true,
"theme_otto_tab_auto_width": false,
"theme_otto_tab_label_bold": false,
"theme_otto_tab_selected_label_bold": false,
"theme_otto_mouse_wheel_switches_tabs": false,
"theme_otto_tab_font_size_11": true,

// Available
// -----------------

"theme_otto_tab_selected_underlined": true,
"theme_otto_tab_selected_prelined": true,
"theme_otto_tab_selected_filled": true,

"theme_otto_tab_small": true,
"theme_otto_tab_large": true,
"theme_otto_tab_auto_width": true,

"theme_otto_tab_label_bold": true,
"theme_otto_tab_selected_label_bold": true,
"theme_otto_mouse_wheel_switches_tabs": true,
"theme_otto_tab_separator_hide": true,

"theme_otto_tab_font_size_12": true,
"theme_otto_tab_font_size_13": true,
"theme_otto_tab_font_size_14": true,
"theme_otto_tab_font_size_15": true,
```

### Scrollbars

```js
// By Default
// -----------------

"theme_otto_scrollbars_monochrome": false,
"theme_otto_scrollbars_wide": false,

// Available
// -----------------

"theme_otto_scrollbars_monochrome": true,
"theme_otto_scrollbars_wide": true,
```

### Widgets

```js
// By Default
// -----------------

"theme_otto_find_and_replace_close_hide": false,
"theme_otto_find_and_replace_small": false,
"theme_otto_find_and_replace_font_size_11": true,

// Available
// -----------------

"theme_otto_find_and_replace_close_hide": true,
"theme_otto_find_and_replace_small": true,

"theme_otto_find_and_replace_font_size_12": true,
"theme_otto_find_and_replace_font_size_13": true,
"theme_otto_find_and_replace_font_size_14": true,
"theme_otto_find_and_replace_font_size_15": true,
```

### Statusbar

```js
// By Default
// -----------------

"theme_otto_status_bar_medium": true,
"theme_otto_status_bar_font_size_11": true,

// Available
// -----------------

"theme_otto_status_bar_small": true,
"theme_otto_status_bar_large": true,

"theme_otto_status_bar_font_size_12": true,
"theme_otto_status_bar_font_size_13": true,
"theme_otto_status_bar_font_size_14": true,
"theme_otto_status_bar_font_size_15": true,
```

### Sidebar

```js
// By Default
// -----------------

"theme_otto_sidebar_medium": true,
"theme_otto_sidebar_folder_arrow": false,
"theme_otto_sidebar_hide_file_icons": false,
"theme_otto_sidebar_font_size_11": true,

// Available
// -----------------

"theme_otto_sidebar_small": true,
"theme_otto_sidebar_large": true,

"theme_otto_sidebar_folder_arrow": true,
"theme_otto_sidebar_hide_file_icons": true,

"theme_otto_sidebar_font_size_12": true,
"theme_otto_sidebar_font_size_13": true,
"theme_otto_sidebar_font_size_14": true,
"theme_otto_sidebar_font_size_15": true,
```

### Even More

You can customize themes via [PackageResourceViewer](https://github.com/skuroda/PackageResourceViewer). E.g. Due to Sublime Text 3 limitations related to the widget styling, you can find that colors of the cursor in the editor and find panel are different. That's why I always add similar changes to the theme manually. Let's say I want to change colors of the caret and selection:

![Additional Customizations](https://raw.githubusercontent.com/oivva/otto-goodies/master/docs/additional-customizations.gif)

***

## Recommended Settings

```js
"always_show_minimap_viewport": true,
"bold_folder_labels": true,
"caret_extra_bottom": 1,
"caret_extra_top": 1,
"caret_extra_width": 1,
"caret_style": "blink",
"fade_fold_buttons": false,
"indent_guide_options": ["draw_normal", "draw_active"],
"line_padding_bottom": 2,
"line_padding_top": 2,
"overlay_scroll_bars": "enabled",
"show_encoding": true,
"show_line_endings": true,
```

The font used for the code is [**Fira Code**](https://github.com/tonsky/FiraCode).

***

## HiDPI Support

These themes include @1x, @2x, @3x image assets. Sublime Text supports HiDPI in **Mac OS** (works like a charm), but have some issues in **Windows** & **Linux**. Here the dirty fix:

* download psd from [Design](#design--extras),
* use [PackageResourceViewer](https://github.com/skuroda/PackageResourceViewer) to extract the themes,
* manually change all @1x assets into needed versions.

***

## References

These themes are heavily inspired by:

* [Predawn](https://github.com/jamiewilson/predawn)
* [Material Theme](https://github.com/equinusocio/material-theme)
* [Primer](https://github.com/karelvuong/st-primer)
* [Piatto](https://github.com/samuelrafo/piatto)
* [Minimal](https://github.com/AntoineBoulanger/Minimal-Sublime-Text-Theme)

Color schemes are based on:

* [Base16 Color Schemes](https://github.com/chriskempson/base16)
* [Oceanic Next Color Scheme](https://github.com/voronianski/oceanic-next-color-scheme)

***

## Contributing

**NOTE:** I have no plans to add new themes, only the fixes and improvements to the existing ones. In such cases you're free to fork.

These themes use a custom Gulp builder. If you want to edit them you must install it first:

```bash
$ npm install
```

then run watcher by:

```bash
$ gulp watch
```

You can now edit the source files under `sources` folder that will be compiled (don't edit compiled files, all sources are inside `sources`).

If you'd like to add some rules and styles to the template of the color schemes, please, do it inside `sources\templates\scheme.YAML-tmTheme`. Run `gulp build:schemes` and then generate `*.tmTheme` files in `schemes` folder with such tool as [PackageDev](https://github.com/SublimeText/PackageDev).

**PRs welcome!😋**

***

## Design & Extras

Also, you can download all assets in psd format and some extras: [Otto Goodies](https://github.com/oivva/otto-goodies)

***

## Known Issues

If you can't see the bottom panel (find/replace, rename, move, can't see the box inputs in SidebarEnhancement, etc..). Here the quick fix:

![Drag the top edge](https://raw.githubusercontent.com/oivva/otto-goodies/master/docs/known-issue.gif)
