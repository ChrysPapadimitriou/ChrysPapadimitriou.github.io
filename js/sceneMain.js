class SceneMain extends Phaser.Scene {
    constructor() {
        super();
    }
    preload()
    {
        this.load.image("background","assets/background.png");
    }
    create() {
        console.log("Ready!");
        this.background = this.add.image(0,0,"background");
        this.background.scale.setTo(4,8);
        //set grid lines to locate positions
        this.aGrid=new AlignGrid({scene:this,rows:11,cols:11});
        this.aGrid.showNumbers();

        //set background to gridline position 60
        this.aGrid.placeAtIndex(60,this.background);
    }
    update() {}
}