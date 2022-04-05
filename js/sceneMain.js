class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        this.load.image("background","assets/background.png");
    }
    create() {
        let bg = this.add.image(0,0,"background");
        
        bg.displayHeight = this.sys.game.config.height;
        bg.scaleX = bg.scaleY;
        bg.y= game.config.height/2;
        bg.x= game.config.width/2;
        //bg.x = bg.displayWidth*.5;
        //set grid lines to locate positions
        this.blockGrid =new AlignGrid({
            scene:this,
            rows:22,
            cols:22,
            height:bg.displayHeight,
            width:bg.displayWidth
        });
        this.blockGrid.showNumbers();

        //set background to gridline position 60

    }
    update() {}
}