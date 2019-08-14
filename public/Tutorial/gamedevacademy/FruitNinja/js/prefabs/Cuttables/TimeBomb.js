var FruitNinja = FruitNinja || {};

FruitNinja.TimeBomb = function (game_state, name, position, properties) {
    "use strict";
    FruitNinja.Cuttable.call(this, game_state, name, position, properties);
    
    this.body.setSize(20, 20);
};

FruitNinja.TimeBomb.prototype = Object.create(FruitNinja.Cuttable.prototype);
FruitNinja.TimeBomb.prototype.constructor = FruitNinja.TimeBomb;

FruitNinja.TimeBomb.prototype.cut = function () {
    "use strict";
    FruitNinja.Cuttable.prototype.cut.call(this);
    // if a time bomb is cut, decrease the remaining time by 5 seconds
    this.game_state.remaining_time -= Phaser.Timer.SECOND * 5;
    this.kill();
};