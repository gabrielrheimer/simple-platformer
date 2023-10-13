import { Colors } from "../Color";
import { Element, IElement } from "./Element";

export interface IMovableElement extends IElement {
    maximumSpeed: number,
    speedY: number,
    speedX: number,
    accelerationX: number,
    accelerationY: number,
}

export class MovableElement extends Element {
    constructor(
        height: number,
        width: number,
        posX: number,
        posY: number,
        color: Colors,
        public maximumSpeed: number,
        public speedY: number,
        public speedX: number,
        public accelerationX: number,
        public accelerationY: number
    ) {
        super(height, width, posX, posY, color);
    }

    public getElement(): IMovableElement {
        return {
            ...super.getElement(),
            maximumSpeed: this.maximumSpeed,
            speedY: this.speedY,
            speedX: this.speedX,
            accelerationX: this.accelerationX,
            accelerationY: this.accelerationY
        }
    }

    public resolveCollision(): void {
        //
    }
    
    public moveRight(): void {
        this.posX += this.speedX;
        if (this.speedX < this.maximumSpeed) this.speedX += this.accelerationX;
    }

    public moveLeft(): void {
        this.posX -= this.speedX;
        if (this.speedX < this.maximumSpeed) this.speedX += this.accelerationX;
    }
}