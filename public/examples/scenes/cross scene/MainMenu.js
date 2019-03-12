var MainMenu = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function MainMenu() {
    console.log('mainmenu');
    Phaser.Scene.call(this, { key: 'mainmenu' });
  },
  preload: function() {
    console.log('mainmenu preload');
  },
  create: function() {
    console.log('mainmenu create');
  }
});
