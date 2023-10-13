import { canvas } from ".";

export class Canvas {
    public static HEIGHT = 400; 
    public static WIDTH = 1000;
    
    public static getCanvas() {
        return document.getElementById("canvas-new") as HTMLCanvasElement;
    }

    public static getContext() {
        return canvas.getContext("2d");
    }
    
    public static setSize() {
        canvas.width = Canvas.WIDTH;
        canvas.height = Canvas.HEIGHT;
    }
}