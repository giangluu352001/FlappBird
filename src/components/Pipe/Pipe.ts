import { CANVASWIDTH } from "../../utils/Constant";
import { GameObject } from "../../objects/GameObject";
import { Vector2D } from "../../utils/Vector2D";
import { Physic } from "../../physic/Physic";
export class Pipe extends GameObject {
    constructor(x: number, y: number) {
        super(new Vector2D(x, y));
        this.physic = new Physic(this);
        this.physic.setVelocity(Math.round(CANVASWIDTH * 0.2), 0);
    }
    public update(time: number, delta: number): void {
        this.physic?.update(time, -delta);
    }
    public stop(): void {
        this.physic?.setVelocity(0, 0);
    }
}


/*export function update(pipe: Pipe, pipes: Pipe[], bird: Bird, gameState: GameState): void {
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
}*/
