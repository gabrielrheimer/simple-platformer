import { Colors } from "../Color";
import { MovableElement } from "./MovableElement";

let player: Player = undefined;

export class Player extends MovableElement {
    /** @see Player.getInstance should be called to get Singleton instance of Player */
    private constructor () { 
        super();
        player = this; 
    }

    public height = 25;
    public width = 25;
    public posX = 200;
    public posY = 200;
    public color = Colors.CHARACTER_GREEN;

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
}