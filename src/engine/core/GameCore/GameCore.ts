import { Digits } from "../../../game/Components/Number/Digits";
import { Key, State } from "../../../utils/Enum";
import { GameController } from "../GameController/GameController";

class GameCore extends GameController {
    private static instance: GameCore;
    public static getInstance(): GameCore {
        return GameCore.instance ? GameCore.instance : new GameCore();
    }
    private constructor() {
        super();
    }
    public progressInput(): void {
        if(this.input.getCode() == Key.SPACE) {
            if(this.state == State.Waiting)
                this.playGame();
            else if(this.state == State.Ended)
                this.resetGame();
            else this.scene.getBird().jum();
        }
        else if(this.input.getCode() == Key.HIT && this.state == State.Ended) {
                this.resetGame();
        }
        this.input.setCode(Key.NULL);
    }
    public update(time: number, delta: number): void {
        for (let object of this.scene.getObjects())
            object.gameObject.update(time, delta);
        if(this.state == State.Playing && this.scene.checkCollision())
            this.gameOver();
    }
    public render(): void {
        for (let object of this.scene.getEnabledObjects()) {
            if (object.gameObject instanceof Digits)
                object.gameObject.getAllSprite().forEach((sprite) => sprite.render());
            else object.gameObject.getSprite().render();
        }
    }
}
export const gameCore = GameCore.getInstance();