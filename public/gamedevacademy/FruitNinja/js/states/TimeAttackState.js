var FruitNinja = FruitNinja || {};

FruitNinja.TimeAttackState = function () {
    "use strict";
    FruitNinja.LevelState.call(this);
    
    this.prefab_classes = {
        "fruit_spawner": FruitNinja.FruitSpawner.prototype.constructor,
        "time_bomb_spawner": FruitNinja.TimeBombSpawner.prototype.constructor,
        "clock_spawner": FruitNinja.ClockSpawner.prototype.constructor,
        "special_fruit_spawner": FruitNinja.SpecialFruitSpawner.prototype.constructor,
        "background": FruitNinja.Prefab.prototype.constructor
    };
};

FruitNinja.TimeAttackState.prototype = Object.create(FruitNinja.LevelState.prototype);
FruitNinja.TimeAttackState.prototype.constructor = FruitNinja.TimeAttackState;

FruitNinja.TimeAttackState.prototype.init = function (level_data) {
    "use strict";
    FruitNinja.LevelState.prototype.init.call(this, level_data);
    
    this.remaining_time = Phaser.Timer.SECOND * 60;
    
    this.highest_score = "time_attack_score";
};

FruitNinja.TimeAttackState.prototype.update = function () {
    "use strict";
    if (this.remaining_time > 0) {
        this.remaining_time -= this.game.time.elapsed;
        if (this.remaining_time <= 0) {
            this.game_over();
            this.remaining_time = 0;
        }
    }
};

FruitNinja.TimeAttackState.prototype.init_hud = function () {
    "use strict";
    FruitNinja.LevelState.prototype.init_hud.call(this);
    var remaining_time_position, remaining_time_style, remaining_time;
    // show remaining time
    remaining_time_position = new Phaser.Point(0.5 * this.game.world.width, 20);
    remaining_time_style = {font: "48px Shojumaru", fill: "#fff"};
    remaining_time = new FruitNinja.RemainingTime(this, "remaining_time", remaining_time_position, {text: "Remaining time: ", style: remaining_time_style, group: "hud"});
};
