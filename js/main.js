var isMobile = navigator.userAgent.indexOf("Mobile");
if (isMobile == -1) {
    isMobile = navigator.userAgent.indexOf("Tablet");
}
if (isMobile == -1) {
    var config = {
        type: Phaser.AUTO,
        width: 480,
        height: 640,
        parent: 'phaser-game',
        scene: [sceneMain]
    };
} else {
    var config = {
        type: Phaser.AUTO,
        width: window.innerWidth,
        height: window.innerHeight,
        parent: 'phaser-game',
        scene: [sceneMain]
    };
}
var game = new Phaser.Game(config);