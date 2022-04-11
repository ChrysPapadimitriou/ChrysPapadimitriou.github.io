class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        this.load.image("background","assets/background.png");
        this.load.atlas("bird","assets/bird.png","assets/bird.json");
        this.load.atlas("cloud","assets/cloud.png","assets/cloud.json");
        this.load.atlas("LeftHold","assets/LeftHold.png","assets/LeftHold.json");
        this.load.atlas("RightHold","assets/RightHold.png","assets/RightHold.json");
        this.load.image("Right","assets/Right.png");
        this.load.image("Welcome","assets/Welcome.png");
        this.load.image("Left","assets/Left.png");
        this.load.image("UniLogo","assets/UniLogo.png");
        this.load.image("Flag","assets/flag.png");
    }
    create() {
        let bg = this.add.image(0,0,"background");
        
        bg.displayHeight = this.sys.game.config.height;
        bg.displayWidth = this.sys.game.config.width;

        bg.y= game.config.height/2;
        bg.x= game.config.width/2;

        this.Welcome = this.add.image(0,0,"Welcome");
        Align.scaleToGameW(this.Welcome,0.20);
        this.Flag = this.add.image(0,0,"Flag");
        Align.scaleToGameW(this.Flag,0.5);
        this.Right = this.add.image(0,0,"Right");
        Align.scaleToGameW(this.Right,0.15);
        this.Left = this.add.image(0,0,"Left");
        Align.scaleToGameW(this.Left,0.15);
        this.Logo = this.add.image(0,0,"UniLogo");
        Align.scaleToGameW(this.Logo,0.08);
        
        //set grid lines to locate positions
        this.blockGrid =new AlignGrid({
            scene:this,
            rows:22,
            cols:22,
            height:bg.displayHeight,
            width:bg.displayWidth
        });
        //this.blockGrid.showNumbers();

        this.blockGrid.placeAtIndex(76,this.Welcome);
        this.blockGrid.placeAtIndex(252,this.Flag);
        this.blockGrid.placeAtIndex(448,this.Left);
        this.blockGrid.placeAtIndex(452,this.Right);
        this.blockGrid.placeAtIndex(252,this.Logo);

        this.bird = this.add.sprite(0,0,"bird");
        Align.scaleToGameW(this.bird,0.09);
        this.blockGrid.placeAtIndex(398,this.bird);

        this.LeftHold = this.add.sprite(0,0,"LeftHold");
        Align.scaleToGameW(this.LeftHold,0.04);
        this.blockGrid.placeAtIndex(76-20,this.LeftHold);
//
        this.RightHold = this.add.sprite(0,0,"RightHold");
        Align.scaleToGameW(this.RightHold,0.04);
        this.blockGrid.placeAtIndex(76-24,this.RightHold);

        this.cloud = this.add.sprite(0,0,"cloud");
        Align.scaleToGameW(this.cloud,0.5);
        this.blockGrid.placeAtIndex(159,this.cloud);

        var frameNames = this.textures.get("bird").getFrameNames();
        console.log(frameNames);
        this.makeAnims();
        
        window.bird = this.bird;
        window.LeftHold = this.LeftHold;
        window.cloud = this.cloud;
        window.RightHold = this.RightHold;
        bird.play("moveR");
        LeftHold.play("left");
        RightHold.play("right");
        cloud.play("move");

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
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNames("RightHold", {start:0, end:1, zeroPad: 3, prefix:"MoveR__", suffix: ".png"}),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNames("LeftHold", {start:0, end:1, zeroPad: 3, prefix:"MoveL__", suffix: ".png"}),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: 'move',
            frames: this.anims.generateFrameNames("cloud", {start:0, end:2, zeroPad: 3, prefix:"Move__", suffix: ".png"}),
            frameRate: 3,
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