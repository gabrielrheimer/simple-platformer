import { IElement } from "./elements/Element"

export enum CollisionDirection {
    TOP = "top",
    BOTTOM = "bottom",
    LEFT = "left",
    RIGHT = "right",
    NO_COLLISION = "noCollision"
}

export class Controller {
    public static collisionDetector(elementA: IElement, elementB: IElement): boolean {
        /*  Remember that (x,y) represents the bottom-leftmost pixel of an element

            Steps to detect collision (this logic only works for rectangular objects):
            - Determine relative position (axis position + half of the element's width or height) of both elements for both axes
            - Determine vector difference between both relative positions of the same axis
            - Sum half the width of both elements and half the height of both elements
            - If both (and only both) absolute vector values are smaller than their respective half sizes sum, it means the elements are colliding. */

        const A = {
            ...elementA,
            relativeX: elementA.posX + elementA.width / 2,
            relativeY: elementA.posY + elementA.height / 2,
        };

        const B = {
            ...elementB,
            relativeX: elementB.posX + elementB.width / 2,
            relativeY: elementB.posY + elementB.height / 2,
        };

        const vectorX = A.relativeX - B.relativeX;
        const vectorY = A.relativeY - B.relativeY;

        const halfWidth = A.width + B.width;
        const halfHeight = A.height + B.height;
        
        const collisionDetected = Math.abs(vectorX) < halfWidth && Math.abs(vectorY) < halfHeight;

        return collisionDetected;
    }

    // private static determineCollisionDirection(vectorX: number, halfWidth: number, vectorY: number, halfHeight: number): void {
    //     // 
    // }
}