import { Canvas } from "../Canvas";
import { Colors } from "../Color";
import { Element } from "../elements/Element";
import { Scenario } from "../Scenario";

const surfaces: Element[] = [
    new Element(0, 0, Canvas.WIDTH, 10, Colors.SURFACE_BROWN), // Top border
    new Element(0, Canvas.HEIGHT - 10, Canvas.WIDTH, 10, Colors.SURFACE_BROWN), // Bottom border
    new Element(0, 0, 10, Canvas.HEIGHT, Colors.SURFACE_BROWN), // Left border
    new Element(Canvas.WIDTH - 10, 0, 10, Canvas.HEIGHT, Colors.SURFACE_BROWN), // Right border
];

export function drawScenario(): void {
    const map1 = new Scenario();
    map1.addSurfaces(surfaces);
    map1.drawScenario();
}