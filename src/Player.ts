import { context } from ".";
import { Colors } from "./Colors";

let player: Player = undefined;

export class Player {
    /** @see Player.getInstance should be called to get Singleton instance of Player */
    private constructor () { player = this }

    private height = 25;
    private width = 25;
    private posX = 200;
    private posY = 200;
    private color = Colors.CHARACTER_GREEN;
    
    /** @returns Singleton instance of Player */
    public static getInstance(): Player {
        if (player) {
            return player;
        } else {
            return new Player();
        }
    }

    public drawPlayer(): void {
        context.fillStyle = this.color;
        context.fillRect(this.posX, this.posY, this.width, this.height);
    }

    public moveRight(): void {
        this.posX += 1;
    }

    public moveLeft(): void {
        this.posX -= 1;
    }

    public moveDown(): void {
        this.posY -= 1;
    }
}