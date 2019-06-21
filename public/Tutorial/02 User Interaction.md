# phaser game interaction

In game setup, the background, music, scenes got setup and ready to interact with user input.

In most games, player interact with game objects by input like keyboard or mouse.

<https://rexrainbow.github.io/phaser3-rex-notes/docs/site/input/>

For example, a normal RPG game, player use up, down, left, down keys to control the character move around. Use space and other keys to do some actions like jump, hit.

## keyboard

For key pressing, you can monitor all the key pressings by the KeyboardEvent.

```js
function create() {
  //  Receives every single key down event, regardless of origin or key

  this.input.keyboard.on('keydown', function(event) {
    console.log(event);
  });
}
```

key up or key down

If you press the key for a while, it triggers multiple `keydown` event but only one `keyup` event.

To make the game more robust, use the built-in properties.

```js
var cursors;

function create() {
  cursors = game.input.keyboard.createCursorKeys();
}

function update() {
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
}

```

or in the update, you observe certain key press

```js
if (game.input.keyboard.isDown(Phaser.Input.Keyboard.KeyCodes.LEFT)) {
  //acceleration, fire bullets, anything else that needs a constant press
}
```

In Chrome console, type in the following: `Phaser.Input.Keyboard.KeyCodes`

`Phaser.Input.Keyboard.KeyCodes.Q`

## mouse

## Camera

If the game world is now bigger than the window looking into it, there needs to be some way for Phaser to know from what position of the world it should currently be rendering objects. This object is called a camera. Phasers camera has x and y positions in world space that can be moved manually to look about the graphics in the world.
