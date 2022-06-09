import { ctx } from "../utils/Canvas";
import { CANVASHEIGHT, CANVASWIDTH } from "../utils/Constant";
import { allImage } from "../utils/ImageLoading";

export class Score {
    private score: number = 0;
    public setScore(score: number): void {
        this.score = score;
    }
    public getValue(): number {
        return this.score;
    }
    public render(): void {
        if(this.score <= 9)
            ctx.drawImage(allImage.get(`${this.score}`), CANVASWIDTH * 0.5, CANVASHEIGHT * 0.1);
        else {
            let tempScore = this.score;
            let i = 0;
            while(tempScore / 10) { 
                tempScore = Math.floor (tempScore / 10);
                ctx.drawImage(allImage.get(`${tempScore % 10}`), CANVASWIDTH * 0.5 - i, CANVASHEIGHT * 0.1);
                i += 24;
            }
        }
    }
}