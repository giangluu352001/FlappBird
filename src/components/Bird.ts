import { GameState } from "../game/GameState";
import { ctx } from "../utils/Canvas";
import { CANVASHEIGHT, CANVASWIDTH } from "../utils/Constant";
import { allImage } from "../utils/ImageLoading";
import { State } from "../utils/Enum";
import { Vector2D } from "../utils/Vector2D";
export class Bird {
    private position: Vector2D;
    private speed: number;
    private gravity: number;
    private image: HTMLImageElement[];
    private countChange: number;
    private angle: number;
    constructor() {
        this.position = new Vector2D(CANVASWIDTH * 0.45, CANVASHEIGHT * 0.5);
        this.speed = 5;
        this.gravity = 0.25;
        this.countChange = 0;
        this.angle = 2;
        this.image = allImage.getAll("bird");
    }
    public setPosition(x: number, y: number): void {
        this.position.setX(x);
        this.position.setY(y);
    }
    public getPosition(): Vector2D {
        return this.position;
    }
    public update(): void {
        this.countChange++;
        if (this.countChange >= 25) {
            this.countChange = 0;
        }
        if(GameState.getState() == State.Playing) { 
            this.setRotation();
            this.speed += this.gravity;
            if(this.speed > 8) this.speed = 8;
            if(this.speed < -4) this.speed = -4;
            this.position.setY(this.position.Y + this.speed);
        }
        else if(GameState.getState() == State.Ended) {
            this.countChange = 0;
            this.angle = 90;
            if(this.position.Y + 16 < 480) {
                this.position.setY(this.position.Y + this.speed);
                this.setRotation();
                this.speed += this.gravity * 2;
            }
            else this.speed = 0;
        }
    }
    public jum(): void {
        this.speed -= 30;
    }
    public setRotation(): void {
        if(this.speed > 4)
            this.angle = Math.min(90, 6 + this.angle);
        else {
            this.angle = Math.max(-25, this.angle - 5);
        }
    }  
    public render(): void {
        ctx.save();
        ctx.translate(this.position.X + 24, this.position.Y);
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.drawImage(this.image[Math.floor(this.countChange / 7) % 3], -24, -24);
        ctx.restore();
    }
}