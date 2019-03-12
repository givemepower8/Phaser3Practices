var Preloader = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function Preloader() {
    console.log('preloader');
    Phaser.Scene.call(this, { key: 'preloader' });
  },

  preload: function() {
    console.log('preloader preload');
  },

  create: function() {
    console.log('preloader create');
  }
});
