class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        this.load.image("background","assets/background.png");
        this.load.atlas("bird","assets/bird.png","assets/bird.json");
    }
    create() {
        let bg = this.add.image(0,0,"background");
        
        bg.displayHeight = this.sys.game.config.height;
        bg.displayWidth = this.sys.game.config.width;
       // bg.scaleX = bg.scaleY;

        bg.y= game.config.height/2;
        bg.x= game.config.width/2;

        //set grid lines to locate positions
        //this.blockGrid =new AlignGrid({
        //    scene:this,
        //    rows:33,
        //    cols:33,
        //    height:bg.displayHeight,
        //    width:bg.displayWidth
        //});
        //this.blockGrid.showNumbers();

        this.bird = this.add.sprite(300,300,"bird");
        var frameNames = this.textures.get("bird").getFrameNames();
        console.log(frameNames);
        this.anims.create({
            key: "move",
            frames: [{
                key: "bird",
                Frame: "Move__000.png"
            }, {
                key: "bird",
                Frame: "Move__001.png"
            }, {
                key: "bird",
                Frame: "Move__002.png"
            }],
            frameRate: 8,
            repeat: -1
        });
        this.bird.play("move");
        
    }
    update() {}
}
/*
makeAnims() {
    this.makeAnims.create({
        key: "move",
        frames: this.anims.generateFrameNames("bird", {start:0, end:3, zeroPad: 3, prefix:"Move__", suffix: ".png"}),
        frameRate: 8,
        repeat: -1
    })
} */