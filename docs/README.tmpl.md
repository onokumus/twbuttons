# {%= name %} {% if (travis) { %} [![Build Status]({%= travis %}.png)]({%= travis %}){% } %} [![Dependency Status](https://david-dm.org/onokumus/{%= name %}.svg?theme=shields.io)](https://david-dm.org/onokumus/{%= name %}) [![devDependency Status](https://david-dm.org/onokumus/{%= name %}/dev-status.svg?theme=shields.io)](https://david-dm.org/onokumus/{%= name %}#info=devDependencies)

> {%= description %}

## TOC
  * [Download](#download)
  * [Building](#building)
  * [Demo](#demo)
  * [Release History](#release-history)
  * [Credits](#credits)
  * [Author](#author)
  * [License](#license)

### Download
* Bootstrap 3.2.0 [v{%= version %}](https://github.com/onokumus/{%= name %}/archive/master.zip)
ready `dist` folder your use
* [npm](https://www.npmjs.org/): `npm install {%= name %}`
* [Bower](http://bower.io/): `bower install {%= name %}`



### Building

#### {%= version %} Version
required [node.js](http://nodejs.org/) & [bower](http://bower.io/) & [grunt](http://gruntjs.com/getting-started)

{%= docs('building') %}

## Docs
### Available Classess
{%= docs('classes') %}

### Demo
 * [See](http://onokumus.github.io/{%= name %}/)


## Release History
{%= changelog() %}



### Credits
 * [node.js](http://nodejs.org/)
 * [bower](http://bower.io/)
 * [Grunt](http://gruntjs.com/)
 * [jQuery](http://jquery.com/)
 * [Bootstrap](http://getbootstrap.com/)
 * [LESS](http://lesscss.org/)

### Author
 * {%= author.name %}

### License
{%= copyright() %}
{%= license() %}

{%= include("footer") %}
