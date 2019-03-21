class SceneGameOver extends Phaser.Scene {
    constructor() {
        super({
            key: "SceneGameOver"
        });
    }
    create() {

        let highScoreToDisplay = 0;
        if (score > highscore) {
            highscore = score
            localStorage.setItem("spaceShooterHighscore", highscore);
            this.add.text(160, 475, "NEW HIGHSCORE!", {
                fontSize: "20px",
                fill: "#F4FA58"
            });
        }


        if (localStorage.getItem("spaceShooterHighscore") !== null) {
            highScoreToDisplay = parseInt(localStorage.getItem("spaceShooterHighscore"));
        }

        this.cameras.main.shake(500)
        this.time.delayedCall(300, function () {
            // this.cameras.main.fade(250);
            this.cameras.main.resetFX();
        }, [], this);
        this.add.text(125, 275, "Your score was : " + score, {
            fontSize: "20px",
            fill: "#FFF"
        });
        this.add.text(115, 315, "The highscore was : " + highScoreToDisplay, {
            fontSize: "20px",
            fill: "#FFF"
        });
        this.title = this.add.text(this.game.config.width * 0.5, 128, "GAME OVER", {
            fontFamily: 'monospace',
            fontSize: 48,
            fontStyle: 'bold',
            color: '#ffffff',
            align: 'center'
        });
        this.title.setOrigin(0.5);

        this.sfx = {
            btnOver: this.sound.add("sndBtnOver"),
            btnDown: this.sound.add("sndBtnDown")
        };

        this.btnRestart = this.add.sprite(
            this.game.config.width * 0.5,
            this.game.config.height * 0.63,
            "sprBtnRestart"
        );

        this.btnRestart.setInteractive();

        this.btnRestart.on("pointerover", function () {
            this.btnRestart.setTexture("sprBtnRestartHover"); // set the button texture to sprBtnPlayHover
            this.sfx.btnOver.play(); // play the button over sound
        }, this);

        this.btnRestart.on("pointerout", function () {
            this.setTexture("sprBtnRestart");
        });

        this.btnRestart.on("pointerdown", function () {
            this.btnRestart.setTexture("sprBtnRestartDown");
            this.sfx.btnDown.play();
        }, this);

        this.btnRestart.on("pointerup", function () {
            this.btnRestart.setTexture("sprBtnRestart");
            this.scene.start("SceneMain");
        }, this);

        this.backgrounds = [];
        for (var i = 0; i < 5; i++) {
            var keys = ["sprBg0", "sprBg1"];
            var key = keys[Phaser.Math.Between(0, keys.length - 1)];
            var bg = new ScrollingBackground(this, key, i * 10);
            this.backgrounds.push(bg);
        }
    }

    update() {
        for (var i = 0; i < this.backgrounds.length; i++) {
            this.backgrounds[i].update();
        }
    }
}