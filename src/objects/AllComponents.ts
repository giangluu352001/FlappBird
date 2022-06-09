import { GameObject } from "./GameObject";

export class AllComponents {
    private gameObject: GameObject;
    constructor() {
        this.gameObject = new GameObject();
        this.gameObject.addObject(this);
    }
}