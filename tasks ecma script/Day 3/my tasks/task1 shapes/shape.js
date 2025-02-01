export class Shape {
  constructor(name) {
    this.name = name;
  }

  calculateArea() {}

  calculatePerimeter() {}
  toString() {
    return `This is a shape named ${this.name}.`;
  }
}

console.log(Shape);
