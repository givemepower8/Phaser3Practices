# Game objects

One game object lives on one scene at one time.

Technically, game object is a base class which encapsulates many reusable properties, methods and events.

<https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.GameObject.html>

[GameObject source code](https://github.com/photonstorm/phaser/blob/v3.18.0/src/gameobjects/GameObject.js)

[How Game Objects Work](https://phaser.io/phaser3/contributing/part6)

## Common game object properties

Phaser.GameObjects.Components

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

### Game Object Factory and add shortcut method

Creating an game object and register it on the scene requires some work.

<https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.GameObjectCreator.html>

The Game Object Factory is a Scene plugin that allows you to quickly create many common types of Game Objects and have them automatically registered with the Scene. Game Objects directly register themselves with the Factory and inject their own creation methods into the class.

### destroy the game object

destroy(fromScene)

`fromScene` is optional boolean type, default is false, is this Game Object being destroyed as the result of a Scene shutdown

Destroys this Game Object removing it from the Display List and Update List and severing all ties to parent resources.

Also removes itself from the Input Manager and Physics Manager if previously enabled.

Use this to remove a Game Object from your game if you don't ever plan to use it again.

As long as no reference to it exists within your own code it should become free for garbage collection by the browser.

If you just want to temporarily disable an object then look at using the Game Object Pool instead of destroying it, as destroyed objects cannot be resurrected.

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

make and game object creator
<https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.GameObjectCreator.html>
