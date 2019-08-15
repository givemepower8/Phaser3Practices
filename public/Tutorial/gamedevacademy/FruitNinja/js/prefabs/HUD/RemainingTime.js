var FruitNinja = FruitNinja || {};

FruitNinja.RemainingTime = function (game_state, name, position, properties) {
    "use strict";
    FruitNinja.TextPrefab.call(this, game_state, name, position, properties);
};

FruitNinja.RemainingTime.prototype = Object.create(FruitNinja.TextPrefab.prototype);
FruitNinja.RemainingTime.prototype.constructor = FruitNinja.RemainingTime;

FruitNinja.RemainingTime.prototype.update = function () {
    "use strict";
    // update the text to show the remaining time in seconds
    this.text = "Remaining time: " + this.game_state.remaining_time / Phaser.Timer.SECOND;
};