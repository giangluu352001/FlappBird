import { BackGround } from "../Components/Ground/BackGround";
import { Bird } from "../Components/Bird/Bird";
import { ForeGround } from "../Components/Ground/ForeGround";
import { GameOver } from "../Components/GameOver/GameOver";
import { PipeDown } from "../Components/Pipe/PipeDown";
import { PipeUp } from "../Components/Pipe/PipeUp";
import { Restart } from "../Components/GameOver/Restart";
import { Digits } from "../Components/Number/Digits";
import { TableScore } from "../Components/GameOver/TableScore";
import { collision } from "../../engine/physic/Collision";
import { BIRDHEIGHT, BIRDWIDTH, CANVASHEIGHT, CANVASWIDTH, LAND, PIPEWIDTH } from "../../utils/Constant";
import { GameState } from "../../engine/core/GameCore/GameState";
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
    public getScore(): Digits {
        return this.score;
    }
    public increaseScore(): void {
        this.score.setNumber(this.score.getNumber() + 1);
    } 
    public assignBestScore(): void {
        Scene.bestScore.setNumber(
        Math.max(Scene.bestScore.getNumber(), 
        this.score.getNumber()));
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
        this.stopPipe();
        this.foreground.stop();
        this.bird.dying();
    }
    public pause(): void {
        clearTimeout(this.timer);
        this.stopPipe();
        this.bird.pause();
        this.foreground.stop();
    }
    public resume(): void {
        this.pipes.forEach((pipe) => {
            pipe[0].resume();
            pipe[1].resume();
        });
        this.timer = setTimeout(() => this.addPipes(), 1500);
        this.foreground.resume();
        this.bird.resume();
    }
    public start(bool: boolean): void {
        this.bird.jum();
        if(bool) this.timer = setTimeout(() => this.addPipes(), 3000);
    }
    public checkCollisionAndInscrease(): boolean {
        let birdPos: Vector2D = this.bird.getPosition();
        if(this.bird.getPosition().Y + BIRDHEIGHT >= LAND) return true;
        for (let pipe of this.pipes) {
            let pipePos: Vector2D = pipe[0].getPosition();
            if (Math.floor(birdPos.X) == Math.ceil(pipePos.X)) {
                this.increaseScore();
                this.assignBestScore();
            }
            if ((birdPos.Y <= pipePos.Y && birdPos.X + BIRDWIDTH >= pipePos.X) || 
            collision(this.bird, pipe[0]) || collision(this.bird, pipe[1]))
                return true;
            if(pipePos.X + PIPEWIDTH < 0) {
                this.removePipe(pipe);
            }
        }
        return false;
    }
    private removePipe(pipe: [PipeUp, PipeDown]) {
        this.removeObject(pipe[0]);
        this.removeObject(pipe[1]);
        this.pipes.splice(this.pipes.indexOf(pipe), 1);
    }
    private stopPipe(): void {
        this.pipes.forEach((pipe) => {
            pipe[0].stop();
            pipe[1].stop();
        });
    }
}