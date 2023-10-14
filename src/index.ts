import { Canvas } from "./Canvas";
import * as Map1 from "./maps/Map1";
import { Player } from "./elements/Player";
import { Scenario } from "./Scenario";

export const canvas: HTMLCanvasElement = Canvas.getCanvas();
export const context: CanvasRenderingContext2D = Canvas.getContext();

let keys = [];

enum Events {
    KEY_DOWN = "keydown",
    KEY_UP = "keyup",
    FIRST_LOAD = "load"
}

export enum Keys {
    ARROW_UP = "ArrowUp",
    ARROW_DOWN = "ArrowDown",
    ARROW_LEFT = "ArrowLeft",
    ARROW_RIGHT = "ArrowRight"
}

document.body.addEventListener(Events.KEY_DOWN, function (e) {
    keys[e.code] = true;
});

document.body.addEventListener(Events.KEY_UP, function (e) {
    keys[e.code] = false;
});

window.addEventListener(Events.FIRST_LOAD, function () {
    Canvas.setSize();
    doStuff();
});

function doStuff() {
    if (keys[Keys.ARROW_RIGHT]) {
        Player.getInstance().moveRight();
    }

    if (keys[Keys.ARROW_LEFT]) {
        Player.getInstance().moveLeft();
    }

    Player.getInstance().fillPosition();

    Scenario.clear();
    Player.getInstance().drawElement();
    Map1.drawScenario();

    // Player.getInstance().refreshFrameReference();
    requestAnimationFrame(doStuff);
}