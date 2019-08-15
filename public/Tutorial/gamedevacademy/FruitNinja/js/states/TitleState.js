var FruitNinja = FruitNinja || {};

FruitNinja.TitleState = function () {
    "use strict";
    FruitNinja.JSONLevelState.call(this);
    
    this.prefab_classes = {
        "start_game_item": FruitNinja.StartGameItem.prototype.constructor,
        "background": FruitNinja.Prefab.prototype.constructor
    };
};

FruitNinja.TitleState.prototype = Object.create(FruitNinja.JSONLevelState.prototype);
FruitNinja.TitleState.prototype.constructor = FruitNinja.TitleState;

FruitNinja.TitleState.prototype.create = function () {
    "use strict";
    var title_position, title_style, title, menu_position, menu_items, menu_properties, menu;
    FruitNinja.JSONLevelState.prototype.create.call(this);
    
    // adding title
    title_position = new Phaser.Point(0.5 * this.game.world.width, 0.3 * this.game.world.height);
    title_style = {font: "72px Shojumaru", fill: "#FFF"};
    title = new FruitNinja.TextPrefab(this, "title", title_position, {text: "Fruit Ninja", style: title_style, group: "hud"});
    title.anchor.setTo(0.5);
    
    // adding menu
    menu_position = new Phaser.Point(0, 0);
    menu_items = [];
    this.groups.menu_items.forEach(function (menu_item) {
        menu_items.push(menu_item);
    }, this);
    menu_properties = {texture: "", group: "background", menu_items: menu_items};
    menu = new FruitNinja.Menu(this, "menu", menu_position, menu_properties);
};