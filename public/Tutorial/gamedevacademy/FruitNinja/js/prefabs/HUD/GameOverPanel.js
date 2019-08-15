var FruitNinja = FruitNinja || {};

FruitNinja.GameOverPanel = function (game_state, name, position, properties) {
    "use strict";
    var movement_animation;
    FruitNinja.Prefab.call(this, game_state, name, position, properties);
    
    this.text_style = properties.text_style;
    
    this.alpha = 0.5;
    // create a tween animation to show the game over panel
    movement_animation = this.game_state.game.add.tween(this);
    movement_animation.to({y: 0}, properties.animation_time);
    movement_animation.onComplete.add(this.show_game_over, this);
    movement_animation.start();
};

FruitNinja.GameOverPanel.prototype = Object.create(FruitNinja.Prefab.prototype);
FruitNinja.GameOverPanel.prototype.constructor = FruitNinja.GameOverPanel;

FruitNinja.GameOverPanel.prototype.show_game_over = function () {
    "use strict";
    var game_over_text, current_score_text, highest_score_text;
    // add game over text
    game_over_text = this.game_state.game.add.text(this.game_state.game.world.width / 2, this.game_state.game.world.height * 0.4, "Game Over", this.text_style.game_over);
    game_over_text.anchor.setTo(0.5);
    this.game_state.groups.hud.add(game_over_text);
    
    // add current score text
    current_score_text = this.game_state.game.add.text(this.game_state.game.world.width / 2, this.game_state.game.world.height * 0.5, "Score: " + this.game_state.score, this.text_style.current_score);
    current_score_text.anchor.setTo(0.5);
    this.game_state.groups.hud.add(current_score_text);
    
    // add highest score text
    highest_score_text = this.game_state.game.add.text(this.game_state.game.world.width / 2, this.game_state.game.world.height * 0.6, "Highest score: " + localStorage[this.game_state.highest_score], this.text_style.highest_score);
    highest_score_text.anchor.setTo(0.5);
    this.game_state.groups.hud.add(highest_score_text);
    
    // add event to restart level
    this.inputEnabled = true;
    this.events.onInputDown.add(this.game_state.restart_level, this.game_state);
};