import { GameObject } from "../objects/GameObject";
import { Vector2D } from "../../utils/Vector2D";
export function collision(obj1: GameObject, obj2: GameObject) {
    let pos1: Vector2D = obj1.getPosition();
    let pos2: Vector2D = obj2.getPosition();
    if (
        pos1.X < pos2.X + obj2.getSprite().getWidth() &&
        pos1.X + obj1.getSprite().getWidth() > pos2.X &&
        pos1.Y < pos2.Y + obj2.getSprite().getHeight() &&
        pos1.Y + obj1.getSprite().getHeight() > pos2.Y
    ) return true;
}