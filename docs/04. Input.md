# phaser game interaction

In game setup, the background, music, scenes got setup. But in most games, play interact some actionable game objects.

## Camera

If the game world is now bigger than the window looking into it, there needs to be some way for Phaser to know from what position of the world it should currently be rendering objects. This object is called a camera. Phasers camera has x and y positions in world space that can be moved manually to look about the graphics in the world.

## User Input

### keyboard

```js
var cursors = game.input.keyboard.createCursorKeys();

if(cursors.left.isDown) {
    catcher.x – = 5;
}

if(cursors.right.isDown) {
    catcher.x += 5;
}

if(cursors.up.isDown) {
    catcher.y – = 5;
}

if(cursors.down.isDown) {
    catcher.y += 5;
}
```

```js
if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
  //acceleration, fire bullets, anything else that needs a constant press
}
```

### mouse
