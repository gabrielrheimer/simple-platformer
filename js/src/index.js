import { Player } from "./Player";
var canvas;
var context;
var keys = [];
var CANVAS_WIDTH = 1000;
var CANVAS_HEIGHT = 400;
var Events;
(function (Events) {
    Events["KEY_DOWN"] = "keydown";
    Events["KEY_UP"] = "keyup";
    Events["FIRST_LOAD"] = "load";
})(Events || (Events = {}));
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
    var player = new Player(context);
    player.drawCharacter();
}
function setupCanvas() {
    canvas = document.getElementById("canvas-new");
    context = canvas.getContext("2d");
}
function setCanvasSize() {
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
}
//# sourceMappingURL=index.js.map