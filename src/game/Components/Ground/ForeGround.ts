import { GameObject } from "../../../engine/objects/GameObject";
import { Physic } from "../../../engine/physic/Physic";
import { Sprite } from "../../../engine/renders/Sprite";
import { CANVASWIDTH, FOREHEIGHT, FOREWIDTH, LAND } from "../../../utils/Constant";
import { allImage } from "../../../utils/ImageLoading";
import { Vector2D } from "../../../utils/Vector2D";

export class ForeGround extends GameObject{
    constructor() {
        super(new Vector2D(0, LAND));
        this.sprite = new Sprite(this);
        let image: HTMLImageElement = allImage.get("foreground");
        this.sprite.setImage(image, CANVASWIDTH, CANVASWIDTH * (FOREHEIGHT / FOREWIDTH));
        this.sprite.setNumOfImage(Math.ceil(CANVASWIDTH / FOREWIDTH) + 1);
        this.physic = new Physic(this);
        this.physic.setVelocity(Math.round(CANVASWIDTH * 0.2), 0);
    }
    public stop(): void {
        this.physic?.setVelocity(0, 0);
    }
    public resume(): void {
        this.physic.setVelocity(Math.round(CANVASWIDTH * 0.2), 0);
    }
    public update(time: number, delta: number): void {
        let position: Vector2D = this.position;
        if(position.X + this.sprite!.getWidth() < 0) position.setX(0);
        else this.physic?.update(time, -delta);
    }
}