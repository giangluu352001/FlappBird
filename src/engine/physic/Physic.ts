import { Vector2D } from "../../utils/Vector2D";
import { GameObject } from "../objects/GameObject";
import { Object } from "../objects/Object";
export class Physic extends Object {
    protected velocity: Vector2D;
    protected force: Vector2D;
    protected angle: number;
    constructor(gameObject: GameObject) {
        super(gameObject);
        this.velocity = new Vector2D(0, 0);
        this.force = new Vector2D(0, 0);
        this.angle = 0;
    }
    public setVelocity(x: number, y: number): void {
        this.velocity.setX(x);
        this.velocity.setY(y);
    }
    public setAngle(val: number): void {
        this.angle = val;
    }
    public getAngle(): number {
        return this.angle;
    }
    public setForce(x: number, y: number): void {
        this.force.setX(x);
        this.force.setY(y);
    }
    public getVelocity(): Vector2D {
        return this.velocity;
    }
    public update(time: number, delta: number): void {
        let position: Vector2D = this.gameObject.getPosition();
        position.setX(position.X + this.velocity.X * delta / 1000);
        position.setY(position.Y + this.velocity.Y * delta / 1000);
        this.velocity.setY(this.velocity.Y + this.force.Y * delta);
    }
}