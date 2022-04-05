class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        this.load.image("background","assets/background.png");
        this.load.atlas("bird","assets/bird.png","assets/plane.json");
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

        this.bird = this.add.sprite(300,300,"plane");
        var frameNames = this.textures.get("plane").getFrameNames();
        console.log(frameNames);
        this.anims.create({
            key: "move",
            frames: [{
                key: "plane",
                Frame: "Fly (1).png"
            }, {
                key: "plane",
                Frame: "Fly (2).png"
            }, {
                key: "plane",
                Frame: "Shoot (1).png"
            }],
            frameRate: 8,
            repeat: -1
            });
            this.bird.play("move");

    }
    update() {}
}