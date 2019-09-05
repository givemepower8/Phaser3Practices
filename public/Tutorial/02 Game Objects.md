# Game objects

One game object lives on one scene at one time.

It controls the state, display and visibility, data, events, interaction / input. It's part of the update cycle on the scene.

Technically, a game object is a base class which encapsulates many reusable properties, methods and events. Sprite extends GameObject with more animation and other features.

<https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.GameObject.html>

[GameObject source code](https://github.com/photonstorm/phaser/blob/v3.18.0/src/gameobjects/GameObject.js)

[How Game Objects Work](https://phaser.io/phaser3/contributing/part6)

## Common game object properties

Phaser.GameObjects.Components

Active

`setActive(true)` and `setActive(true)` to set active property.

A Game Object with its active property set to true will be updated by the Scenes UpdateList.

Position

```js
// get
var x = gameObject.x;
var y = gameObject.y;
// set
gameObject.x = 0;
gameObject.y = 0;
gameObject.setPosition(x, y);
gameObject.setX(x);
gameObject.setY(y);

gameObject.setRandomPosition(x, y, width, height);
// gameObject.setRandomPosition(); // x=0, y=0, width=game.width, height=game.height
```

Angle

```js
// get
var angle = gameObject.angle;
var radians = gameObject.rotation; // angle in radians

// set
gameObject.angle = degrees;
gameObject.rotation = radians;
gameObject.setAngle(degrees);
gameObject.setRotation(radians);
```

Visible

```js
// get
var visible = gameObject.visible; // visible: true/false

// set
gameObject.visible = visible;
gameObject.setVisible(visible);
```

Alpha

```js
```

## life cycle

### Create the game object

GameObjects extends Phaser.Events.EventEmitter

### add shortcut method and Game Object Factory

Creating an game object and register it on the scene requires some work.

<https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.GameObjectFactory.html>

The Game Object Factory is a Scene plugin that allows you to quickly create many common types of Game Objects and have them automatically registered with the Scene. Game Objects directly register themselves with the Factory and inject their own creation methods into the class.

### make shortcut method and game object creator

<https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.GameObjectCreator.html>

### update

Once the game object is on the scene, its update method will be added into:

- the scene's display list until its visible property is set to false `setVisible(false)`.
- the scene's update list until its active property is set to false `setActive(false)`.

### destroy the game object

Game object will be destroyed automatically when scene destroyed, if it is in display list, or update list.

Or you can manually destroy the game object use the `destroy(fromScene)` method.

`fromScene` is optional boolean type, default is false, is this Game Object being destroyed as the result of a Scene shutdown

Destroys this Game Object removing it from the Display List and Update List and severing all ties to parent resources.

Also removes itself from the Input Manager and Physics Manager if previously enabled.

Use this to remove a Game Object from your game if you don't ever plan to use it again.

As long as no reference to it exists within your own code it should become free for garbage collection by the browser.

destroy() is computationally expensive, if you just want to temporarily disable an object then look at using the Game Object Pool instead of destroying it, as destroyed objects cannot be resurrected. use `setActive(false)` and `setVisible(false)`

```js
const sprite = this.physics.add.sprite(x, y, 'theSprite');

// Turn on wall collision checking for your sprite
sprite.setCollideWorldBounds(true);

// Turning this on will allow you to listen to the 'worldbounds' event
sprite.body.onWorldBounds = true;

// 'worldbounds' event listener
sprite.body.world.on(
  'worldbounds',
  function(body) {
    // Check if the body's game object is the sprite you are listening for
    if (body.gameObject === this) {
      // Stop physics and render updates for this object
      this.setActive(false);
      this.setVisible(false);
    }
  },
  sprite
);
```

## State

For example, a Game Object could change from a state of 'moving', to 'attacking', to 'dead'.

The state value should typically be an integer (ideally mapped to a constant in your game code), but could also be a string. It is recommended to keep it light and simple.

If you need to store complex data about your Game Object, look at using the Data Component instead.

state is the getter and setState(value) is the setter.

## Debugging

all game object has toJSON method.

## game object events

addListener

## Containership

## Group

```js
function create() {
  var group = this.add.group();

  var image1 = this.add.image(0, 0, 'img1');

  group.add(image1);

  var image2 = this.add.image(0, 100, 'img2');

  group.add(image2);

  Phaser.Actions.SetXY(group.getChildren(), 400, 300);
}
```
