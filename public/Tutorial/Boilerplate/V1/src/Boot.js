var FirstGame = FirstGame || {};

FirstGame.Boot = function(){};

FirstGame.Boot.prototype = {
    preload: function() {
        //assets we'll use in the loading screen
      //this.load.image('logo', 'assets/images/logo.png');
      // this.load.image('preloadbar', 'assets/images/preloader-bar.png');
      console.log("First Game preload");
    },
    create: function() {
        console.log("First Game create");
    //     //loading screen will have a white background
    //   this.game.stage.backgroundColor = '#fff';
  
    //   //scaling options
    //   this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    //   this.scale.minWidth = 240;
    //   this.scale.minHeight = 170;
    //   this.scale.maxWidth = 2880;
    //   this.scale.maxHeight = 1920;
      
    //   //have the game centered horizontally
    //   this.scale.pageAlignHorizontally = true;
  
    //   //screen size will be set automatically
    //   // DEPRECATED this.scale.setScreenSize(true);
  
    //   //physics system for movement
    //   this.game.physics.startSystem(Phaser.Physics.ARCADE);
      
    //   this.state.start('Preload');
    }
  };