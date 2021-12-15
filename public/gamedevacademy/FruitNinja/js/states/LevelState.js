var FruitNinja = FruitNinja || {};

FruitNinja.LevelState = function () {
    "use strict";
    FruitNinja.JSONLevelState.call(this);
    
    this.prefab_classes = {
        
    };
};

FruitNinja.LevelState.prototype = Object.create(FruitNinja.JSONLevelState.prototype);
FruitNinja.LevelState.prototype.constructor = FruitNinja.LevelState;

FruitNinja.LevelState.prototype.init = function (level_data) {
    "use strict";
    FruitNinja.JSONLevelState.prototype.init.call(this, level_data);
    // start physics system
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 1000;
    
    this.MINIMUM_SWIPE_LENGTH = 50;
    
    this.score = 0;
};

FruitNinja.LevelState.prototype.create = function () {
    "use strict";
    FruitNinja.JSONLevelState.prototype.create.call(this);
    
    // add events to check for swipe
    this.game.input.onDown.add(this.start_swipe, this);
    this.game.input.onUp.add(this.end_swipe, this);
    
    this.init_hud();
};

FruitNinja.LevelState.prototype.start_swipe = function (pointer) {
    "use strict";
    this.start_swipe_point = new Phaser.Point(pointer.x, pointer.y);
};

FruitNinja.LevelState.prototype.end_swipe = function (pointer) {
    "use strict";
    var swipe_length, cut_style, cut;
    this.end_swipe_point = new Phaser.Point(pointer.x, pointer.y);
    swipe_length = Phaser.Point.distance(this.end_swipe_point, this.start_swipe_point);
    // if the swipe length is greater than the minimum, a swipe is detected
    if (swipe_length >= this.MINIMUM_SWIPE_LENGTH) {
        // create a new line as the swipe and check for collisions
        cut_style = {line_width: 5, color: 0xE82C0C, alpha: 1};
        cut = new FruitNinja.Cut(this, "cut", {x: 0, y: 0}, {group: "cuts", start: this.start_swipe_point, end: this.end_swipe_point, duration: 0.3, style: cut_style});
        this.swipe = new Phaser.Line(this.start_swipe_point.x, this.start_swipe_point.y, this.end_swipe_point.x, this.end_swipe_point.y);
        this.groups.fruits.forEachAlive(this.check_collision, this);
        this.groups.bombs.forEachAlive(this.check_collision, this);
        this.groups.special_fruits.forEachAlive(this.check_collision, this);
        this.groups.time_bombs.forEachAlive(this.check_collision, this);
        this.groups.clocks.forEachAlive(this.check_collision, this);
    }
};

FruitNinja.LevelState.prototype.check_collision = function (object) {
    "use strict";
    var object_rectangle, line1, line2, line3, line4, intersection;
    // create a rectangle for the object body
    object_rectangle = new Phaser.Rectangle(object.body.x, object.body.y, object.body.width, object.body.height);
    // check for intersections with each rectangle edge
    line1 = new Phaser.Line(object_rectangle.left, object_rectangle.bottom, object_rectangle.left, object_rectangle.top);
    line2 = new Phaser.Line(object_rectangle.left, object_rectangle.top, object_rectangle.right, object_rectangle.top);
    line3 = new Phaser.Line(object_rectangle.right, object_rectangle.top, object_rectangle.right, object_rectangle.bottom);
    line4 = new Phaser.Line(object_rectangle.right, object_rectangle.bottom, object_rectangle.left, object_rectangle.bottom);
    intersection = this.swipe.intersects(line1) || this.swipe.intersects(line2) || this.swipe.intersects(line3) || this.swipe.intersects(line4);
    if (intersection) {
        // if an intersection is found, cut the object
        object.cut();
    }
};

FruitNinja.LevelState.prototype.init_hud = function () {
    "use strict";
    var score_position, score_style, score;
    // create score prefab
    score_position = new Phaser.Point(20, 20);
    score_style = {font: "48px Shojumaru", fill: "#fff"};
    score = new FruitNinja.Score(this, "score", score_position, {text: "Fruits: ", style: score_style, group: "hud"});
};

FruitNinja.LevelState.prototype.game_over = function () {
    "use strict";
    var game_over_panel, game_over_position, game_over_bitmap, panel_text_style;
    // if current score is higher than highest score, update it
    if (!localStorage[this.highest_score] || this.score > localStorage[this.highest_score]) {
        localStorage[this.highest_score] = this.score;
    }
    
    // create a bitmap do show the game over panel
    game_over_position = new Phaser.Point(0, this.game.world.height);
    game_over_bitmap = this.add.bitmapData(this.game.world.width, this.game.world.height);
    game_over_bitmap.ctx.fillStyle = "#000";
    game_over_bitmap.ctx.fillRect(0, 0, this.game.world.width, this.game.world.height);
    panel_text_style = {game_over: {font: "32px Shojumaru", fill: "#FFF"},
                       current_score: {font: "20px Shojumaru", fill: "#FFF"},
                       highest_score: {font: "18px Shojumaru", fill: "#FFF"}};
    // create the game over panel
    game_over_panel = new FruitNinja.GameOverPanel(this, "game_over_panel", game_over_position, {texture: game_over_bitmap, group: "hud", text_style: panel_text_style, animation_time: 500});
    this.groups.hud.add(game_over_panel);
};

FruitNinja.LevelState.prototype.restart_level = function () {
    "use strict";
    this.game.state.restart(true, false, this.level_data);
};
