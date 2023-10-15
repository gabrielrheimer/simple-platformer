import { context } from ".";
import { Canvas } from "./Canvas";
import { Controller } from "./Controller";
import { Element } from "./elements/Element";
import { Player } from "./elements/Player";

export class Scenario {
    private surfaces: Element[] = [];

    public addSurface(surface: Element): void {
        this.surfaces.push(surface);
    }
    
    public addSurfaces(surfaces: Element[]): void {
        surfaces.forEach(surface => this.addSurface(surface));
    }

    public drawScenario(): void {
        this.surfaces.forEach(surface => {
            surface.drawElement();

            const collisionDetected = Controller.collisionDetector(Player.getInstance().getElement(), surface);
            if (collisionDetected) {
                Player.getInstance().resolveCollision();
            }
        });
    }

    public static clear(): void {
        context.clearRect(0, 0, Canvas.WIDTH, Canvas.HEIGHT);
    }
}