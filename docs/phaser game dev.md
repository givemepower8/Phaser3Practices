# Game setup

## Game config

[Game Config](https://photonstorm.github.io/phaser3-docs/global.html#GameConfig)

```js
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#2d2d2d',
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);
function preload() {
  //load in assets needed
}
function create() {
  //setup game
}
function update() {
  //run game loop code
}
```

## Game

[Phaser.Game](https://photonstorm.github.io/phaser3-docs/Phaser.Game.html)

Game has a config [https://photonstorm.github.io/phaser3-docs/Phaser.Core.Config.html].

## Scene

[Scene](https://photonstorm.github.io/phaser3-docs/Phaser.Scene.html) [Scene source code](https://github.com/photonstorm/phaser/blob/v3.16.2/src/scene/Scene.js)

## preload

The preload phase is used to load in any asset (whether it be audio, textual, graphical, or a specialized type) into the game before the game runs.

This ensures the assets will be ready for use in the game and not suddenly appear only once the gameplay has begun.

### load

image

```js
function preload() {
  this.load.image('sky', 'assets/sky.png');
  this.load.image('ground', 'assets/platform.png');
  this.load.image('star', 'assets/star.png');
  this.load.image('bomb', 'assets/bomb.png');
  this.load.spritesheet('dude', 'assets/dude.png', {
    frameWidth: 32,
    frameHeight: 48
  });
}
```

spritesheet

sound

tilemap

## create

Create is used for generating game objects so to get the game completely set up and ready to run. This means creating the objects that will first appear in the game, setting up user interface elements, and generally getting anything out of the way that doesn't need an update timer but does need to be in the game.

### add

```js
var config = {
  title: 'Awesome'
};

var game = new Phaser.Game(config);

function create() {
  this.add.image(400, 300, 'sky');

  var text = this.add.text(80, 550, '', {
    font: '16px Courier',
    fill: '#ffffff'
  });

  text.setText(['Game Title: ' + game.config.gameTitle]);
}
```

## update

All game engines are built upon "game loop". The loop is the place where positions are changed, collisions are checked, input is taken, AI is
calculated, and any other miscellaneous tasks are completed. In Phaser, the game loop method is named update.

Update method is called during the core game loop after debug, physics, plugins and the Stage have had their preUpdate methods called. It is used for user input polling and game object collisions and detection. This method is often used to capture game events, such as key presses, button clicks, mouse movement etc, and to then update the game scene variables as a result of those inputs.

It is called on every frame. The engine attempts to execute, at best efforts, 60 times per second, but that is not guaranteed. It is called BEFORE Stage, Tweens, Sounds, Input, Physics, Particles, and Plugins have had their postUpdate methods called.

### keyboard

```js
var cursors = game.input.keyboard.createCursorKeys();

if(cursors.left.isDown) {
    catcher.x – = 5;
}

if(cursors.right.isDown) {
    catcher.x += 5;
}

if(cursors.up.isDown) {
    catcher.y – = 5;
}

if(cursors.down.isDown) {
    catcher.y += 5;
}
```

```js
if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
  //acceleration, fire bullets, anything else that needs a constant press
}
```

### mouse
