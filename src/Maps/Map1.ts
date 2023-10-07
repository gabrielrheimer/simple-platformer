import { Canvas } from "../Canvas";
import { Colors } from "../Colors";
import { Scenario } from "../Scenario";

export function drawScenario(): void {
    const map1 = new Scenario();

    map1.addSurface({
        posX: 0,
        posY: Canvas.HEIGHT/4+10,
        width: 10,
        height: Canvas.HEIGHT,
        color: Colors.SURFACE_BROWN
    });

    map1.addSurface({
        posX: 0,
        posY: 0,
        width: 10,
        height: Canvas.HEIGHT/4-15,
        color: Colors.SURFACE_BROWN
    });

    map1.addSurface({
        posX: 0,
        posY: Canvas.HEIGHT - 10,
        width: Canvas.WIDTH,
        height: 50,
        color: Colors.SURFACE_BROWN
    });

    map1.addSurface({
        posX: Canvas.WIDTH - 10,
        posY: 0,
        width: 50,
        height: Canvas.HEIGHT,
        color: Colors.SURFACE_BROWN
    });

    map1.drawScenario();
}