export class Vector2D {
    constructor(
        private x: number,
        private y: number
    ) {}
    public get X(): number {
        return this.x;
    }
    public get Y(): number {
        return this.y;
    }
    public setX(val: number): void  {
        this.x = val;
    }
    public setY(val: number): void {
        this.y = val;
    }
}