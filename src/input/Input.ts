import { GameState } from "../game/GameState";
import { canvas } from "../utils/Canvas";
import { Key, State } from "../utils/Enum";
import { Vector2D } from "../utils/Vector2D";

export class Input {
    private static code: Key = Key.NULL;
    private static pos: Vector2D = new Vector2D(-100, -100);
    private static instance: Input;
    public static getInstance(): Input {
        return Input.instance ? Input.instance : new Input();
    }
    public static getCode(): Key {
        return Input.code;
    }
    public static getPos(): Vector2D {
        return Input.pos;
    }
    public static setCode(val: Key) {
        Input.code = val;
    }
    public static start(): void {
    document.body.addEventListener("keydown", (e: KeyboardEvent) => {
        if(e.code == "Space") Input.code = Key.SPACE;
    });
    canvas.addEventListener("click", (event) => {
        if(GameState.getState() == State.Ended) {
            Input.code = Key.HIT;
            Input.pos.setX(event.offsetX);
            Input.pos.setY(event.offsetY);
        }
    });
}
}