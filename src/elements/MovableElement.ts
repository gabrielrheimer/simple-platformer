import { Colors } from "../Color";
import { Element, IElement } from "./Element";

export interface IMovableElement extends IElement {
    maximumSpeed: number,
    speedX: number,
    speedY: number,
    accelerationX: number,
    accelerationY: number,
}

export class MovableElement extends Element {
    constructor(
        posX: number,
        posY: number,
        width: number,
        height: number,
        color: Colors,
        public maximumSpeed: number,
        public accelerationX: number,
        public accelerationY: number
        ) {
            super(posX, posY, width, height, color);
        }
        
    public friction: number = 0.9;
    public speedX: number = 0;
    public speedY: number = 0;

    // private previousFrame: IMovableElement = undefined;
    // private currentFrame: IMovableElement = this.getElement();

    // public refreshFrameReference(): void {
    //     this.previousFrame = this.currentFrame;
    //     this.previousFrame = this.getElement();
    // }

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
        this.color = Colors.SURFACE_BROWN;
    }
    
    public moveRight(): void {
        this.speedX = this.speedX + this.accelerationX;
        this.speedX = this.speedX > this.maximumSpeed ? this.maximumSpeed : this.speedX;
    }

    public moveLeft(): void {
        this.speedX = this.speedX - this.accelerationX;
        this.speedX = this.speedX < -this.maximumSpeed ? -this.maximumSpeed : this.speedX;
    }

    public fillPosition(): void {
        this.posX += this.speedX;
        this.speedX *= this.friction;
    }
}