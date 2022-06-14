import { GameObject } from "./GameObject";

export class Object {
    protected gameObject: GameObject;
    constructor(gameObject: GameObject) {
        this.gameObject = gameObject;
    }
}