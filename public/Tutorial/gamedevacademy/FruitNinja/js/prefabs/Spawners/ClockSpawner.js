var FruitNinja = FruitNinja || {};

FruitNinja.ClockSpawner = function (game_state, name, position, properties) {
    "use strict";
    FruitNinja.Spawner.call(this, game_state, name, position, properties);
};

FruitNinja.ClockSpawner.prototype = Object.create(FruitNinja.Spawner.prototype);
FruitNinja.ClockSpawner.prototype.constructor = FruitNinja.ClockSpawner;

FruitNinja.ClockSpawner.prototype.create_object = function (name, position, velocity) {
    "use strict";
    // return new time bomb
    console.log("spawning clock");
    return new FruitNinja.Clock(this.game_state, name, position, {texture: "clock_image", group: "clocks", velocity: velocity});
};