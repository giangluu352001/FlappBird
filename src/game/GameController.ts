import { Input } from "../input/Input";
import { CANVASHEIGHT, CANVASWIDTH } from "../utils/Constant";
import { State } from "../utils/Enum";
import { Scene } from "../components/Scene/Scene";

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
    public getState(): State {
        return this.state;
    }
    public setState(val: State) {
        this.state = val;
    }
    public getScene(): Scene {
        return this.scene;
    }
    protected gameOver(): void {
        this.state = State.Ended;
        this.scene.setVisibles("GameOver", true);
        this.scene.setVisibles("Restart", true);
        this.scene.setVisibles("TableScore", true);
        this.scene.changePosScore(this.scene.getScore(), CANVASWIDTH * 0.51, CANVASHEIGHT * 0.31);
        Scene.setVisibleBest();
        this.scene.stop();
        clearTimeout(this.scene.timer);
    }
    public playGame(): void {
        this.state = State.Playing;
        this.scene.getBird().jum();
        this.scene.timer = setTimeout(() => this.scene.addPipes(), 3000);
    }
    public resetGame(): void {
        this.state = State.Waiting;
        this.scene = new Scene();
    }
}