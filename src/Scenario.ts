import { context } from ".";
import { Canvas } from "./Canvas";
import { Controller } from "./Controller";
import { IElement } from "./elements/Element";
import { Player } from "./elements/Player";

export class Scenario {
    private surfaces: IElement[] = [];

    public addSurface(surface: IElement): void {
        this.surfaces.push(surface);
    }
    
    public addSurfaces(surfaces: IElement[]): void {
        surfaces.forEach(surface => this.addSurface(surface));
    }

    public drawScenario(): void {
        this.surfaces.forEach(surface => {
            // TBD - find out how to reuse the draw implementation from Element
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

export { IElement };
