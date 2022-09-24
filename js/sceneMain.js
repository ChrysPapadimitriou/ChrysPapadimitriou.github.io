class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {   //load assets
        this.load.image("background","assets/background4.png");
        this.load.atlas("bird","assets/bird.png","assets/bird.json");
        this.load.atlas("cloud","assets/cloud.png","assets/cloud.json");
        this.load.atlas("LeftHold","assets/LeftHold.png","assets/LeftHold.json");
        this.load.atlas("RightHold","assets/RightHold.png","assets/RightHold.json");
        this.load.image("Right","assets/Right.png");
        this.load.image("Left","assets/Left.png");
     /*   this.load.image("Welcome","assets/Welcome.png");
        this.load.image("UniLogo","assets/UniLogo.png");
        this.load.image("UniLogoMsc","assets/UniLogoMsc.png");
        this.load.image("Flag","assets/flag.png");
        this.load.image("Flag2","assets/flag2.png"); */
    }
    create() {

        this.emitter=EventDispatcher.getInstance();
        //add backgrounds 
        let bg = this.add.image(0,0,"background");
        bg.displayHeight = this.sys.game.config.height;
        bg.displayWidth = this.sys.game.config.width*4;
        bg.y= game.config.height/2;
        bg.x= game.config.width*2;

        //set grid lines to locate positions
        this.blockGrid =new AlignGrid({
            scene:this,
            rows:44,
            cols:110,
            height:bg.displayHeight,
            width:bg.displayWidth
        });
       // this.blockGrid.showNumbers();

        //add assets
        /*this.Welcome = this.add.image(0,0,"Welcome");
        Align.scaleToGameW(this.Welcome,0.8);
        this.blockGrid.placeAtIndex(1989,this.Welcome);

        this.Flag = this.add.image(0,0,"Flag");
        Align.scaleToGameW(this.Flag,0.5);
        this.blockGrid.placeAtIndex(2011,this.Flag);

        this.Logo = this.add.image(0,0,"UniLogoMsc");
        Align.scaleToGameW(this.Logo,0.23);
        this.blockGrid.placeAtIndex(1788.1,this.Logo);

        this.Logo2 = this.add.image(0,0,"UniLogo");
        Align.scaleToGameW(this.Logo2,0.23);
        this.blockGrid.placeAtIndex(1791.07,this.Logo2);

        this.Flag2 = this.add.image(0,0,"Flag2");
        Align.scaleToGameW(this.Flag2,0.15);
        this.blockGrid.placeAtIndex(266,this.Flag2);

        this.info = this.add.text(0,0, "Chrysovalantis Papadimitriou Resume",{font:"Georgia"});
        this.blockGrid.placeAtIndex(2650,this.info);
        Align.scaleToGameW(this.info,1);
*/
        //add sprites
        this.bird = this.physics.add.sprite(0,0,"bird");
        Align.scaleToGameW(this.bird,0.09);
        this.blockGrid.placeAtIndex(3749,this.bird);

        this.LeftHold = this.add.sprite(0,0,"LeftHold");
        Align.scaleToGameW(this.LeftHold,0.04);
        this.blockGrid.placeAtIndex(76-20,this.LeftHold);
//
        this.RightHold = this.add.sprite(0,0,"RightHold");
        Align.scaleToGameW(this.RightHold,0.04);
        this.blockGrid.placeAtIndex(76-24,this.RightHold);

        this.cloud = this.add.sprite(0,0,"cloud");
        Align.scaleToGameW(this.cloud,0.35);
        this.blockGrid.placeAtIndex(159+0.2,this.cloud);

        this.cloud2 = this.add.sprite(0,0,"cloud");
        Align.scaleToGameW(this.cloud2,0.35);
        this.blockGrid.placeAtIndex(169-0.2,this.cloud2);

        //testing anims
        var frameNames = this.textures.get("bird").getFrameNames();
        
        

        
        window.bird = this.bird;
        window.LeftHold = this.LeftHold;
        window.cloud = this.cloud;
        window.cloud2 = this.cloud2;
        window.RightHold = this.RightHold;
        
        this.bird.setGravityY(0);

        this.makeAnims();
        bird.play("moveR");
        LeftHold.play("left");
        RightHold.play("right");
        cloud.play("move");
        cloud2.play("move");

        this.gamePad=new GamePad({scene:this, grid:this.blockGrid});
        this.setListeners();

        this.cameras.main.setBounds(0,0,bg.displayWidth,bg.displayHeight);
        this.cameras.main.startFollow(this.bird);
    }
    setListeners()
    {
        this.emitter.on("GO_RIGHT",this.birdGoRight.bind(this));
        this.emitter.on("GO_LEFT",this.birdGoLeft.bind(this));
        this.input.on("pointerup",this.stopBird.bind(this));
    }
    stopBird(){
        this.bird.setVelocityX(0);
    }
    birdGoRight()
    {
        this.bird.setVelocityX(270);
        this.bird.play("moveR");
    }
    birdGoLeft(){
        this.bird.setVelocityX(-270);
        this.bird.play("moveL");
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
            frameRate: 6,
            repeat: -1
        })
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNames("LeftHold", {start:0, end:1, zeroPad: 3, prefix:"MoveL__", suffix: ".png"}),
            frameRate: 6,
            repeat: -1
        })
        this.anims.create({
            key: 'move',
            frames: this.anims.generateFrameNames("cloud", {start:0, end:2, zeroPad: 3, prefix:"Move__", suffix: ".png"}),
            frameRate: 0.35,
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