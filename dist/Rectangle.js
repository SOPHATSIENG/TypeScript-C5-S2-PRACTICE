"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = __importDefault(require("./Shape"));
class Rectangle extends Shape_1.default {
    constructor(leftX, bottomY, rightX, topY) {
        super(leftX, bottomY);
        this.rightX = rightX;
        this.topY = topY;
    }
    getWidth() {
        return this.rightX - this.leftX;
    }
    getHeight() {
        return this.topY - this.bottomY;
    }
    getArea() {
        return this.getWidth() * this.getHeight();
    }
}
exports.default = Rectangle;
