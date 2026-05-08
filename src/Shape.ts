abstract class Shape {
  constructor(
    protected leftX: number,
    protected bottomY: number
  ) {}

  abstract getWidth(): number;
  abstract getHeight(): number;
  abstract getArea(): number;
}

export default Shape;
