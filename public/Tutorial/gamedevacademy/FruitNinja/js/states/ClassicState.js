var FruitNinja = FruitNinja || {};

FruitNinja.ClassicState = function () {
    "use strict";
    FruitNinja.LevelState.call(this);
    
    this.prefab_classes = {
        "fruit_spawner": FruitNinja.FruitSpawner.prototype.constructor,
        "bomb_spawner": FruitNinja.BombSpawner.prototype.constructor,
        "special_fruit_spawner": FruitNinja.SpecialFruitSpawner.prototype.constructor,
        "background": FruitNinja.Prefab.prototype.constructor
    };
};

FruitNinja.ClassicState.prototype = Object.create(FruitNinja.LevelState.prototype);
FruitNinja.ClassicState.prototype.constructor = FruitNinja.ClassicState;

FruitNinja.ClassicState.prototype.init = function (level_data) {
    "use strict";
    FruitNinja.LevelState.prototype.init.call(this, level_data);
    
    this.lives = 3;
    
    this.highest_score = "classic_score";
};

FruitNinja.ClassicState.prototype.init_hud = function () {
    "use strict";
    FruitNinja.LevelState.prototype.init_hud.call(this);
    var lives_position, lives;
    // create lives prefab
    lives_position = new Phaser.Point(0.75 * this.game.world.width, 20);
    lives = new FruitNinja.Lives(this, "lives", lives_position, {texture: "sword_image", group: "hud", "lives": 3, "lives_spacing": 50});
};
