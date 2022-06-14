import { GameObject } from "../../objects/GameObject";
import { Sprite } from "../../renders/Sprite";
import { DISTANCE, MAXDIGIT } from "../../utils/Constant";
import { Vector2D } from "../../utils/Vector2D";
import { SingleDigit } from "./SingleDigit";

export class Digits extends GameObject {
    private value: number;
    private digits: Array<SingleDigit>;
    constructor(position: Vector2D) {
        super(position);
        this.digits = [];
        this.value = 0;
        for (let i = 0; i < MAXDIGIT; i++)
            this.digits.push(new SingleDigit(
            new Vector2D(position.X + i * DISTANCE, position.Y), -1));
        this.setNumber(this.value);
    }
    public getNumber(): number {
        return this.value;
    }
    public getAllSprite(): Array<Sprite> {
        return this.digits.filter((digit) => digit.getValue() != -1)
        .map((digit) => { return digit.getSprite(); });
    }
    public update(time: number, delta: number): void {}
    public setNumber(value: number): void {
        this.value = value;
        let tempString: string = value.toLocaleString();
        for (let i = 0; i < tempString.length; i++)
            this.digits[i].setNumber(Number(tempString[i]));
    }
    public changePosition(x: number, y: number) {
        for (let i = 0; i < this.digits.length; i++)
            this.digits[i].setPosition(x + i * DISTANCE, y);
    }
}