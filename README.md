<p align="center">
  <img src="https://www.dropbox.com/s/ozffceb3cajwo67/logo.png?dl=1" alt="Otto, your next interface theme for Sublime Text 3">
</p>

<p align="center">
  <a href="https://pledgie.com/campaigns/31119"><img alt="Click here to lend your support to: Otto Donations and make a donation at pledgie.com !" src="https://pledgie.com/campaigns/31119.png?skin_name=chrome" border="0" ></a>
</p>

<p align="center">
  <a href="https://github.com/oivva/otto/releases"><img src="https://img.shields.io/github/release/oivva/otto.svg?style=flat-square" alt="Release"></a>
  <a href="https://packagecontrol.io/packages/Theme%20-%20Otto"><img src="https://img.shields.io/packagecontrol/dt/Theme%20-%20Otto.svg?style=flat-square" alt="Downloads"></a>
  <a href="https://travis-ci.org/oivva/otto"><img src="https://img.shields.io/travis/oivva/otto.svg?style=flat-square" alt="Build Status"></a>
</p>

Easy customizable interface and syntax themes for **Sublime Text 3 3083+**. Come in, both, light and dark variations. All color schemes are optimized for JavaScript syntax highlighter (including [babel-sublime](https://github.com/babel/babel-sublime)).

**NOTE:** Active tab has the same color as an active color scheme to fit it more gracefully.

*If you have some problems, first search for a similar issue, and then report with [new one](https://github.com/oivva/otto/issues).*

Please read the [Known Issues](#known-issues) section before reporting a new one.

***

## Themes

### Otto Yesterday

Best for light color schemes, especially good with **Otto Yesterday** & [**Base16 Tomorrow Light**](http://chriskempson.github.io/base16/#tomorrow).

![Otto Yesterday](https://www.dropbox.com/s/n1aln2j9hf9nhxq/otto_yesterday.png?dl=1)

### Otto Tomorrow

Best for dark color schemes, especially good with **Otto Tomorrow** & [**Zenburn**](https://github.com/colinta/zenburn).

![Otto Tomorrow](https://www.dropbox.com/s/0bacsgj60pi6o5d/otto_tomorrow.png?dl=1)

### Otto Oceanic

Best for dark color schemes, especially good with **Otto Oceanic** & [**Solarized Dark**](https://github.com/braver/Solarized).

![Otto Oceanic](https://www.dropbox.com/s/fzc9eikd1wr3hq1/otto_oceanic.png?dl=1)

### Otto Monokai

Best for dark color schemes, especially good with [**Monokai Extended**](https://github.com/jonschlinkert/sublime-monokai-extended) & [**Monokai Neue**](https://github.com/josh-kaplan/sublime-monokai-neue).

![Otto Monokai](https://www.dropbox.com/s/5lhe0atlywh1qml/otto_monokai.png?dl=1)

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

![Activation](https://www.dropbox.com/s/5hq751baq43zafm/activation.gif?dl=1)

Activate the UI theme and color scheme by modifying your user preferences file, which you can find using the menu item `Preferences -> Settings - User`.

**DON'T FORGET TO RESTART SUBLIME TEXT AFTER ACTIVATING THE THEME.**

```json
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

### Accent Colors

![Accents](https://www.dropbox.com/s/trct87pkmithkxu/accents.gif?dl=1)

```json
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

![Tabs](https://www.dropbox.com/s/yxbhw167zcwt7od/tabs.gif?dl=1)

```json
// By Default
// -----------------

"theme_otto_tab_selected_default": true,
"theme_otto_tab_medium": true,
"theme_otto_tab_auto_width": false,
"theme_otto_tab_label_bold": false,
"theme_otto_tab_selected_label_bold": false,
"theme_otto_mouse_wheel_switches_tabs": false,

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
```

### Widgets

```json
// By Default
// -----------------

"theme_otto_find_and_replace_close_hide": false,
"theme_otto_find_and_replace_small": false,

// Available
// -----------------

"theme_otto_find_and_replace_close_hide": true,
"theme_otto_find_and_replace_small": true,
```

***

## Known Issues

If you can't see the bottom panel (find/replace, rename, move, can't see the box inputs in SidebarEnhancement, etc..). Here the quick fix:

![Drag the top edge](https://www.dropbox.com/s/cv0oy84h58ztgql/drag_top_edge.gif?dl=1)
