import { BIRDHEIGHT, CANVASHEIGHT, CANVASWIDTH, LAND } from "../../../utils/Constant";
import { allImage } from "../../../utils/ImageLoading";
import { Vector2D } from "../../../utils/Vector2D";
import { GameObject } from "../../../engine/objects/GameObject";
import { Sprite } from "../../../engine/renders/Sprite";
import { Physic } from "../../../engine/physic/Physic";
import { Animation } from "../../../engine/renders/Animation";
export class Bird extends GameObject {
    private animation: Animation;
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
    }
    public stop(): void {
        this.physic?.setVelocity(0, 0);
    }
    public getPhysic(): Physic {
        return this.physic!;
    }
    public update(time: number, delta: number): void {
        this.animation.update(time, delta);
        if (this.position.Y + BIRDHEIGHT > LAND) {
            this.position.setY(LAND - BIRDHEIGHT);
            this.physic?.setVelocity(0, 0);
        }
        if (this.physic.getVelocity().Y > 300) {
            this.physic.setAngle(Math.min(90, this.getAnglePhysic() + 5));
        }
        this.physic?.update(time, delta);
    }
    public dying(): void {
        this.physic?.setVelocity(0, 300);
        this.animation.setRunning(false);
    }
    public jum(): void {
        this.physic?.setVelocity(0, -400);
        this.physic?.setForce(0, 1.5);
        this.physic?.setAngle(-25);
    }
}