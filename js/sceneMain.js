class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        this.load.image("background","assets/background.png");
        this.load.atlas("bird","assets/bird.png","assets/bird.json");
        this.load.image("Right","assets/Right.png");
        this.load.image("Left","assets/Left.png");
        this.load.image("UniLogo","assets/UniLogo.png");
        this.load.image("Title","assets/Title.png");
    }
    create() {
        let bg = this.add.image(0,0,"background");
        
        bg.displayHeight = this.sys.game.config.height;
        bg.displayWidth = this.sys.game.config.width;

        bg.y= game.config.height/2;
        bg.x= game.config.width/2;

        this.Right = this.add.image(0,0,"Right");
        Align.scaleToGameW(this.Right,0.15);
        this.Left = this.add.image(0,0,"Left");
        Align.scaleToGameW(this.Left,0.15);
        this.Logo = this.add.image(0,0,"UniLogo");
        Align.scaleToGameW(this.Logo,0.15);
        this.title = this.add.image(0,0,"Title");
        Align.scaleToGameW(this.title,0,5);
        
        //set grid lines to locate positions
        this.blockGrid =new AlignGrid({
            scene:this,
            rows:11,
            cols:11,
            height:bg.displayHeight,
            width:bg.displayWidth
        });
        this.blockGrid.showNumbers();

        this.blockGrid.placeAtIndex(103,this.Left);
        this.blockGrid.placeAtIndex(105,this.Right);
        this.blockGrid.placeAtIndex(61,this.Logo);
        this.blockGrid.placeAtIndex(17,this.title);

        this.bird = this.add.sprite(300,300,"bird");
        Align.scaleToGameW(this.bird,0.2);
        var frameNames = this.textures.get("bird").getFrameNames();
        console.log(frameNames);
        this.makeAnims();
        
        window.bird = this.bird;
        bird.play("moveR");
    }
    makeAnims() {
        this.anims.create({
            key: 'moveR',
            frames: this.anims.generateFrameNames("bird", {start:0, end:3, zeroPad: 3, prefix:"MoveR__", suffix: ".png"}),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: 'moveL',
            frames: this.anims.generateFrameNames("bird", {start:0, end:3, zeroPad: 3, prefix:"MoveL__", suffix: ".png"}),
            frameRate: 10,
            repeat: -1
        })
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

/*    makeAnims() {
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
    }*/