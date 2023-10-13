import { context } from ".";
import { Canvas } from "./Canvas";
import { Controller } from "./Controller";
import { Element, IElement } from "./elements/Element";
import { Player } from "./elements/Player";

export class Scenario {
    private surfaces: Element[] = [];

    public addSurface(surface: IElement): void {
        const surfaceElement = new Element(
            surface.height,
            surface.width,
            surface.posX,
            surface.posY,
            surface.color
        );
        this.surfaces.push(surfaceElement);
    }
    
    public addSurfaces(surfaces: IElement[]): void {
        surfaces.forEach(surface => this.addSurface(surface));
    }

    public drawScenario(): void {
        this.surfaces.forEach(surface => {
            // TBD - find out how to reuse the draw implementation from Element
            surface.drawElement();
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