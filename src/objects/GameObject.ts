import { Vector2D } from "../utils/Vector2D";
import { Physic } from "../physic/Physic";
import { Sprite } from "../renders/Sprite";

export abstract class GameObject {
    protected position: Vector2D;
    private enabled: boolean;
    protected sprite!: Sprite;
    protected physic!: Physic;
    constructor(position: Vector2D) {
        this.position = position;
        this.enabled = true;
    }
    public setEnable(val: boolean): void {
        this.enabled = val;
    }
    public getPosition(): Vector2D { 
        return this.position;
    }
    public getSprite(): Sprite {
        return this.sprite!;
    }
    public getEnabled(): boolean {
        return this.enabled;
    }
    public getAnglePhysic(): number {
        if(this.physic) return this.physic.getAngle();
        else return 0;
    }
    public setPosition(x: number, y: number) {
        this.position.setX(x);
        this.position.setY(y);
    }
    public abstract update(time: number, delta: number): void;
}