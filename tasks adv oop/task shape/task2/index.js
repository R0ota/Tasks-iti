// Abstract Shape Constructor (Base Class)
function Shape() {
  if (this.constructor === Shape) {
    throw new Error("Cannot instantiate abstract class Shape directly");
  }
  console.log("Shape created");
}

// Rectangle Constructor (inherits from Shape)
var rectangleInstance = null; // Singleton instance for Rectangle
function Rectangle(width, height) {
  if (rectangleInstance) {
    throw new Error("Only one Rectangle instance can be created!");
  }
  Shape.call(this); // Call the Shape constructor
  this.width = width;
  this.height = height;
  rectangleInstance = this; // Save the instance
  console.log(`Rectangle created with width=${width} and height=${height}`);
}

// Inherit from Shape
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

// Methods for Rectangle
Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

Rectangle.prototype.getPerimeter = function () {
  return 2 * (this.width + this.height);
};

Rectangle.prototype.toString = function () {
  return `Rectangle: Width=${this.width}, Height=${
    this.height
  }, Area=${this.getArea()}, Perimeter=${this.getPerimeter()}`;
};

// Square Constructor (inherits from Rectangle)
var squareInstance = null; // Singleton instance for Square
function Square(side) {
  if (squareInstance) {
    throw new Error("Only one Square instance can be created!");
  }
  Rectangle.call(this, side, side); // Call the Rectangle constructor
  squareInstance = this; // Save the instance
  console.log(`Square created with side=${side}`);
}

// Inherit from Rectangle
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

// Override toString for Square
Square.prototype.toString = function () {
  return `Square: Side=${
    this.width
  }, Area=${this.getArea()}, Perimeter=${this.getPerimeter()}`;
};

// Circle Constructor (inherits from Shape)
var circleInstance = null; // Singleton instance for Circle
function Circle(radius) {
  if (circleInstance) {
    throw new Error("Only one Circle instance can be created!");
  }
  Shape.call(this); // Call the Shape constructor
  this.radius = radius;
  circleInstance = this; // Save the instance
  console.log(`Circle created with radius=${radius}`);
}

// Inherit from Shape
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// Methods for Circle
Circle.prototype.getArea = function () {
  return Math.PI * Math.pow(this.radius, 2);
};

Circle.prototype.getPerimeter = function () {
  return 2 * Math.PI * this.radius;
};

Circle.prototype.toString = function () {
  return `Circle: Radius=${this.radius}, Area=${this.getArea().toFixed(
    2
  )}, Perimeter=${this.getPerimeter().toFixed(2)}`;
};

// // Testing the Implementation

// var rec1 = new Rectangle(10, 5);
// console.log(rec1.toString());
// var rec2 = new Rectangle(7, 7);
// console.log(rec2.toString());
// var sq1 = new Square(10, 5);
// console.log(sq1.toString());
// var sq2 = new Square(7, 7);
// console.log(sq2.toString());

// var cir1 = new Circle(7);
// console.log(cir1.toString());
// var cir2 = new Circle(10);
// console.log(cir2.toString());
