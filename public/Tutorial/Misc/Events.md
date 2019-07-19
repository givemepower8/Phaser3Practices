# phaser events

Events is used for handling further property changes like user clicked a button, or one game object's health reached at a certain stage, ...

## EventEmitter

Event is a publisher subscriber design pattern. Event takes handler which is an action has a fixed signature, the publisher emits the property changes and subscribers observes the changes and acts accordingly.

For example, you are designing a simple game some enemies on the stage try to catch the player. Then every time if the player's position changes, it's emit / publish a event with argument for new x ,y.

Create an EventEmitter instance, use `on` to register event with key and handler, later on use emit to trigger the handler.

```js
//  the publisher creates the EventEmitter instance
var playerPositionEvent = new Phaser.Events.EventEmitter();

function create() {
  //  The publisher emits new arguments
  playerPositionEvent.emit('newPosition', 200, 300);
  playerPositionEvent.emit('newPosition', 400, 300);
  playerPositionEvent.emit('newPosition', 600, 300);
}

// the subscriber decides what to do
// Set-up an event handler in the subscriber
// this is the
playerPositionEvent.on('newPosition', handler, this);

function handler(x, y) {
  // move to the player
  this.tweens.add({
    targets: playerSprite,
    x: x,
    y: y,
    duration: 1000
  });
}
```

off

once

### customize event

## scene.event

[scene event](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/timer/)

## game object events

## time.addEvent

```js
create: function () {
    // Store the score in the Registry
    this.registry.set('score', this.score);

    //  Update the score every 500ms
    this.time.addEvent({
        delay: 500,
        callback: this.onEvent,
        callbackScope: this,
        loop: true
    });
},

onEvent: function () {
    this.score++;

    this.registry.set('score', this.score);
}

```

## Common pre-defined events

`this.events.on('resize', resize, this);`

<https://dustinpfister.github.io/2018/08/07/phaser-time-events/>

<https://photonstorm.github.io/phaser3-docs/Phaser.Time.TimerEvent.html>
