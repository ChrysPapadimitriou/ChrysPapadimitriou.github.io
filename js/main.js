var isMobile = navigator.userAgent.indexOf("Mobile");
if (isMobile == -1) {
    isMobile = navigator.userAgent.indexOf("Tablet");
}
if (isMobile == -1) {
    screen.orientation.lock('landscape');
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
        }
    };
}
var game = new Phaser.Game(config);

