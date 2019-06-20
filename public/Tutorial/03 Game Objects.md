# Game objects

The Game Object Factory is a Scene plugin that allows you to quickly create many common types of Game Objects and have them automatically registered with the Scene. Game Objects directly register themselves with the Factory and inject their own creation methods into the class.

Technically, game object is a base class which encapsulates many re

## Game Object Factory

## Sprite

On the scene, there are the character or object controlled by player which interact with many other game objects.

Sprite can have physics or just a static object.

## Sprite Class

## Static sprite

in scene create()
`this.make.sprite(config1);`

## Dynamic sprite

`player = this.physics.add.sprite(100, 450, "dude");`

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

## Phaser.Actions

By default, all the objects on the screen are static. Phaser Actions methods are useful shortcut methods to make object or group of objects move or act, for example, move on circle, move by coordinate, or along the line, path, rotate, align, ...

Also, it does some utility methods like SetAlpha, ...

It works well with group and its children.

- Phaser.Actions.GridAlign
- Phaser.Actions.IncX

## Geom

Actions often work with Geometry.

`var line = new Phaser.Geom.Line(200, 200, 500, 400);`

`var circle = new Phaser.Geom.Circle(400, 300, 230);`

`var ellipse = new Phaser.Geom.Ellipse(400, 300, 100, 200);`

`var triangle = new Phaser.Geom.Triangle.BuildRight(200, 400, 300, 200);`

## data

Each game object has it's own data stored with the instance.

After `gameObject.setDataEnabled();` the gameObject instance has the setter and getter by key, setdata and changedata events. setdata is triggered for the initial setter and changedata is triggered for the subsequent setter.

```js
function create() {
  var text = this.add.text(350, 250, '', {
    font: '16px Courier',
    fill: '#00ff00'
  });

  var gem = this.add.image(300, 300, 'gem');

  //  Store some data about this Gem:

  gem.setDataEnabled();

  gem.data.set('name', 'Red Gem Stone');
  gem.data.set('level', 2);
  gem.data.set('owner', 'Link');

  //  Whenever the 'gold' property is updated we call this function BEFORE the value changes:
  gem.on('changedata', function(gameObject, key, value, resetValue) {
    if (key === 'gold' && value > 500) {
      //  Calling this will set the value to be 500 and never get as far as the `setdata` event
      resetValue(500);
    }
  });

  //  Whenever the 'gold' property is updated we call this function AFTER the change has happened:
  gem.on('setdata', function(gameObject, key, value) {
    text.setText([
      'Name: ' + gem.data.get('name'),
      'Level: ' + gem.data.get('level'),
      'Value: ' + gem.data.get('gold') + ' gold',
      'Owner: ' + gem.data.get('owner')
    ]);
  });

  //  Set the value, this will call the 'after' callback
  gem.data.set('gold', 50);

  //  Change the 'value' property when the mouse is clicked

  this.input.on('pointerdown', function() {
    var gold = gem.data.get('gold');

    //  Set the value, this will call the 'after' callback
    gem.data.set('gold', gold + 100);
  });
}
```

## Resources

[game object source code](https://github.com/photonstorm/phaser/tree/v3.17.0/src/gameobjects)

## Data manager

<https://rexrainbow.github.io/phaser3-rex-notes/docs/site/datamanager/>