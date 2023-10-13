import { Element, IElement } from "./Element";

export interface IMovableElement extends IElement {
    maximumSpeed: number,
    speedY: number,
    speedX: number,
    accelerationX: number,
    accelerationY: number,
}

export class MovableElement extends Element {
    public maximumSpeed
    public speedY;
    public speedX;
    public accelerationX;
    public accelerationY;

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