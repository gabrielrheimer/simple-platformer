import { Canvas } from "./Canvas";
import { Keys } from "./Controller";
import * as Map1 from "./Maps/Map1";
import { Player } from "./Player";

export const canvas: HTMLCanvasElement = Canvas.getCanvas();
export const context: CanvasRenderingContext2D = Canvas.getContext();

let keys = [];

enum Events {
    KEY_DOWN = "keydown",
    KEY_UP = "keyup",
    FIRST_LOAD = "load"
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

    Map1.drawScenario();
    Player.getInstance().drawPlayer();

    requestAnimationFrame(doStuff);
}