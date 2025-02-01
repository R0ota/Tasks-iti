import { Shape } from "./shape.js";
export class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
  toString() {
    return `${this.name} with width ${this.width} and height ${this.height}.`;
  }
}
