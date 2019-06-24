# phaser events

Events is used for handling further property changes like user clicked a button, or one game object's health reached at a certain stage, ...

## EventEmitter

Event is a publisher subscriber design pattern. Event takes handler which is an action has a fixed signature, the publisher emits the stage changes and subscribers observes the changes and acts accordingly.

Create an EventEmitter instance, use `on` to register event with key and handler, later on use emit to trigger the handler.

```js
function preload() {
  this.load.image('plush', '/assets/pics/profil-sad-plush.png');
}

function create() {
  //  Create our own EventEmitter instance
  var emitter = new Phaser.Events.EventEmitter();

  //  Set-up an event handler
  emitter.on('addImage', handler, this);

  //  Emit it a few times with varying arguments
  emitter.emit('addImage', 200, 300);
  emitter.emit('addImage', 400, 300);
  emitter.emit('addImage', 600, 300);
}

function handler(x, y) {
  this.add.image(x, y, 'plush');
}
```

off

once

## scene.event

[scene event](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/timer/)

time.addEvent

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
