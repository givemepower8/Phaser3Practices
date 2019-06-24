# Phaser object oriented

## Phaser Class

Phaser.Class is the base class to extend functionalities on reuseable code.

You can use the `extends` keyword to extend the existing classes like scene, game object, sprite, etc.,.

## extend Scene

```js
class Demo extends Phaser.Scene {
  constructor() {
    super({
      key: 'examples'
    });
  }

  preload() {}

  create() {}

  update() {}
}
```

## extend game object

## extend sprite
