var isMobile = navigator.userAgent.indexOf("Mobile");
if (isMobile == -1) {
    isMobile = navigator.userAgent.indexOf("Tablet");
}
if (isMobile == -1) {
    var config = {
        type: Phaser.AUTO,
        parent: 'phaser-game',
        scene: [SceneMain],
        physics: {
        default: "arcade",
        arcade: {
            debug: true
            }
        },
        scene:{
            preload: preload,
            create: create,
            update: update
        },
        Scale:{
            orientation: Phaser.Scale.Orientation.LANDSCAPE,
            width: window.innerWidth,
            height: window.innerHeight,
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
        scene:{
            preload: preload,
            create: create,
            update: update
        },
        Scale:{
            orientation: Phaser.Scale.Orientation.LANDSCAPE,
            width: window.innerWidth,
            height: window.innerHeight
        }
    };
}
var game = new Phaser.Game(config);

