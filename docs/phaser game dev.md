# Phaser Game Dev

## Game

[Phaser.Game](https://photonstorm.github.io/phaser3-docs/Phaser.Game.html) is where phaser game starts.

By default, after 'new Phaser.Game(config);' the Phaser.Game instance will be loaded. It is responsible for handling the boot process, parsing the configuration values, creating the renderer, and setting-up all of the global Phaser systems, such as sound and input. Once that is complete it will start the Scene Manager and then begin the main game loop.

[Game source code](https://github.com/photonstorm/phaser/blob/v3.16.2/src/core/Game.js)

## Game config

Game has a [config](https://photonstorm.github.io/phaser3-docs/Phaser.Core.Config.html).

[Game Config source code](https://photonstorm.github.io/phaser3-docs/global.html#GameConfig)

The minumum code is like following:

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

## Scene

Game happens on one or more scenes.

The Scene Manager is a Game level system, responsible for creating, processing and updating all of the Scenes in a Game instance.

[SceneManager source code](https://github.com/photonstorm/phaser/blob/v3.16.2/src/scene/SceneManager.js)

SceneManage has an array of scenes. Each Scene has a unique key to identify it.

[Scene](https://photonstorm.github.io/phaser3-docs/Phaser.Scene.html) [Scene source code](https://github.com/photonstorm/phaser/blob/v3.16.2/src/scene/Scene.js)

### preload

The preload phase is used to load in any asset (whether it be audio, textual, graphical, or a specialized type) into the game before the game runs.

This ensures the assets will be ready for use in the game and not suddenly appear only once the gameplay has begun.

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

sound

tilemap

### create

Create is used for generating game objects so to get the game completely set up and ready to run. This means creating the objects that will first appear in the game, setting up user interface elements, and generally getting anything out of the way that doesn't need an update timer but does need to be in the game.

#### add methods

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

### update

Game engines are built upon "game loop". The loop is the place where positions are changed, collisions are checked, input is taken, AI is
calculated, and any other miscellaneous tasks are completed. In Phaser, the game loop method is the update method.

Update method is called during the core game loop after debug, physics, plugins and the Stage have had their preUpdate methods called. It is used for user input polling and game object collisions and detection. This method is often used to capture game events, such as key presses, button clicks, mouse movement etc, and to then update the game scene variables as a result of those inputs.

It is called on every frame. The engine attempts to execute, at best efforts, 60 times per second, but that is not guaranteed. It is called BEFORE Stage, Tweens, Sounds, Input, Physics, Particles, and Plugins have had their postUpdate methods called.

## Game play

On the scene, there are the character or object controlled by player which interact with many other game objects.

### Animation

atlas

spritesheet

### Group

```js
function create() {
  var group = this.add.group();

  var image1 = this.add.image(0, 0, 'img1');

  group.add(image1);

  var image2 = this.add.image(0, 100, 'img2');

  group.add(image2);

  Phaser.Actions.SetXY(group.getChildren(), 400, 300);
}
```

## User Input

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

## Game objects

The Game Object Factory is a Scene plugin that allows you to quickly create many common types of Game Objects and have them automatically registered with the Scene. Game Objects directly register themselves with the Factory and inject their own creation methods into the class.

## Physics

### Arcade

[Arcade source code](https://github.com/photonstorm/phaser/tree/v3.16.2/src/physics/arcade)

### Impact

[Impact source code](https://github.com/photonstorm/phaser/tree/v3.16.2/src/physics/impact)
