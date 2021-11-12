# Tile map

In an action game like super mario, the character controlled by player move or jump from start (usually left) to the end (usually right).

In a tank game, a RPG game or alike, the game object controlled by player moves on the map.

Under the hood, those games are developed using tile map and camera.

<https://photonstorm.github.io/phaser3-docs/Phaser.Tilemaps.Tilemap.html>

[source code](https://github.com/photonstorm/phaser/blob/v3.18.0/src/tilemaps/Tilemap.js)

<https://developer.mozilla.org/en-US/docs/Games/Techniques/Tilemaps>

A Tilemap is a container for Tilemap data. This isn't a display object, rather, it holds data about the map and allows you to add tilesets and tilemap layers to it. A map can have one or more tilemap layers (StaticTilemapLayer or DynamicTilemapLayer), which are the display objects that actually render tiles.

## Create the Tilemap

You can use `new Tilemap(scene, mapData)`.

Also you can use the scene make shortcut method which takes the [TilemapConfig](https://photonstorm.github.io/phaser3-docs/Phaser.Types.Tilemaps.html#.TilemapConfig)

```js
// Load a map from a 2D array of tile indices
var grid = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [0, 2, 0, 2, 0, 0, 0, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 0, 0, 2],
  [0, 2, 0, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 0, 2],
  [0, 0, 0, 2, 0, 0, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 0, 2],
  [0, 2, 0, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 0, 2],
  [0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];

// When loading from an array, make sure to specify the tileWidth and tileHeight
var map = this.make.tilemap({
  data: grid,
  tileWidth: 32,
  tileHeight: 32,
});
```

Often the case, the tile map is quite large. You would need to use the [load shortcut method](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/loader/).

`this.load.tilemapCSV("xxx.csv")` or `this.load.tilemapJSON("xxx.json")`

## The tile instance

Tile map is the collection of tiles.

<https://photonstorm.github.io/phaser3-docs/Phaser.Tilemaps.Tile.html>

map.removeTileAt(x,y)

## MapData

In phaser, we create a map instance which has the map data, and on top of it we create a layer.

<https://photonstorm.github.io/phaser3-docs/Phaser.Tilemaps.MapData.html>

## LayerData

<https://photonstorm.github.io/phaser3-docs/Phaser.Tilemaps.LayerData.html>

<https://photonstorm.github.io/phaser3-docs/Phaser.Tilemaps.DynamicTilemapLayer.html>

## Resources

[Source code](https://github.com/photonstorm/phaser/tree/v3.18.0/src/tilemaps)

[Modular Game Worlds in Phaser 3 Tilemaps #1 — Static Maps](https://medium.com/@michaelwesthadley/modular-game-worlds-in-phaser-3-tilemaps-1-958fc7e6bbd6)

[Modular Game Worlds in Phaser 3 Tilemaps #2 — Dynamic Platformer](https://itnext.io/modular-game-worlds-in-phaser-3-tilemaps-2-dynamic-platformer-3d68e73d494a)

[Modular Game Worlds in Phaser 3 Tilemaps #3 — Procedural Dungeon](https://itnext.io/modular-game-worlds-in-phaser-3-tilemaps-3-procedural-dungeon-3bc19b841cd)

<https://gamedevacademy.org/html5-phaser-tutorial-top-down-games-with-tiled/>

<https://www.joshmorony.com/create-a-running-platformer-game-in-phaser-with-tilemaps/>

[weltmeister map](https://impactjs.com/documentation/weltmeister)

<https://www.mapeditor.org/>
