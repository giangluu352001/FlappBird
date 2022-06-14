import { NUMOFBIRD, NUMOFPIPE, NUMOFSCORE } from "./Constant";

class ImageLoading {
    private static instance: ImageLoading;
    private constructor(private images: Array<{name: string, image: HTMLImageElement}> = []) {}
    public push(name: string, src: string): void {
        let image = new Image();
        image.src = src;
        this.images.push({name: name, image: image});
    }
    public get(name: string): any {
        return this.images.find((image) => image.name == name)?.image;
    }
    public getAll(name: string): HTMLImageElement[] {
        return this.images.filter((image) => image.name.includes(name)).map(img => img.image);
    }
    public static getInstance(): ImageLoading {
        if(!ImageLoading.instance) return new ImageLoading();
        return ImageLoading.instance;

    }
}

export const allImage = ImageLoading.getInstance();
allImage.push("background", "images/bg.png");
allImage.push("foreground", "images/fg.png");
allImage.push("gameover", "images/text_game_over.png");
allImage.push("best", "images/best.png");
allImage.push("restart", "images/restart.png");
for (let i = 0; i < NUMOFBIRD; i++)
    allImage.push(`bird${i}`, `images/bird2_${i}.png`);
for (let i = 0; i < NUMOFPIPE; i++)
    allImage.push(`pipe${i}`, `images/pipe_${i}.png`);
for (let i = 0; i < NUMOFSCORE; i++)
    allImage.push(`${i}`, `images/${i}.png`);
