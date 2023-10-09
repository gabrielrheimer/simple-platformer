import { context } from ".";
import { Canvas } from "./Canvas";
import { Colors } from "./Colors";
import { Controller } from "./Controller";
import { Player } from "./Player";

export interface ISize {
    width: number,
    height: number
}

export interface IElement extends ISize{
    posX: number,
    posY: number,
    color: Colors
}

export interface ISurface extends IElement {}

export class Scenario {
    private surfaces: ISurface[] = [];

    public addSurface(surface: ISurface): void {
        this.surfaces.push(surface);
    }
    
    public addSurfaces(surfaces: ISurface[]): void {
        surfaces.forEach(surface => this.addSurface(surface));
    }

    public drawScenario(): void {
        this.surfaces.forEach(surface => {
            context.fillStyle = surface.color;
            context.fillRect(surface.posX, surface.posY, surface.width, surface.height);
        
            const player = Player.getInstance();
            const collisionDetected = Controller.collisionDetector(player.getElement(), surface);
            if (collisionDetected) {
                player.resolveCollision();
            }
        });
    }

    public static clear(): void {
        context.clearRect(0, 0, Canvas.WIDTH, Canvas.HEIGHT);
    }
}