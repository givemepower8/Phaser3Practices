var FruitNinja = FruitNinja || {};

FruitNinja.Clock = function (game_state, name, position, properties) {
    "use strict";
    FruitNinja.Cuttable.call(this, game_state, name, position, properties);
    
    this.body.setSize(20, 20);
};

FruitNinja.Clock.prototype = Object.create(FruitNinja.Cuttable.prototype);
FruitNinja.Clock.prototype.constructor = FruitNinja.Clock;

FruitNinja.Clock.prototype.cut = function () {
    "use strict";
    FruitNinja.Cuttable.prototype.cut.call(this);
    // if a time bomb is cut, increase the remaining time by 3 seconds
    this.game_state.remaining_time += Phaser.Timer.SECOND * 3;
    this.kill();
};