// Main.ts

import Square from "./Square";
import Rectangle from "./Rectangle";
import Circle from "./Circle";

const square = new Square(0, 0, 5);

console.log("Square Width:", square.getWidth());
console.log("Square Height:", square.getHeight());
console.log("Square Area:", square.getArea());

const rectangle = new Rectangle(0, 0, 10, 5);

console.log("Rectangle Width:", rectangle.getWidth());
console.log("Rectangle Height:", rectangle.getHeight());
console.log("Rectangle Area:", rectangle.getArea());

const circle = new Circle(0, 0, 7);

console.log("Circle Width:", circle.getWidth());
console.log("Circle Height:", circle.getHeight());
console.log("Circle Area:", circle.getArea());