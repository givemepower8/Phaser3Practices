# Game

Game if for fun.

## HTML5 game engine

<http://html5gameengine.com>

### assets

## State

start

game over

end

## level

scenes

background

## graphics

[Canvas Drawing shapes](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)
[Graphics Doc](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Graphics.html)

## sprite

player

NPCs

overlap / collide

## physics

```js
game.physics.arcade.overlap(catcher, cat, catHitHandler);

function catHitHandler(catcherObject, catObject) {
  catObject.x = Math.random() * game.width;
  catObject.y = Math.random() * game.height;
  score++;
  txtScore.setText(score.toString());
}
```

### animations
