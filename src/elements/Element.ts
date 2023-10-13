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
    constructor(public height: number, public width: number, public posX: number, public posY: number, public color: Colors) {
    }

    public getElement(): IElement {
        return {
            height: this.height,
            width: this.width,
            posX: this.posX,
            posY: this.posY,
            color: this.color
        };
    }

    public drawElement(): void {
        context.fillStyle = this.color;
        context.fillRect(this.posX, this.posY, this.width, this.height);
    }
}