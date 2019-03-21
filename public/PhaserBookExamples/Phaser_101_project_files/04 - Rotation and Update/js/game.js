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
  this.player = this.add.sprite(70, 180, 'player');

  // we are reducing the width and height by 50%
  this.player.setScale(0.5);

  // create an enemy
  this.enemy1 = this.add.sprite(250, 180, 'enemy');
  this.enemy1.setScale(3);

  //this.enemy1.angle = 45;
  //this.enemy1.setAngle(45);

  //this.enemy1.setOrigin(0, 0);
  this.enemy1.rotation = Math.PI / 4;
  this.enemy1.setRotation(Math.PI / 4);

  console.log(this.enemy1);

};

// this is called up to 60 times per second
gameScene.update = function(){
  //this.enemy1.x += 1;

  this.enemy1.angle += 1;

  // check if we've reached scale of 2
  if(this.player.scaleX < 2) {
    // make the player grow
    this.player.scaleX += 0.01;
    this.player.scaleY += 0.01;
  }

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
