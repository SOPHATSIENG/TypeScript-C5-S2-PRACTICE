import Shape from "./Shape";

class Square extends Shape {
  constructor(
    leftX: number,
    bottomY: number,
    private size: number
  ) {
    super(leftX, bottomY);
  }

  getWidth(): number {
    return this.size;
  }

  getHeight(): number {
    return this.size;
  }

  getArea(): number {
    return this.size * this.size;
  }
}

export default Square;
