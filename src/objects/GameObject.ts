import { Vector2D } from "../utils/Vector2D";
import { AllComponents } from "./AllComponents";

export class GameObject {
    private objects: {[key: string]: AllComponents};
    private position: Vector2D;
    private enabled: boolean;
    constructor() {
        this.objects = {};
        this.position = new Vector2D(0, 0);
        this.enabled = true;
    }
    public setEnable(val: boolean): void {
        this.enabled = val;
    }
    public addObject(object: AllComponents): void {
        this.objects[object.constructor.name] = object;
    }

}