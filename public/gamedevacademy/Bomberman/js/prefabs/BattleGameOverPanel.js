var Bomberman = Bomberman || {};

Bomberman.BattleGameOverPanel = function (game_state, name, position, properties) {
    "use strict";
    var movement_animation;
    Bomberman.GameOverPanel.call(this, game_state, name, position, properties);
    
    this.winner = properties.winner;
};

Bomberman.BattleGameOverPanel.prototype = Object.create(Bomberman.GameOverPanel.prototype);
Bomberman.BattleGameOverPanel.prototype.constructor = Bomberman.BattleGameOverPanel;

Bomberman.BattleGameOverPanel.prototype.show_game_over = function () {
    "use strict";
    var winner_text;
    Bomberman.GameOverPanel.prototype.show_game_over.call(this);
    
    // show the winner if it's in battle mode
    winner_text = this.game_state.game.add.text(this.game_state.world.width / 2, this.game_state.game.world.height * 0.6, "Winner: " + this.winner, this.text_style.winner);
    winner_text.anchor.setTo(0.5);
    this.game_state.groups.hud.add(winner_text);
};