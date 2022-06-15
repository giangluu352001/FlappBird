import { Input } from "../../input/Input";
import { CANVASHEIGHT, CANVASWIDTH } from "../../../utils/Constant";
import { State } from "../../../utils/Enum";
import { Scene } from "../../../game/Scene/Scene";

export class GameController {
    protected scene: Scene;
    protected input: Input;
    protected state: State;
    constructor() {
        this.input = Input.getInstance();
        this.state = State.Waiting;
        this.scene = new Scene();
    }
    public start(): void {
        this.input.start();
    }
    protected gameOver(): void {
        this.state = State.Ended;
        this.scene.setAllVisibled(true, "GameOver", "Restart", "TableScore");
        this.scene.getScore().changePosition(CANVASWIDTH * 0.51, CANVASHEIGHT * 0.31);
        Scene.setVisibleBest();
        this.scene.stop();
        clearTimeout(this.scene.timer);
    }
    public playGame(bool: boolean): void {
        this.state = State.Playing;
        this.scene.start(bool);
    }
    public resetGame(): void {
        this.state = State.Waiting;
        this.scene = new Scene();
    }
}