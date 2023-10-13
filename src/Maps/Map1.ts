import { Canvas } from "../Canvas";
import { Colors } from "../Color";
import { Scenario } from "../Scenario";

export function drawScenario(): void {
    const map1 = new Scenario();

    map1.addSurfaces([
        { // Top border
            posX: 0,
            posY: 0,
            width: Canvas.WIDTH,
            height: 10,
            color: Colors.SURFACE_BROWN
        },
        { // Bottom border
            posX: 0,
            posY: Canvas.HEIGHT - 10,
            width: Canvas.WIDTH,
            height: 10,
            color: Colors.SURFACE_BROWN
        },
        { // Left border
            posX: 0,
            posY: 0,
            width: 10,
            height: Canvas.HEIGHT,
            color: Colors.SURFACE_BROWN
        },
        { // Right border
            posX: Canvas.WIDTH - 10,
            posY: 0,
            width: 10,
            height: Canvas.HEIGHT,
            color: Colors.SURFACE_BROWN
        }
    ]);

    map1.drawScenario();
}