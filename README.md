# Phaser3Practices

Phaser 3 Practices

## Installation

[download](https://phaser.io/download/stable)

Phaser is on the jsDelivr CDN. Include one of the following in your html:

```html
<script src="//cdn.jsdelivr.net/npm/phaser@3.16.2/dist/phaser.min.js"></script>
```

## Concepts

### HTML5 game engine

<http://html5gameengine.com>

It's better to have a static web development environment setup. Here webpack-web-server is used.

### assets

## Game setups

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

### preload

The preload phase is used to load in any asset (whether it be audio, textual, graphical, or a specialized type) into the game before the game runs.

This ensures the assets will be ready for use in the game and not suddenly appear only once the gameplay has begun.

#### load

image

```js
function preload() {
  this.load.image('sky', 'src/games/firstgame/assets/sky.png');
  this.load.image('ground', 'src/games/firstgame/assets/platform.png');
  this.load.image('star', 'src/games/firstgame/assets/star.png');
  this.load.image('bomb', 'src/games/firstgame/assets/bomb.png');
  this.load.spritesheet('dude', 'src/games/firstgame/assets/dude.png', {
    frameWidth: 32,
    frameHeight: 48
  });
}
```

spritesheet

sound

tilemap

### create

Create is used for generating game objects so to get the game completely set up and ready to run. This means creating the objects that will first appear in the game, setting up user interface elements, and generally getting anything out of the way that doesn't need an update timer but does need to be in the game.

#### add

```js
function create() {
  this.add.image(400, 300, 'sky');
}
```

### update

All game engines are built upon "game loop". The loop is the place where positions are changed, collisions are checked, input is taken, AI is
calculated, and any other miscellaneous tasks are completed. In Phaser, the game loop method is named update.

Update method is called during the core game loop after debug, physics, plugins and the Stage have had their preUpdate methods called. It is used for user input polling and game object collisions and detection. This method is often used to capture game events, such as key presses, button clicks, mouse movement etc, and to then update the game scene variables as a result of those inputs.

It is called on every frame. The engine attempts to execute, at best efforts, 60 times per second, but that is not guaranteed. It is called BEFORE Stage, Tweens, Sounds, Input, Physics, Particles, and Plugins have had their postUpdate methods called.

#### keyboard

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

#### mouse

## Game

### State

start

gameover

end

### level

scenes

background

### sprite

player

NPCs

overlap / collide

### physics

```js
game.physics.arcade.overlap(catcher, cat, catHitHandler);

function catHitHandler(catcherObject, catObject) {
  catObject.x = Math.random() * game.width;
  catObject.y = Math.random() * game.height;
  score++;
  txtScore.setText(score.toString());
}
```

### animations

## Resources

Official

- [API docs](https://photonstorm.github.io/phaser3-docs/)
- [Phaser 3 examples](http://labs.phaser.io/)
- [Phaser 3 examples code](https://github.com/photonstorm/phaser3-examples)
- [community tutorials](http://phaser.io/learn/community-tutorials)

Books

- [An Introduction to HTML5 Game Development with Phaser.js](https://github.com/meanderingleaf/PhaserBookExamples)
