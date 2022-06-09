import { CANVASHEIGHT, CANVASWIDTH } from "./Constant";

export class Canvas {
    private canvas: HTMLCanvasElement;
    constructor(width: number, height: number) {
        this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
        this.canvas.width = width;
        this.canvas.height = height;
    }
    public getCanvas(): HTMLCanvasElement {
        return this.canvas;
    }
    public getContext(): CanvasRenderingContext2D{
        return <CanvasRenderingContext2D>this.canvas.getContext("2d");
    }
}
var cans: Canvas = new Canvas(CANVASWIDTH, CANVASHEIGHT);
var canvas: HTMLCanvasElement =  cans.getCanvas();
var ctx: CanvasRenderingContext2D = cans.getContext();
export {canvas, ctx};
