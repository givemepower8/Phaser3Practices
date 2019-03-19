// create a new scene
let gameScene = new Phaser.Scene('Game');

// load assets
gameScene.preload = function(){
  // load images
  this.load.image('background', 'assets/background.png');
  this.load.image('player', 'assets/player.png');
  this.load.image('enemy', 'assets/dragon.png');
};

// called once after the preload ends
gameScene.create = function() {
  // create bg sprite
  let bg = this.add.sprite(0, 0, 'background');

  // change the origin to the top-left corner
  bg.setOrigin(0,0);

  // create the player
  let player = this.add.sprite(70, 180, 'player');

  // we are reducing the width by 50%, and we are doubling the height
  player.setScale(0.5);

  // create an enemy
  let enemy1 = this.add.sprite(250, 180, 'enemy');

  enemy1.scaleX = 2;
  enemy1.scaleY = 2;

  // create a second enemy
  let enemy2 = this.add.sprite(450, 180, 'enemy');
  enemy2.displayWidth = 300;

  // flip
  enemy1.flipX = true;
  enemy1.flipY = true;
};

// set the configuration of the game
let config = {
  type: Phaser.AUTO, // Phaser will use WebGL if available, if not it will use Canvas
  width: 640,
  height: 360,
  scene: gameScene
};

// create a new game, pass the configuration
let game = new Phaser.Game(config);
