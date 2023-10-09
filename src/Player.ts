import { context } from ".";
import { Colors } from "./Colors";
import { IElement } from "./Scenario";

let player: Player = undefined;

export class Player {
    /** @see Player.getInstance should be called to get Singleton instance of Player */
    private constructor () { player = this }

    public height = 25;
    public width = 25;
    public posX = 200;
    public posY = 200;
    public color = Colors.CHARACTER_GREEN;

    private element: IElement = {
        height: this.height,
        width: this.width,
        posX: this.posX,
        posY: this.posY,
        color: this.color
    };

    public maximumSpeed = 5;
    public speedY = 1;
    public speedX = 1;
    public accelerationX = 0.4;
    public accelerationY = 0.4;
    
    /** @returns Singleton instance of Player */
    public static getInstance(): Player {
        if (player) {
            return player;
        } else {
            return new Player();
        }
    }

    public getElement(): IElement {
        return this.element;
    }

    public drawPlayer(): void {
        context.fillStyle = this.color;
        context.fillRect(this.posX, this.posY, this.width, this.height);
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