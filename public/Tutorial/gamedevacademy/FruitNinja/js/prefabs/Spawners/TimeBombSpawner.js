var FruitNinja = FruitNinja || {};

FruitNinja.TimeBombSpawner = function (game_state, name, position, properties) {
    "use strict";
    FruitNinja.Spawner.call(this, game_state, name, position, properties);
};

FruitNinja.TimeBombSpawner.prototype = Object.create(FruitNinja.Spawner.prototype);
FruitNinja.TimeBombSpawner.prototype.constructor = FruitNinja.TimeBombSpawner;

FruitNinja.TimeBombSpawner.prototype.create_object = function (name, position, velocity) {
    "use strict";
    // return new time bomb
    return new FruitNinja.TimeBomb(this.game_state, name, position, {texture: "time_bomb_image", group: "time_bombs", velocity: velocity});
};