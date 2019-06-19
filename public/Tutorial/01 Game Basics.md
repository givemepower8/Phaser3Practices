# Game Basics

Phaser game has one or more scenes, game objects, utility methods, etc.,.

Game has a main branch from start to end. While the progress unfolds, game can have many sub-branches.

Each scene has preload, create, update pipeline.

Game objects are on the scene. Game objects interact with users by keyboard or mouse or touch. They can hold their own data and behaves while the data change. And they interact with other game objects by custom events.

## Game

<https://rexrainbow.github.io/phaser3-rex-notes/docs/site/game/>

[Phaser.Game](https://photonstorm.github.io/phaser3-docs/Phaser.Game.html) is where phaser game starts.

By default, after 'new Phaser.Game(config);' the Phaser.Game instance will be loaded. It is responsible for handling the boot process, parsing the configuration values, creating the renderer, and setting-up all of the global Phaser systems, such as sound and input. Once that is complete it will start the Scene Manager and then begin the main game loop.

[Game source code](https://github.com/photonstorm/phaser/blob/v3.16.2/src/core/Game.js)

see the `minimum game setup.html` example

- minimum game just has one scene `initialize`
- game has pre-defined properties, some important ones like config which you can access the device, game width and height
- game can have custom properties, like the current level / stage, points ...

## Game config

Game has a [config](https://photonstorm.github.io/phaser3-docs/Phaser.Core.Config.html).

[Game Config source code](https://photonstorm.github.io/phaser3-docs/global.html#GameConfig)

The minimum code is like following:

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

function preload() {
  //load in assets needed
}
function create() {
  //setup game
}
function update() {
  //run game loop code
}

// now the game is instantized and starts loading
var game = new Phaser.Game(config);
```

The above game only has one scene. Ideally, scene should be an array of scenes which are taken care of by SceneManager.

### Text

For the text, please see the `update with setText.html` example

- to set the text, you need an variable and instance of the text
- the text instance has its own properties
- the text instance has lots of set methods to change text, font size...

### load image

For the image, please see the `load image.html` example

- absolute and relate url `this.load.image('apple', '/assets/sprites/apple.png');`
- the image instance has its own properties
- the image instance has lots of set methods to change alpha, blend mode...

### Animation

atlas

spritesheet

## Scene

### preload()

It doesn't matter which way to create the scenes, each way has preload(), create() and update().

The preload phase is used to load in any asset (whether it be audio, textual, graphical, or a specialized type) into the game before the game runs.

This ensures the assets will be ready for use in the game and not suddenly appear only once the game play has begun.

#### load shortcut method

##### image

```js
function preload() {
  this.load.setBaseURL('http://labs.phaser.io');
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

##### sound

##### spritesheet

### create()

Create is used for generating game objects so to get the game completely set up and ready to run. This means creating the objects that will first appear in the game, setting up user interface elements, and generally getting anything out of the way that doesn't need an update timer but does need to be in the game.

### add shortcut method

"add" is the shortcut method to add content like text, image onto the scene.

```js
var config = {
  title: 'Awesome',
  scene: {
    preload: preload,
    create: create,
    update: update
  }
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

#### make shortcut method

"make" is the shortcut method to add game object from other format like a json file, etc.,

### update()

Game engines are built upon "game loop". The loop is the place where positions are changed, collisions are checked, input is taken, AI is
calculated, and any other miscellaneous tasks are completed. In Phaser, the game loop method is the update method.

Update method is called during the core game loop after debug, physics, plugins and the Stage have had their preUpdate methods called. It is used for user input polling and game object collisions and detection. This method is often used to capture game events, such as key presses, button clicks, mouse movement etc, and to then update the game scene variables as a result of those inputs.

It is called on every frame. The engine attempts to execute, at best efforts, 60 frames per second, but that is not guaranteed. It is called BEFORE Stage, Tweens, Sounds, Input, Physics, Particles, and Plugins have had their postUpdate methods called.

[Frame rate](https://en.wikipedia.org/wiki/Frame_rate) (expressed in frames per second or fps) is the frequency (rate) at which consecutive images called frames appear on a display. The term applies equally to film and video cameras, computer graphics, and motion capture systems. Frame rate may also be called the frame frequency, and be expressed in hertz.
