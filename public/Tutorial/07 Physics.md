# Physics

In a game, lots of game objects simulates the objects in real world which has physics involved. Physics is like objects fall, projectile, acceleration, friction, explode, ...

[Game physics](https://en.wikipedia.org/wiki/Game_physics) is provided by phaser game engine.

A physics engine defines gravity, angular velocity, drag, acceleration, etc.

There are three physics engines in Phaser ready to use, arcade, impact and matter.js.

[physics source code](https://github.com/photonstorm/phaser/blob/v3.16.2/src/physics/arcade/index.js)

Difference between event, update method and physics

Any game objects not enabled by physics can still be controlled in events, update method.

## Body

[body source code](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Body.html)

## world

The game has a `physics.world`, the world is responsible for creating, managing, colliding and updating all of the objects within it.

In order for physics systems to work, it needs to have objects inside of the physics "world" that can collide against each other. These objects are termed "bodies." A body is something that has a certain shape like a box, circle, or complex shape made up of points and lines and exists in the world. These bodies are not visual elements and are only used by the physics system to calculate things like change in position and collisions. Since they are not visible objects, they are often associated with a visible element that will reflect the position and rotation of the physics body in a visible way on screen.

By default, Phaser sprites do not have bodies associated with them. The bodies need to be activated for the physics system you will be using. Once activated, the sprites will be controlled by the body in the physics system.

By default, Phaser sprites do not have bodies associated with them. The bodies need to be activated for the physics system you will be using.

Inside the world, there lives lots of sprites, game objects or grouped items on the scene. The world has a bounds, gravity for the sprites with body enabled.

By default, the world's fps (frame rate per second) is set to 60 which defines physics steps to be taken per second.

They have physics body which can be Dynamic or Static.

A dynamic body can move via velocity and acceleration.

A static body remains fixed in place and as such is able to use an optimized search tree, making it ideal for static elements such as level objects. You can still collide and overlap with static bodies.

## How to use physics in phaser

First, config the game config.

```js
var config = {
  // ...
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 100,
      },
      debug: true,
    },
  },
  // ...
};
```

Then, setup the physics in create method. Use [Factory](https://github.com/photonstorm/phaser/blob/v3.16.2/src/physics/arcade/Factory.js) to create the physics.

The Arcade Physics Factory allows you to easily create physics enabled game objects via this.physics.add.

- image
- sprite
- collider
- overlap
- existing
- staticGroup

Those game objects will has all the properties and methods of

- [arcade components](https://github.com/photonstorm/phaser/blob/v3.16.2/src/physics/arcade/components/index.js).

  - Acceleration
  - Angular
  - Bounce
  - Drag
  - Enable
  - Friction
  - Gravity
  - Immovable
  - Mass
  - Size
  - Velocity

- [game objects components](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Components.html)
  - Alpha
  - Animation
  - BlendMode
  - Crop
  - Depth
  - Flip
  - GetBounds

## Arcade

Arcade is a custom physics engine used in Phaser. The only body types it supports are axis-aligned rectangles (i.e. rectangles with no rotation) and circles. This makes its collision quite rudimentary, but quite fast.

[Arcade source code](https://github.com/photonstorm/phaser/tree/v3.16.2/src/physics/arcade)

An Arcade Physics Sprite is a Sprite with an Arcade Physics body and related components. The body can be dynamic or static.

The main difference between an Arcade Sprite and an Arcade Image is that you cannot animate an Arcade Image. If you do not require animation then you can safely use Arcade Images instead of Arcade Sprites.

### enable a sprite

### overlap

```js
game.physics.arcade.overlap(catcher, cat, catHitHandler);

function catHitHandler(catcherObject, catObject) {
  catObject.x = Math.random() * game.width;
  catObject.y = Math.random() * game.height;
  score++;
  txtScore.setText(score.toString());
}
```

### collide

[collide](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Events.html#event:COLLIDE)

A Collider is a way to automatically perform collision checks between two objects, calling the collide and process callbacks if they occur.

## Impact

[Impact source code](https://github.com/photonstorm/phaser/tree/v3.16.2/src/physics/impact)

Impact is the physics engine used by the Impact game engine. I've got the least experience with Impact, but the examples for it should show you what it can do. One of its advantages over Arcade is the ability to have slopes in tilemaps, but it looks like it only supports Weltmeister maps (that's Impact's map editor), not Tiled or any other standard format.

## Matter.js

Matter.js is very powerful but not suitable for some types of games. It's for more realistic collision or more complex body shapes which has more features and more flexibility necessitate more complicated logic. It was not intended for games as it obviously makes the engine slower.

## Particle systems

[Particle systems](https://en.wikipedia.org/wiki/Particle_system)
