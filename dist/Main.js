"use strict";
// Main.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Square_1 = __importDefault(require("./Square"));
const Rectangle_1 = __importDefault(require("./Rectangle"));
const Circle_1 = __importDefault(require("./Circle"));
const square = new Square_1.default(0, 0, 5);
console.log("Square Width:", square.getWidth());
console.log("Square Height:", square.getHeight());
console.log("Square Area:", square.getArea());
const rectangle = new Rectangle_1.default(0, 0, 10, 5);
console.log("Rectangle Width:", rectangle.getWidth());
console.log("Rectangle Height:", rectangle.getHeight());
console.log("Rectangle Area:", rectangle.getArea());
const circle = new Circle_1.default(0, 0, 7);
console.log("Circle Width:", circle.getWidth());
console.log("Circle Height:", circle.getHeight());
console.log("Circle Area:", circle.getArea());
