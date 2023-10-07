import { Player } from "./Player";

let canvas: HTMLCanvasElement;
let context: CanvasRenderingContext2D;

let keys = [];

const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 400;

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
    setupCanvas();
    setCanvasSize();

    doStuff();
});

function doStuff() {
    const player = new Player(context);
    player.drawCharacter();
}

function setupCanvas() {
    canvas = document.getElementById("canvas-new") as HTMLCanvasElement;
    context = canvas.getContext("2d");
}

function setCanvasSize() {
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
}