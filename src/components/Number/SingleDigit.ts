import { GameObject } from "../../objects/GameObject";
import { Sprite } from "../../renders/Sprite";
import { allImage } from "../../utils/ImageLoading";
import { Vector2D } from "../../utils/Vector2D";

export class SingleDigit extends GameObject {
    private value!: number;
    constructor(position: Vector2D, value: number) {
        super(position);
        this.sprite = new Sprite(this);
        if (value != -1) this.setNumber(value);
        else this.value = -1;
    }
    public getValue(): number {
        return this.value;
    }
    public setNumber(value: number) {
        this.value = value;
        let image: HTMLImageElement = allImage.get(`${this.value}`);
        this.sprite!.setImage(image, image.width, image.height);
    }
    public update(time: number, delta: number): void {}
    
}