var FruitNinja = FruitNinja || {};

var game = new Phaser.Game("100%", "100%", Phaser.CANVAS);
game.state.add("BootState", new FruitNinja.BootState());
game.state.add("LoadingState", new FruitNinja.LoadingState());
game.state.add("TitleState", new FruitNinja.TitleState());
game.state.add("ClassicState", new FruitNinja.ClassicState());
game.state.add("TimeAttackState", new FruitNinja.TimeAttackState());
game.state.start("BootState", true, false, "assets/levels/title_screen.json", "TitleState");