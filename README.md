# Textpattern.com website

[![Build Status](https://travis-ci.org/textpattern/textpattern-com-website.svg)](https://travis-ci.org/textpattern/textpattern-com-website)
[![Known Vulnerabilities](https://snyk.io/test/github/textpattern/textpattern-com-website/badge.svg?targetFile=package.json)](https://snyk.io/test/github/textpattern/textpattern-com-website?targetFile=package.json)

Official 2017+ website of the [Textpattern](https://textpattern.com/) project. **Requires Textpattern 4.7.3 or later.**

## Supported web browsers

* Chrome, Edge, Firefox, Safari and Opera the last two recent stable releases.
* Internet Explorer 11.
* Firefox ESR latest major point release.

Older versions of the above and other browsers may work, but these are the ones we verify.

## Requirements

Building this repository requires:

* [Node.js](https://nodejs.org/)
* [Grunt](https://gruntjs.com/)
* [Composer](https://getcomposer.org/)

## Setup

### Installing required tools

The project uses [Grunt](https://gruntjs.com/) to run tasks and [Sass](https://sass-lang.com/) for CSS pre-processing. First make sure you have base dependencies installed: [Node.js](https://nodejs.org/) and [Grunt](https://gruntjs.com/). You can install Node using the [installer](https://nodejs.org/), Composer using the [installer](https://getcomposer.org/), and Grunt with npm:

```ShellSession
$ npm install -g grunt-cli
```

Consult the Grunt documentation for more instructions if necessary.

### Installing dependencies

After you have the base dependencies taken care of, you can install the project's dependencies. Navigate to the project's directory, and run the dependency manager:

```ShellSession
$ cd textpattern-com-website
$ npm install
$ composer install
```

**npm** installs Node modules for Grunt and **composer** installs PHP libraries.

## Building

This repository hosts sources and needs to be built before it can be used. After you have installed all dependencies, you will be able to run tasks using Grunt, including building:

```ShellSession
$ grunt @task@
```

Where the `@task@` is either `build` or `watch`.

* The `build` task builds the project.
* The `watch` task will launch a task that watches for file changes; the project is then automatically built if a source file is modified.

## Shortcodes

Textpattern 4.7 introduced support for user-definable `<txp:output_form />` attributes (and also the short tags syntax `<txp::...>`), allowing for our own version of 'shortcodes' within articles (**note:** remember to also use `notextile.` when within Textile content). This site uses the following tags:

### Image

To create a HTML5 image snippet:

    <txp::media_image id="" dark-option="" set-width="" set-height="" />

`id` accepts either a single image ID, or comma separated image IDs if you want multiple images. For blogs/articles the ideal image width is `832` pixels for the standard resolution version and `1664` pixels for the double resolution version (which is optional, but should be provided if possible).

`dark-option` is optional (for a single image ID), for if you need to provide an alternative image when website is in Dark Mode.

`set-width` and `set-height` are optional (for a single image ID), for if you need to provide explicit maximum dimensions (in pixels) for an image. Otherwise (when not set), images default to being fully responsive (expanding to fill their container).

For example, comma separated image IDs:

    <txp::media_image id="41, 42, 50" />

For example, image with an alternative dark theme version and a set width and height in pixels:

    <txp::media_image id="51" dark-option="52" set-width="400" set-height="125" />

### Video

To create a HTML5 video snippet:

    <txp::media_video width="" height="" mp4-url="" webm-url="" poster-url="" name="" description="" duration-seconds=""/>

`poster-url`, `name`, `description` and `duration-seconds` are optional, but should be provided if possible to provide valid Schema.org microdata. If not used, remove those attributes from your shortcode.

For example:

    <txp::media_video width="640" height="480" mp4-url="/video/video1.mp4" webm-url="/video/video1.webm" poster-url="/video/video1-poster.png" name="Cat video" description="My great video of cats." duration-seconds="20" />

### File

To create a file download snippet:

    <txp::media_file category="" filename="" large-button="" />

`category` and `filename` are interchangeable (use one or the other, where appropriate) - if both are provided then `category` is used in preference and `filename` is ignored.

`large-button` is optional. If set to `1`, this will render a larger style button.

For example:

    <txp::media_file category="current-release-zip" sha256="a868c05fc37108f2bb5e878cfbcdc61a82ce2646c4676cccb8105a6c6277be7a" />

## Plugins used

All plugins we use are installed via Composer:

* [`pat_if_amp`](https://github.com/cara-tm/pat_if_amp) ✓ Composer
* [`rah_comment_spam`](https://github.com/gocom/rah_comment_spam) ✓ Composer
* [`smd_thumbnail`](https://github.com/bloke/smd_thumbnail) ✓ Composer

## License

Licensed under the [GPLv2 license](https://github.com/textpattern/textpattern-com-website/blob/master/LICENSE).
