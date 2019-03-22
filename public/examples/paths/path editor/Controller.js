<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Controller</title>
  <script src="//cdn.jsdelivr.net/npm/phaser@3.16.2/dist/phaser.min.js"></script>
</head>

<body>

  <div id="phaser-example"></div>
  <script>
class Controller extends Phaser.Scene {

    constructor ()
    {
        super();
    }

    resize (width, height)
    {
        if (width === undefined) { width = this.game.config.width; }
        if (height === undefined) { height = this.game.config.height; }

        this.cameras.resize(width, height);
    }

}

    </script>

</body>

</html>