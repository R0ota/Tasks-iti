import { Shape } from "./shape.js";
export class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }

  toString() {
    return `${this.name}  with radius ${this.radius}.`;
  }
}
