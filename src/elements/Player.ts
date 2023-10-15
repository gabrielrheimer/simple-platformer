import { Colors } from "../Color";
import { MovableElement } from "./MovableElement";

let player: Player = undefined;

export class Player extends MovableElement {
    /** @see Player.getInstance should be called to get Singleton instance of Player */
    private constructor () { 
        super(
            Player.DEFAULT_POSITION.posX,
            Player.DEFAULT_POSITION.posY,
            Player.WIDTH,
            Player.HEIGHT,
            Player.COLOR,
            Player.MAXIMUM_SPEED,
            Player.DEFAULT_ACCELERATION,
            Player.DEFAULT_ACCELERATION
        );
        player = this;
    }

    public static WIDTH = 25;
    public static HEIGHT = 25;
    public static DEFAULT_POSITION = { posX: 200, posY: 200 };
    public static COLOR = Colors.CHARACTER_GREEN; 
    public static DEFAULT_SPEED = 0;
    public static MAXIMUM_SPEED = 10;
    public static DEFAULT_ACCELERATION = 0.5;  
    
    /** @returns Singleton instance of Player */
    public static getInstance(): Player {
        if (player) {
            return player;
        } else {
            return new Player();
        }
    }
}