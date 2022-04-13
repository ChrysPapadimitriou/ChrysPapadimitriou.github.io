class GamePad extends UIBlock
{
    constructor(config)
    {
        super();
        this.scene = config.scene;
        this.grid= config.grid;

        this.Right = this.scene.add.image(0,0,"Right");
        Align.scaleToGameW(this.Right,0.15);
        this.blockGrid.placeAtIndex(452,this.Right);
        this.Left = this.scene.add.image(0,0,"Left");
        Align.scaleToGameW(this.Left,0.15);
        this.grid.placeAtIndex(448,this.Left);
        this.grid.placeAtIndex(452,this.Right);

        this.Right.setInteractive();
        this.Left.setInteractive();
    }
}