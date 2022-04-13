class GamePad extends UIBlock
{
    constructor(config)
    {
        super();
        this.scene = config.scene;
        this.grid= config.grid;

        this.btnRight = this.scene.add.image(0,0,"Right");
        Align.scaleToGameW(this.btnRight,0.15);
        this.grid.placeAtIndex(452,this.btnRight);

        this.bntLeft = this.scene.add.image(0,0,"Left");
        Align.scaleToGameW(this.bntLeft,0.15);
        this.grid.placeAtIndex(448,this.bntLeft);

        this.btnRight.setInteractive();
        this.bntLeft.setInteractive();

        this.btnRight.on("pointerdown", this.goRight.bind(this));
        this.bntLeft.on("pointerdown", this.goLeft.bind(this));

        this.add(this.btnRight);
        this.add(this.bntLeft);
    }
    goRight() {
        console.log("go right");
    }
    goLeft() {
        console.log("go left");
    }
}