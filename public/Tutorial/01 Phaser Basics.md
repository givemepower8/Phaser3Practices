# Phaser Game Basics

Phaser game has one or more scenes, game objects, utility methods, etc.,.

Game has a main story line from start to end. While the progress unfolds, game can have many sub quests.

Each scene has `preload`, `create`, `update` pipeline.

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

## Resources

[Apple GameplayKit](https://developer.apple.com/documentation/gameplaykit)

<https://leanpub.com/gtmjigsawpuzzles>

Game-play is an encompassing concept which is the sum of the following individual components game mechanics (aka rules, policies, game logic) player’s learning-curve compared to game challenges, the pacing of “rewards and achievements” to the risk of associated obstacles. 42 elements of the “Fun-factor” from Jon Radoff’s book “Game On”. A book describing “how to make games fun”. The 16 human motivations as defined by Dr. Steven Reiss in Jon Radoff’s book. Download my interpretation chart

<https://developer.amazon.com/blogs/post/Tx3AT4I2ENBOI6R/Intro-to-Phaser-Part-3:-Obstacles,-Collision,-Score,-Sound-and-Publishing>
