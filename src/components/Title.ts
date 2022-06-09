import { ctx } from "../utils/Canvas";
import { CANVASHEIGHT, CANVASWIDTH } from "../utils/Constant";
import { allImage } from "../utils/ImageLoading";
import { Scene } from "../utils/Scene";

export class Title extends Scene {
    constructor() {
        super(0, 0, allImage.get("title"));
    }
    public render(): void {
        ctx.drawImage(this.image, CANVASWIDTH * 0.35, CANVASHEIGHT * 0.3);
    }
}