import { Sprite } from "./Sprite";

export class Animation {
    private frames: Array<HTMLImageElement>;
    private idx: number;
    private delay: number;
    private timeOut: number;
    private sprite: Sprite;
    private running: boolean;
    constructor(delay: number, sprite: Sprite) {
        this.frames = [];
        this.idx = 0;
        this.delay = delay;
        this.timeOut = 0;
        this.sprite = sprite;
        this.running = true;
    }
    public addFrame(image: HTMLImageElement): void {
        this.frames.push(image);
    }
    public getFrame(idx: number): HTMLImageElement {
        return this.frames[idx];
    }
    public setRunning(val: boolean): void {
        this.running = val;
    }
    public update(time: number, delta: number): void {
        if(this.running) {
            this.idx += 1;
            this.sprite.setAnimation(this.frames[Math.floor(this.idx / this.delay) % this.frames.length]);
            this.timeOut += delta;
            if (this.timeOut >= this.delay) this.timeOut -= this.delay;
        }
    }
}