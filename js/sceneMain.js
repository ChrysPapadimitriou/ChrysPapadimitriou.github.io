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

        bg.y= game.config.height;
        bg.x= game.config.width;

        //set grid lines to locate positions
        this.blockGrid =new AlignGrid({
            scene:this,
            rows:33,
            cols:33,
            height:bg.displayHeight,
            width:bg.displayWidth
        });
        this.blockGrid.showNumbers();

        //set background to gridline position 60

    }
    update() {}
}