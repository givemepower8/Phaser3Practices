import Boot from "./states/Boot.js";
import Preload from "./states/Preload.js";
import Game from "./states/Game.js";

var game;
//window.onload = function () {
 
  game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');
  game.scene.add('boot', new Boot());
  game.scene.add('preload', new Preload());
  game.scene.add('game', new Game());
  game.scene.start('boot');
//};

window.game = new Game();