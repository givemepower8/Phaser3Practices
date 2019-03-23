# phaser events

Events is for trigger some code depends on some behavior change.

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
