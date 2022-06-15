import { GameObject } from "../../objects/GameObject";

export class GameState {
    protected objects: Array<{gameObject: GameObject, priority: number}> = [];
    protected addObject(...objects: {gameObject: GameObject, priority: number}[]) {
        this.objects.push(...objects);
        this.objects.sort((a, b) => (a.priority < b.priority ? -1 : 1));
    }
    public getObjects(): Array<{gameObject: GameObject, priority: number}> {
        return this.objects;
    }
    public getEnabledObjects(): Array<{gameObject: GameObject, priority: number}> {
        return this.objects.filter((object) => object.gameObject.getEnabled() == true);
    }
    public setEnables(value: boolean, ...gameObjects: Array<GameObject>): void {
        gameObjects.forEach((object) => object.setEnable(value));
    }
    public setAllVisibled(value: boolean, ...names: Array<string>) {
        names.forEach((name) => this.objects.find((object) => 
        object.gameObject.constructor.name == name)?.gameObject.setEnable(value))
    }
    public removeObject(gameObject: GameObject) {
        this.objects = this.objects.filter((object) => object.gameObject != gameObject);
    }
}

