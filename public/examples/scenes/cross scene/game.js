var Game = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function Game() {
    console.log('game');
    Phaser.Scene.call(this, { key: 'game' });
  },
  preload: function() {
    console.log('game preload');
  },
  create: function() {
    console.log('game create');
  }
});
