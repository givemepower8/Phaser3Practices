# Road map

- understand the basics of games

  - graphics
  - physics
  - user controls
  - algorithms

- understand the basics of Web

  - JavaScript and ECMAScript
  - HTML (DOM) and Browsers (BOM)
  - CSS and presentation
  - HTTP (Request and Response)

- Be a good ECMAScript developer

  - Array
  - Functions, arrow functions
  - Modules

- Tooling

  - VS Code
  - NodeJS and NPM
  - Git and version control
  - GitHub and collaboration
  - Code Linting (coding guideline)
  - Test Automation

- multiplayer

  - socket.io

- understand the game design

  - player satisfaction
    - overcome challenges
  - social activity
    - competition
    - corporation

- Phaser coding

  - use ES6 which has great:
    - modules support, i.e., import and export, ...
    - tooling support
  - use TypeScript for more compiling support

- Phaser Dev tools

  - visual studio code / nodejs / npm
  - IsoGenicEngine
  - Tiled
  - [phaser editor](https://phasereditor2d.com/)

- Phaser Dev process

  - name space, prototype in JavaScript
  - organize the game state and assets boot -> preload

- Books to read
  - HTML5 Games Novice to Ninja - SitePoint book covers lots of basic terms of HTML5 games like canvas, physics, ...
  - An Introduction to HTML5 Game Development with Phaser.js - phaser 2 introduction
  - Phaser III Game Design Workbook - very good book to start with Phaser
  - Let's Build a Multiplayer Phaser Game: With TypeScript, Socket.IO, and Phaser
  - Game Development for Human Beings - official tutorials for Phaser 2, but lots of good principles still apply

## More resources

<https://phaser.io/learn/community-tutorials>

<http://phaser.io/phaser3/devlog/85>

<https://examples.ourcade.co/phaser3-typescript>

<https://rexrainbow.github.io/phaser3-rex-notes/docs/site/>

## Boilerplate

### Boot.js

We enter the Boot-phase from the initial "Landing Page".

Inside Boot.js, we use the reserved Phaser methods to initiate, upload, and create the Boot-phase; also, we load game assets and a loading screen (just a simple progression indicator), and further layout other game-level configurations. The Boot.js will initially scale, center and test the current device orientation. The Boot-phase script will then change to the "Preload.js" file content and Preloader-phase.

Create the namespace in Boot.js

```js
var GAMEAPP = GAMEAPP || {};
```
