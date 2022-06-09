import { GameState } from "../game/GameState";
import {canvas, ctx} from "../utils/Canvas";
import { CANVASWIDTH, PIPEHEIGHT, PIPEWIDTH, BIRDWIDTH, LAND } from "../utils/Constant";
import { allImage } from "../utils/ImageLoading";
import { State } from "../utils/Enum";
import { Bird } from "./Bird";
import { Score } from "./Score";

export class Pipe {
    private image: HTMLImageElement[];
    public x: number;
    public y: number;
    public speed: number;
    public gap: number;
    constructor() {
        this.y = -110 * Math.min(Math.random() + 1, 1.5);
        this.image = allImage.getAll("pipe");
        this.x = CANVASWIDTH;
        this.speed = Math.round(CANVASWIDTH * 0.002);
        this.gap = Math.random() * 50 + 100;
    }
    public render(): void {
        ctx.drawImage(this.image[0], this.x, this.y)
        ctx.drawImage(this.image[1], this.x, this.y + PIPEHEIGHT + this.gap);
    }
}

export function update(pipe: Pipe, pipes: Pipe[], bird: Bird, gameState: GameState): void {
    pipe.x -= pipe.speed;
    if(pipe.x + PIPEWIDTH < 0) {
        pipes.shift();
    }
    if(pipe.x == CANVASWIDTH / 1.5) {
        pipes.push(new Pipe());
    }
    if (!pipes.length) return;
    let x = pipe.x + pipe.speed;
    let y = pipe.y;
    let roof = y + PIPEHEIGHT;
    let floor = roof + pipe.gap;
    let bX: number = bird.getPosition().X;
    let bY: number = bird.getPosition().Y;
    if(bY >= LAND - BIRDWIDTH)
        GameState.setState(State.Ended);
    else if (bX + BIRDWIDTH >= x) {
        if(bX + BIRDWIDTH == x) {
            let score: Score = gameState.getScore();
            score.setScore(score.getValue() + 1);
            GameState.setBestcore(Math.max(score.getValue(), GameState.getBestcore()));
        }
        if (bX + BIRDWIDTH < x + PIPEWIDTH + 30) {
            if(bY <= roof || bY + BIRDWIDTH >= floor) {
                GameState.setState(State.Ended);
            }
        }
    }
}
