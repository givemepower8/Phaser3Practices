var Bomberman = Bomberman || {};

Bomberman.TitleState = function () {
    "use strict";
    Phaser.State.call(this);
};

Bomberman.TitleState.prototype = Object.create(Phaser.State.prototype);
Bomberman.TitleState.prototype.constructor = Bomberman.TitleState;

Bomberman.TitleState.prototype.init = function (level_data) {
    "use strict";
    this.level_data = level_data;
    
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
};

Bomberman.TitleState.prototype.create = function () {
    "use strict";
    var title_position, title_style, title, menu_position, menu_items, menu_properties, menu_item_name, menu_item, menu;
    
    // create groups
    this.groups = {};
    this.level_data.groups.forEach(function (group_name) {
        this.groups[group_name] = this.game.add.group();
    }, this);
    
    this.prefabs = {};
    
    // adding title
    title_position = new Phaser.Point(0.5 * this.game.world.width, 0.3 * this.game.world.height);
    title_style = {font: "36px Arial", fill: "#FFF"};
    title = new Bomberman.TextPrefab(this, "title", title_position, {text: "Bomberman", style: title_style, group: "hud"});
    title.anchor.setTo(0.5);
    
    // adding menu
    menu_position = new Phaser.Point(0, 0);
    menu_items = [];
    for (menu_item_name in this.level_data.menu_items) {
        if (this.level_data.menu_items.hasOwnProperty(menu_item_name)) {
            menu_item = this.level_data.menu_items[menu_item_name];
            menu_items.push(new Bomberman.MenuItem(this, menu_item_name, menu_item.position, menu_item.properties));
        }
    }
    menu_properties = {texture: "", group: "background", menu_items: menu_items};
    menu = new Bomberman.Menu(this, "menu", menu_position, menu_properties);
};