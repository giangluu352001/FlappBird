import {canvas, ctx} from "../utils/Canvas";
import { BGHEIGHT, BGWIDTH } from "../utils/Constant";
import { allImage } from "../utils/ImageLoading";
import { Scene } from "../utils/Scene";

export class BackGround extends Scene {
    private numOfImages: number;
    constructor() {
        super(canvas.height , canvas.height * (BGWIDTH / BGHEIGHT), allImage.get("background"));
        this.numOfImages = Math.ceil(canvas.width / this.width) + 1;
    }
    public render(): void {
        for(let i = 0; i <= this.numOfImages; i++)
            ctx.drawImage(this.image, this.width * i, 0, this.width, this.height);
    }
}