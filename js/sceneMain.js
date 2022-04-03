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
        Align.scaleToGameW(bg,1);
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