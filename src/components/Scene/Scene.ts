import { BackGround } from "../Ground/BackGround";
import { Bird } from "../Bird/Bird";
import { ForeGround } from "../Ground/ForeGround";
import { GameOver } from "../GameOver/GameOver";
import { PipeDown } from "../Pipe/PipeDown";
import { PipeUp } from "../Pipe/PipeUp";
import { Restart } from "../GameOver/Restart";
import { Digits } from "../Number/Digits";
import { TableScore } from "../../components/GameOver/TableScore";
import { collision } from "../../physic/Collision";
import { BIRDHEIGHT, CANVASHEIGHT, CANVASWIDTH, LAND } from "../../utils/Constant";
import { GameState } from "../../game/GameState";
import { Vector2D } from "../../utils/Vector2D";

export class Scene extends GameState {
    private background: BackGround;
    private foreground: ForeGround;
    private bird: Bird;
    private score: Digits;
    private static bestScore: Digits = new Digits(new Vector2D(CANVASWIDTH * 0.51, CANVASHEIGHT * 0.41));
    private gameOver: GameOver;
    private restart: Restart;
    private tableScore: TableScore;
    private pipes: Array<[PipeUp, PipeDown]>;
    public timer!: NodeJS.Timeout;
    constructor() {
        super();
        this.background = new BackGround();
        this.foreground = new ForeGround();
        this.bird = new Bird();
        this.score = new Digits(new Vector2D(CANVASWIDTH * 0.5, CANVASHEIGHT * 0.1));
        this.gameOver = new GameOver();
        this.restart = new Restart();
        this.tableScore = new TableScore();
        this.setEnables(false, this.restart, this.gameOver, this.tableScore, Scene.bestScore);
        this.pipes = [];
        super.addObject(
            {gameObject: this.background, priority: 1},
            {gameObject: this.foreground, priority: 3}, 
            {gameObject: this.bird, priority: 4},
            {gameObject: this.gameOver, priority: 5},
            {gameObject: this.restart, priority: 5},
            {gameObject: this.tableScore, priority: 5},
            {gameObject: this.score, priority: 6},
            {gameObject: Scene.bestScore, priority: 6},
        );
    }
    public static setVisibleBest(): void {
        Scene.bestScore.setEnable(true);
    }
    public getBird(): Bird {
        return this.bird;
    }
    public getScore(): Digits {
        return this.score;
    }
    public increaseScore(): void {
        this.score.setNumber(this.score.getNumber() + 1);
    } 
    public assignBestScore(): void {
        Scene.bestScore.setNumber(Math.max(Scene.bestScore.getNumber(), this.score.getNumber()));
    }
    public changePosScore(digits: Digits, x: number, y: number): void {
        digits.changePosition(x, y);
    }
    public addPipes(): void {
        let pipeUp: PipeUp = new PipeUp();
        let pipeDown: PipeDown = new PipeDown();
        this.pipes.push([pipeUp, pipeDown]);
        super.addObject(
            {gameObject: pipeUp, priority: 2}, 
            {gameObject: pipeDown, priority: 2}
        );
        this.timer = setTimeout(() => this.addPipes(), 1500);
    }
    public stop(): void {
        this.pipes.forEach((pipe) => {
            pipe[0].stop();
            pipe[1].stop();
        });
        this.foreground.stop();
        this.bird.dying();
    }
    public checkCollision(): boolean {
        if(this.bird.getPosition().Y + BIRDHEIGHT >= LAND) return true;
        for (let pipe of this.pipes) {
            if (Math.floor(this.bird.getPosition().X) == Math.ceil(pipe[0].getPosition().X)) {
                this.increaseScore();
                this.assignBestScore();
            }
            if (collision(this.bird, pipe[0]) || collision(this.bird, pipe[1]))
                return true;
        }
        return false;
    }
}