
import Shape from "./Shape";

class Circle extends Shape {
  constructor(
    leftX: number,
    bottomY: number,
    private radius: number
  ) {
    super(leftX, bottomY);
  }

  getWidth(): number {
    return this.radius * 2;
  }

  getHeight(): number {
    return this.radius * 2;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

export default Circle;