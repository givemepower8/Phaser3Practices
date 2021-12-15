var Bomberman = Bomberman || {};

var game = new Phaser.Game(240, 240, Phaser.CANVAS);
game.state.add("BootState", new Bomberman.BootState());
game.state.add("LoadingState", new Bomberman.LoadingState());
game.state.add("TitleState", new Bomberman.TitleState());
game.state.add("ClassicState", new Bomberman.ClassicState());
game.state.add("BattleState", new Bomberman.BattleState());
game.state.start("BootState", true, false, "assets/levels/title_screen.json", "TitleState");