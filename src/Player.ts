import { Colors } from "./Colors";

export class Player {
    constructor (private context: CanvasRenderingContext2D) {
    }

    private height = 50;
    private width = 50;
    private color = Colors.CHARACTER_GREEN;

    private posX = 200;
    private posY = 200;

    public drawCharacter(): void {
        this.context.fillStyle = this.color;
        this.context.fillRect(this.posX, this.posY, this.width, this.height);
    }
}