import { BIRDHEIGHT, CANVASHEIGHT, CANVASWIDTH, LAND } from "../../utils/Constant";
import { allImage } from "../../utils/ImageLoading";
import { Vector2D } from "../../utils/Vector2D";
import { GameObject } from "../../objects/GameObject";
import { Sprite } from "../../renders/Sprite";
import { Physic } from "../../physic/Physic";
import { Animation } from "../../renders/Animation";
export class Bird extends GameObject {
    private animation: Animation;
    private isPlay: boolean;
    constructor() {
        super(new Vector2D(CANVASWIDTH * 0.45, CANVASHEIGHT * 0.5));
        this.sprite = new Sprite(this);
        this.animation = new Animation(6, this.sprite)
        this.animation.addFrame(allImage.get("bird0"));
        this.animation.addFrame(allImage.get("bird2"));
        this.animation.addFrame(allImage.get("bird1"));
        let image: HTMLImageElement = this.animation.getFrame(0);
        this.sprite.setImage(image, image.width, image.height);
        this.physic = new Physic(this);
        this.isPlay = false;
    }
    public stop(): void {
        this.physic?.setVelocity(0, 0);
    }
    public getPhysic(): Physic {
        return this.physic!;
    }
    /*public update(state: State): boolean {
        this.countChange++;
        if (this.countChange >= 25) {
            this.countChange = 0;
        }
        if(state == State.Playing) { 
            this.setRotation();
            this.speed += this.gravity;
            if(this.speed > 8) this.speed = 8;
            if(this.speed < -4) this.speed = -4;
            this.position.setY(this.position.Y + this.speed);
        }
        else if(state == State.Ended) {
            this.countChange = 0;
            this.angle = 90;
            if(this.position.Y + 16 < 480) {
                this.position.setY(this.position.Y + this.speed);
                this.setRotation();
                this.speed += this.gravity * 2;
            }
            else this.speed = 0;
        }
        return false;
    }*/
    public update(time: number, delta: number): void {
        this.animation.update(time, delta);
        if (this.position.Y + BIRDHEIGHT > LAND) {
            this.position.setY(LAND - BIRDHEIGHT);
            this.physic?.setVelocity(0, 0);
        }
        if (this.isPlay) {
            let angle: number = this.physic.getAngle();
            this.physic?.setAngle(angle + 1);
        }
        this.physic?.update(time, delta);
    }
    public dying(): void {
        this.isPlay = false;
        this.physic?.setVelocity(0, 300);
        this.animation.setRunning(false);
        this.physic?.setAngle(90);
    }
    public jum(): void {
        this.physic?.setVelocity(0, -400);
        this.physic?.setForce(0, 1.5);
        this.physic?.setAngle(-25);
        this.isPlay = true;
    }
}