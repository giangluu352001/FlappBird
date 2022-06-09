import { ctx } from "../utils/Canvas";
import { CANVASWIDTH, FOREHEIGHT, FOREWIDTH, LAND } from "../utils/Constant";
import { allImage } from "../utils/ImageLoading";
import { Scene } from "../utils/Scene";

export class ForeGround extends Scene{
    private numOfImages: number;
    private x: number;
    private speed: number;
    constructor() {
        super(CANVASWIDTH * (FOREHEIGHT / FOREWIDTH), CANVASWIDTH, allImage.get("foreground"));
        this.numOfImages = Math.ceil(CANVASWIDTH / FOREWIDTH);
        this.x = 0;
        this.speed = Math.round(CANVASWIDTH * 0.002);
    }
    public update(): void {
        this.x = this.x + this.width < 0 ? 0 : this.x - this.speed; 
    }
    public render(): void {
        for(let i = 0; i <= this.numOfImages; i++)
            ctx.drawImage(this.image, this.x + this.width * i, LAND, this.width, this.height);
    }
}