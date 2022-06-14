import { GameObject } from "../../objects/GameObject";
import { Sprite } from "../../renders/Sprite";
import { CANVASHEIGHT, CANVASWIDTH } from "../../utils/Constant";
import { allImage } from "../../utils/ImageLoading";
import { Vector2D } from "../../utils/Vector2D";

export class TableScore extends GameObject {
    constructor() {
        super(new Vector2D(CANVASWIDTH * 0.45, CANVASHEIGHT * 0.25));
        this.sprite = new Sprite(this);
        let image: HTMLImageElement = allImage.get("best");
        this.sprite.setImage(image, image.width * 1.4, image.height * 1.5);
    }
    public update(time: number, delta: number): void {}
}