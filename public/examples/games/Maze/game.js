var game;

var gameOptions = {
  mazeWidth: 81,
  mazeHeight: 61,
  tileSize: 10
};

window.onload = function() {
  var gameConfig = {
    type: Phaser.CANVAS,
    width: gameOptions.mazeWidth * gameOptions.tileSize,
    height: gameOptions.mazeHeight * gameOptions.tileSize,
    backgroundColor: 0xaaaaaa,
    scene: [playGame]
  };
  game = new Phaser.Game(gameConfig);
  window.focus();
  resize();
  window.addEventListener("resize", resize, false);
};

class playGame extends Phaser.Scene {
  constructor() {
    super("PlayGame");
  }
  create() {
    this.mazeGraphics = this.add.graphics();
    var moves = [];
    this.maze = [];
    for (var i = 0; i < gameOptions.mazeHeight; i++) {
      this.maze[i] = [];
      for (var j = 0; j < gameOptions.mazeWidth; j++) {
        this.maze[i][j] = 1;
      }
    }
    var posX = 1;
    var posY = 1;
    this.maze[posX][posY] = 0;
    moves.push(posY + posY * gameOptions.mazeWidth);
    while (moves.length) {
      var possibleDirections = "";
      if (
        posX + 2 > 0 &&
        posX + 2 < gameOptions.mazeHeight - 1 &&
        this.maze[posX + 2][posY] == 1
      ) {
        possibleDirections += "S";
      }
      if (
        posX - 2 > 0 &&
        posX - 2 < gameOptions.mazeHeight - 1 &&
        this.maze[posX - 2][posY] == 1
      ) {
        possibleDirections += "N";
      }
      if (
        posY - 2 > 0 &&
        posY - 2 < gameOptions.mazeWidth - 1 &&
        this.maze[posX][posY - 2] == 1
      ) {
        possibleDirections += "W";
      }
      if (
        posY + 2 > 0 &&
        posY + 2 < gameOptions.mazeWidth - 1 &&
        this.maze[posX][posY + 2] == 1
      ) {
        possibleDirections += "E";
      }
      if (possibleDirections) {
        var move = Phaser.Math.Between(0, possibleDirections.length - 1);
        switch (possibleDirections[move]) {
          case "N":
            this.maze[posX - 2][posY] = 0;
            this.maze[posX - 1][posY] = 0;
            posX -= 2;
            break;
          case "S":
            this.maze[posX + 2][posY] = 0;
            this.maze[posX + 1][posY] = 0;
            posX += 2;
            break;
          case "W":
            this.maze[posX][posY - 2] = 0;
            this.maze[posX][posY - 1] = 0;
            posY -= 2;
            break;
          case "E":
            this.maze[posX][posY + 2] = 0;
            this.maze[posX][posY + 1] = 0;
            posY += 2;
            break;
        }
        moves.push(posY + posX * gameOptions.mazeWidth);
      } else {
        var back = moves.pop();
        posX = Math.floor(back / gameOptions.mazeWidth);
        posY = back % gameOptions.mazeWidth;
      }
    }
    this.drawMaze(posX, posY);
    var easystar = new EasyStar.js();
    easystar.setGrid(this.maze);
    easystar.setAcceptableTiles([0]);
    easystar.findPath(
      1,
      1,
      gameOptions.mazeWidth - 2,
      gameOptions.mazeHeight - 2,
      function(path) {
        this.drawPath(path);
      }.bind(this)
    );
    easystar.calculate();
  }
  drawMaze(posX, posY) {
    this.mazeGraphics.fillStyle(0x000000);
    for (var i = 0; i < gameOptions.mazeHeight; i++) {
      for (var j = 0; j < gameOptions.mazeWidth; j++) {
        if (this.maze[i][j] == 1) {
          this.mazeGraphics.fillRect(
            j * gameOptions.tileSize,
            i * gameOptions.tileSize,
            gameOptions.tileSize,
            gameOptions.tileSize
          );
        }
      }
    }
  }
  drawPath(path) {
    var i = 0;
    this.time.addEvent({
      delay: 5,
      callback: function() {
        if (i < path.length) {
          this.mazeGraphics.fillStyle(0x660000);
          this.mazeGraphics.fillRect(
            path[i].x * gameOptions.tileSize + 1,
            path[i].y * gameOptions.tileSize + 1,
            gameOptions.tileSize - 2,
            gameOptions.tileSize - 2
          );
          i++;
        } else {
          this.scene.start("PlayGame");
        }
      },
      callbackScope: this,
      loop: true
    });
  }
}
function resize() {
  var canvas = document.querySelector("canvas");
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var windowRatio = windowWidth / windowHeight;
  var gameRatio = game.config.width / game.config.height;
  if (windowRatio < gameRatio) {
    canvas.style.width = windowWidth + "px";
    canvas.style.height = windowWidth / gameRatio + "px";
  } else {
    canvas.style.width = windowHeight * gameRatio + "px";
    canvas.style.height = windowHeight + "px";
  }
}
