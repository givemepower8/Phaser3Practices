# Game

Game is for bring fun to the players.

## Goal

The game goal is for the player to achieve. Some common goals can be:

- RPG game to develop and complete storyline
- defeat enemies and bosses
- some parkour negotiating obstacles by running, jumping
- puzzle solving for some brain challenges

## Stage

This is where the game storyline unfolds.

There will some background, music.

Often there are some obstructions for play to destroy.

## State

start

level up

game over

end

## assets

### images

scenes

### graphics

- [Canvas Drawing shapes](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)
- [Graphics Doc](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Graphics.html)

### animations and effects

### sprite

player

NPCs

## physics

overlap / collide

```js
game.physics.arcade.overlap(catcher, cat, catHitHandler);

function catHitHandler(catcherObject, catObject) {
  catObject.x = Math.random() * game.width;
  catObject.y = Math.random() * game.height;
  score++;
  txtScore.setText(score.toString());
}
```

## Game engine

[HTML5 game engine](http://html5gameengine.com)
