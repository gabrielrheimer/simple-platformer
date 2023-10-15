import { Element } from "./elements/Element"

export enum CollisionDirection {
    TOP = "top",
    BOTTOM = "bottom",
    LEFT = "left",
    RIGHT = "right",
    NO_COLLISION = "noCollision"
}

export class Controller {
    public static detectCollision(elementA: Element, elementB: Element): CollisionDirection | undefined {
        /*  Remember that (x,y) represents the bottom-leftmost pixel of an element

            Steps to detect collision (this logic only works for rectangular objects):
            - Determine relative position (axis position + half of the element's width or height) of both elements for both axes
            - Determine vector difference between both relative positions of the same axis
            - Sum half the width of both elements and half the height of both elements
            - If both (and only both) absolute vector values are smaller than their respective half sizes sum, it means the elements are colliding. */

        const A = {
            relativeX: elementA.posX + elementA.width / 2,
            relativeY: elementA.posY + elementA.height / 2,
        };

        const B = {
            relativeX: elementB.posX + elementB.width / 2,
            relativeY: elementB.posY + elementB.height / 2,
        };

        const vectorX = A.relativeX - B.relativeX;
        const vectorY = A.relativeY - B.relativeY;

        const halfWidths = elementA.width / 2 + elementB.width / 2;
        const halfHeights = elementA.height / 2 + elementB.height / 2;
        
        const collisionDetected = Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights;

        if (collisionDetected) {
            return Controller.determineCollisionDirection(elementA, elementB, vectorX, vectorY);
        } else {
            return undefined;
        }
    }

    private static determineCollisionDirection(elementA: Element, elementB: Element, vectorX: number, vectorY: number): CollisionDirection {
        const halfWidths = elementA.width / 2 + elementB.width / 2;
        const halfHeights = elementA.height / 2 + elementB.height / 2;
        const halvesMinusVectorX = halfWidths - Math.abs(vectorX);
        const halvesMinusVectorY = halfHeights - Math.abs(vectorY);

        if (halvesMinusVectorX >= halvesMinusVectorY) {
            if (vectorY > 0) {
                return CollisionDirection.TOP;
                // shapeA.y += oY;
            } else {
                return CollisionDirection.BOTTOM;
                // shapeA.y -= oY;
            }
        } else {
            if (vectorX > 0) {
                return CollisionDirection.LEFT;
                // shapeA.x += oX;
            } else {
                return CollisionDirection.RIGHT;
                // shapeA.x -= oX;
            }
        }
    }
}