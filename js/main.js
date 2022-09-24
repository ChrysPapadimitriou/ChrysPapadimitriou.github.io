var isMobile = navigator.userAgent.indexOf("Mobile");
if (isMobile == -1) {
    isMobile = navigator.userAgent.indexOf("Tablet");
}
if (isMobile == -1) {
    var config = {
        type: Phaser.AUTO,
        width: window.innerWidth,
        height: window.innerHeight,
        parent: 'phaser-game',
        scene: [SceneMain],
        physics: {
        default: "arcade",
        arcade: {
            debug: true
            }
        },
        Scale:{
            orientation: Phaser.Scale.Orientation.LANDSCAPE
        }
    };
} else {
    var config = {
        type: Phaser.AUTO,
        width: window.innerWidth,
        height: window.innerHeight,
        parent: 'phaser-game',
        scene: [SceneMain],
        physics: {
         default: "arcade",
        arcade: {
            debug: true
           }
        },
        Scale:{
            orientation: Phaser.Scale.Orientation.LANDSCAPE
        }
    };
}
var game = new Phaser.Game(config);

