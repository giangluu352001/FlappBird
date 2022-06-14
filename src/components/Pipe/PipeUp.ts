import { Sprite } from "../../renders/Sprite";
import { CANVASWIDTH, PIPEHEIGHT, PIPEWIDTH } from "../../utils/Constant";
import { allImage } from "../../utils/ImageLoading";
import { Pipe } from "./Pipe";
let image: HTMLImageElement = allImage.get("pipe0");
export class PipeUp extends Pipe {
    constructor() {
        super(CANVASWIDTH, -110 * Math.min(Math.random() + 1, 1.5));
        this.sprite = new Sprite(this);
        this.sprite.setImage(image, PIPEWIDTH, PIPEHEIGHT);
    }
}
