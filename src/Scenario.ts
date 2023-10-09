import { context } from ".";
import { Canvas } from "./Canvas";
import { Colors } from "./Colors";

export interface ISize {
    width: number,
    height: number
}

export interface IThing extends ISize{
    posX: number,
    posY: number,
    color: Colors
}

export interface ISurface extends IThing {}

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
        });
    }

    public static clear(): void {
        context.clearRect(0, 0, Canvas.WIDTH, Canvas.HEIGHT);
    }
}