import { Sprite } from "../../../engine/renders/Sprite";
import { CANVASWIDTH, GAP, PIPEHEIGHT, PIPEWIDTH } from "../../../utils/Constant";
import { allImage } from "../../../utils/ImageLoading";
import { Pipe } from "./Pipe";

export class PipeDown extends Pipe {
    constructor() {
        let image: HTMLImageElement = allImage.get("pipe1");
        super(CANVASWIDTH, -110 * Math.min(Math.random() + 1, 1.5) + PIPEHEIGHT + GAP);
        this.sprite = new Sprite(this);
        this.sprite.setImage(image, PIPEWIDTH, PIPEHEIGHT);
    }
}
