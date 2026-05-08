"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = __importDefault(require("./Shape"));
class Circle extends Shape_1.default {
    constructor(leftX, bottomY, radius) {
        super(leftX, bottomY);
        this.radius = radius;
    }
    getWidth() {
        return this.radius * 2;
    }
    getHeight() {
        return this.radius * 2;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
exports.default = Circle;
