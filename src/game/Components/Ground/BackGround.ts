import { GameObject } from "../../../engine/objects/GameObject";
import { Sprite } from "../../../engine/renders/Sprite";
import { BGHEIGHT, BGWIDTH, CANVASHEIGHT, CANVASWIDTH } from "../../../utils/Constant";
import { allImage } from "../../../utils/ImageLoading";
import { Vector2D } from "../../../utils/Vector2D";

export class BackGround extends GameObject {
    constructor() {
        super(new Vector2D(0, 0));
        this.sprite = new Sprite(this);
        let image: HTMLImageElement = allImage.get("background");
        this.sprite.setImage(image, CANVASHEIGHT * (BGWIDTH / BGHEIGHT), CANVASHEIGHT);
        this.sprite.setNumOfImage(Math.ceil(CANVASWIDTH / BGWIDTH) + 1);
    }
}