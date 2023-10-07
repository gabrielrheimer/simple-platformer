import { Colors } from "./Colors";
var Player = /** @class */ (function () {
    function Player(context) {
        this.context = context;
        this.height = 50;
        this.width = 50;
        this.color = Colors.CHARACTER_GREEN;
        this.posX = 200;
        this.posY = 200;
    }
    Player.prototype.drawCharacter = function () {
        this.context.fillStyle = this.color;
        this.context.fillRect(this.posX, this.posY, this.width, this.height);
    };
    return Player;
}());
export { Player };
//# sourceMappingURL=Player.js.map