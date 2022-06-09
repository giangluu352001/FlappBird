import { BackGround } from "../components/BackGround";
import { Bird } from "../components/Bird";
import { ForeGround } from "../components/ForeGround";
import { Pipe, update } from "../components/Pipe";
import { Score } from "../components/Score";
import { Title } from "../components/Title";
import { Input } from "../input/Input";
import { canvas, ctx } from "../utils/Canvas";
import { CANVASHEIGHT, CANVASWIDTH } from "../utils/Constant";
import { allImage } from "../utils/ImageLoading";
import { Key, State } from "../utils/Enum";

export class GameState {
    private static state: State;
    private static bestscore: number = 0;
    private score: Score;
    private static instance: GameState;
    private foreground: ForeGround;
    private title: Title;
    private bird: Bird;
    private pipes: Pipe[];
    private background: BackGround;
    public static getState(): State {
        return GameState.state;
    }
    public static getInstance(): GameState {
        return GameState.instance ? GameState.instance : new GameState();
    }
    private constructor(){
        GameState.state = State.Waiting;
        this.background = new BackGround();
        this.foreground = new ForeGround();
        this.bird = new Bird();
        this.title = new Title();
        this.pipes = [];
        this.score = new Score;
    }
    public static setBestcore(val: number): void {
        GameState.bestscore = val;
    }
    public static getBestcore(): number {
        return GameState.bestscore;
    }
    public getBird(): Bird {
        return this.bird;
    }
    public getScore(): Score {
        return this.score;
    }
    public update(time: number, delta: number): void {
        this.bird.update();
        if (GameState.getState() != State.Ended) {
            this.foreground.update();
        }
        if(GameState.state == State.Playing) 
            this.pipes.forEach(val => {
                update(val, this.pipes, this.bird, this);
            });
    }
    public static setState(val: State) {
        GameState.state = val;
    }
    public clearPipes(): void {
        this.pipes = [];
    }
    public getPipes(): Pipe[] {
        return this.pipes;
    }
    public clearBird(): void {
        this.bird = new Bird();
    }
    public progressInput(): void {
        if(Input.getCode() == Key.SPACE) {
            if(GameState.state == State.Waiting) {
                GameState.state = State.Playing;
                this.pipes[0] = new Pipe()
            }
            else if(GameState.state == State.Ended) {
                this.resetGame();
            }
            this.getBird().jum();
        }
        else if(Input.getCode() == Key.HIT) {
            if(Input.getPos().X >= CANVASWIDTH * 0.45 && Input.getPos().X  <= CANVASWIDTH * 0.45 + 80 
            &&  Input.getPos().Y  >= CANVASHEIGHT * 0.5 && Input.getPos().Y  <= CANVASHEIGHT * 0.5 + 40) {
                this.resetGame();
            }
        }
        Input.setCode(Key.NULL);
    }
    public render(): void {
        this.background.render();
        if(GameState.getState() == State.Waiting)
            this.title.render();
        else if(GameState.state == State.Playing || State.Ended) {
            this.pipes.forEach(val => val.render());
            if(GameState.getState() == State.Ended) {
                drawGameOver();
                this.drawBestcore();
            }
            else this.score.render();
        }
        this.bird.render();
        this.foreground.render();
    }
    
    public drawBestcore(): void {
        ctx.drawImage(allImage.get("best"), canvas.width * 0.45, canvas.height * 0.25);
        ctx.font = "20px Comic Sans MS";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(`${this.score.getValue()}`, canvas.width * 0.52, canvas.height * 0.33);
        ctx.fillText(`${GameState.bestscore}`, canvas.width * 0.52, canvas.height * 0.4);
    }
    public resetGame(): void {
        GameState.setState(State.Waiting);
        this.clearPipes();
        this.score.setScore(0);
        this.clearBird();
    }
    
}
function drawGameOver(): void {
    ctx.drawImage(allImage.get("gameover"), canvas.width * 0.35, canvas.height * 0.1);
    ctx.drawImage(allImage.get("restart"), 0, 0, 167, 58, canvas.width * 0.45, canvas.height * 0.5, 80, 40);
}
