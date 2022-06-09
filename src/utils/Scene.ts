export abstract class Scene {
    public width: number;
    public height: number;
    protected image: HTMLImageElement;
    constructor(height: number, width: number, image: HTMLImageElement) {
        this.height = height;
        this.width = width;
        this.image = image;
    }
    abstract render(): void;
}