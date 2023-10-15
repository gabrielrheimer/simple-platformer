import { context } from "..";
import { Colors } from "../Color";

export interface ISize {
    width: number,
    height: number
}

export interface IElement extends ISize {
    posX: number,
    posY: number,
    color: Colors
}

export class Element {
    constructor(public posX: number, public posY: number, public width: number, public height: number, public color: Colors) {
    }

    public getElement(): IElement {
        return {
            posX: this.posX,
            posY: this.posY,
            width: this.width,
            height: this.height,
            color: this.color
        };
    }

    public drawElement(): void {
        context.fillStyle = this.color;
        context.fillRect(this.posX, this.posY, this.width, this.height);
    }
}