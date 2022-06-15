import { GameObject } from "../../objects/GameObject";
import { Sprite } from "../../renders/Sprite";
import { CANVASHEIGHT, CANVASWIDTH } from "../../utils/Constant";
import { allImage } from "../../utils/ImageLoading";
import { Vector2D } from "../../utils/Vector2D";

export class Restart extends GameObject {
    constructor() {
        super(new Vector2D(CANVASWIDTH * 0.45, CANVASHEIGHT * 0.53));
        this.sprite = new Sprite(this);
        let image: HTMLImageElement = allImage.get("restart");
        this.sprite.setImage(image, 80, 40);
    }
}
