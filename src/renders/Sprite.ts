import { ctx } from "../utils/Canvas";
import { Vector2D } from "../utils/Vector2D";
import { GameObject } from "../objects/GameObject";
import { Object } from "../objects/Object";
export class Sprite extends Object {
    private image!: HTMLImageElement;
    private width: number = 0;
    private height: number = 0;
    private numOfImage: number = 1;
    constructor(gameObject: GameObject) {
        super(gameObject);
    }
    public setImage(image: HTMLImageElement, width: number, height: number): void {
        this.image = image;
        this.width = width;
        this.height = height;
    }
    public setAnimation(image: HTMLImageElement) {
        this.image = image;
    }
    public setNumOfImage(val: number): void {
        this.numOfImage = val;
    }
    public getImage(): HTMLImageElement {
        return this.image; 
    }
    public getWidth(): number {
        return this.width;
    }
    public getHeight(): number {
        return this.height;
    }
    public render(): void {
        let position: Vector2D = this.gameObject.getPosition();
        let angle: number = this.gameObject.getAnglePhysic();
        for (let i = 0; i < this.numOfImage; i++) {
            ctx.save();
            ctx.translate(position.X + this.width * i + this.width / 2, position.Y + this.height / 2);
            if (angle) ctx.rotate(angle * Math.PI / 180);
            ctx.drawImage(this.image, -this.width / 2, -this.height / 2, this.width, this.height);
            ctx.restore();
        }
    }
}