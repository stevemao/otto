<p align="center">
  <img src="media/logo.png" alt="Otto, your next interface theme for Sublime Text 3">
</p>

<p align="center">
  <a href='https://pledgie.com/campaigns/31119'><img alt='Click here to lend your support to: Otto Donations and make a donation at pledgie.com !' src='https://pledgie.com/campaigns/31119.png?skin_name=chrome' border='0' ></a>
</p>

<p align="center">
  <a href="https://github.com/oivva/otto/releases"><img src="https://img.shields.io/github/release/oivva/otto.svg?style=flat-square" alt="Release"></a>
  <a href="https://packagecontrol.io/packages/Theme%20-%20Otto"><img src="https://img.shields.io/packagecontrol/dt/Theme%20-%20Otto.svg?style=flat-square" alt="Downloads"></a>
  <a href="https://travis-ci.org/oivva/otto"><img src="https://img.shields.io/travis/oivva/otto.svg?style=flat-square" alt="Build Status"></a>
  <a href="https://david-dm.org/oivva/otto#info=devDependencies"><img src="https://img.shields.io/david/dev/oivva/otto.svg?style=flat-square" alt="Dev Dependencies"></a>
</p>

> **This is pre-release version of the theme. All the options available to customize you can find in [messages/install.txt](messages/install.txt).**
> **Final release and docs will be available soon 🙏**

An easy customizable interface theme for **Sublime Text 3 3083+**. Comes in, both, a light and dark variation with accompanying just a little bit updated [Base16](https://github.com/chriskempson/base16) color schemes. 

*If you have some problems, first search for a similar issue, and then report with [new one](https://github.com/oivva/otto/issues).*

***

## Themes

### Otto Light

![Otto Light](media/otto_light.png)

### Otto Dark

![Otto Dark](media/otto_dark.png)

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

Activate the UI theme and color scheme by modifying your user preferences file, which you can find using the menu item `Preferences -> Settings - User`.

**DON'T FORGET TO RESTART SUBLIME TEXT AFTER ACTIVATING THE THEME.**

### Otto Light

```json
"theme": "Otto Light.sublime-theme",
"color_scheme": "Packages/Theme - Otto/schemes/Base16 Yesterday Light.tmTheme",
```

### Otto Dark

```json
"theme": "Otto Dark.sublime-theme",
"color_scheme": "Packages/Theme - Otto/schemes/Base16 Tomorrow Dark.tmTheme"
```
