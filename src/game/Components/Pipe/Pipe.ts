import { CANVASWIDTH } from "../../../utils/Constant";
import { GameObject } from "../../../engine/objects/GameObject";
import { Vector2D } from "../../../utils/Vector2D";
import { Physic } from "../../../engine/physic/Physic";
export class Pipe extends GameObject {
    constructor(x: number, y: number) {
        super(new Vector2D(x, y));
        this.physic = new Physic(this);
        this.physic.setVelocity(Math.round(CANVASWIDTH * 0.2), 0);
    }
    public update(time: number, delta: number): void {
        this.physic?.update(time, -delta);
    }
    public stop(): void {
        this.physic?.setVelocity(0, 0);
    }
}