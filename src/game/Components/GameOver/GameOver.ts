import { GameObject } from "../../../engine/objects/GameObject";
import { Sprite } from "../../../engine/renders/Sprite";
import { CANVASHEIGHT, CANVASWIDTH } from "../../../utils/Constant";
import { allImage } from "../../../utils/ImageLoading";
import { Vector2D } from "../../../utils/Vector2D";

export class GameOver extends GameObject {
    constructor() {
        super(new Vector2D(CANVASWIDTH * 0.35, CANVASHEIGHT * 0.1));
        this.sprite = new Sprite(this);
        let image: HTMLImageElement = allImage.get("gameover");
        this.sprite.setImage(image, image.width, image.height);
    }
}