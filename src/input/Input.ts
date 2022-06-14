import { canvas } from "../utils/Canvas";
import { CANVASHEIGHT, CANVASWIDTH } from "../utils/Constant";
import { Key } from "../utils/Enum";

export class Input {
    private code: Key = Key.NULL;
    private static instance: Input;
    public static getInstance(): Input {
        return Input.instance ? Input.instance : new Input();
    }
    public getCode(): Key {
        return this.code;
    }
    public setCode(val: Key) {
        this.code = val;
    }
    public start(): void {
        document.body.addEventListener("keydown", (e: KeyboardEvent) => {
            if(e.code == "Space") this.code = Key.SPACE;
        });
        canvas.addEventListener("click", (event) => {
            if(event.offsetX >= CANVASWIDTH * 0.45 && event.offsetX  <= CANVASWIDTH * 0.45 + 80 
            && event.offsetY  >= CANVASHEIGHT * 0.53 && event.offsetY  <= CANVASHEIGHT * 0.53 + 40)
            this.code =  Key.HIT;
        });
    }
}