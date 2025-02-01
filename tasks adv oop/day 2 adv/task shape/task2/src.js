// Shape Constructor (Base Class)
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
    throw new Error(
      "Cannot create another instance of Rectangle. Instance already exists!"
    );
  }
  Shape.call(this); // Call the Shape constructor
  this.width = width;
  this.height = height;
  console.log(
    "Rectangle created with width " + width + " and height " + height
  );
  Rectangle.objectCount++; // Increment the count of created objects
  rectangleInstance = this; // Save the instance
}

// Add a class property to count the number of created objects for Rectangle
Rectangle.objectCount = 0;

// Add a class method to retrieve the number of created Rectangle objects
Rectangle.getObjectCount = function () {
  return Rectangle.objectCount;
};

// Inherit from Shape
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

// Add methods for Rectangle
Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

Rectangle.prototype.getPerimeter = function () {
  return 2 * (this.width + this.height);
};

// Square Constructor (inherits from Shape)
var squareInstance = null; // Singleton instance for Square
function Square(side) {
  if (squareInstance) {
    throw new Error(
      "Cannot create another instance of Square. Instance already exists!"
    );
  }
  Shape.call(this); // Call the Shape constructor
  this.side = side;
  console.log("Square created with side " + side);
  squareInstance = this; // Save the instance
}

// Inherit from Shape
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

// Add methods for Square
Square.prototype.getArea = function () {
  return this.side * this.side;
};

Square.prototype.getPerimeter = function () {
  return 4 * this.side;
};

// Testing the Implementation
try {
  // Create a Rectangle
  var rectangle1 = new Rectangle(10, 5);
  console.log(
    "Rectangle: Width =",
    rectangle1.width,
    ", Height =",
    rectangle1.height,
    ", Area =",
    rectangle1.getArea(),
    ", Perimeter =",
    rectangle1.getPerimeter()
  );

  // Attempt to create another Rectangle
  var rectangle2 = new Rectangle(7, 3); // Should throw an error
  console.log(
    "Rectangle: Width =",
    rectangle2.width,
    ", Height =",
    rectangle2.height,
    ", Area =",
    rectangle2.getArea(),
    ", Perimeter =",
    rectangle2.getPerimeter()
  );
} catch (error) {
  console.error(error.message); // Logs the error message
}

try {
  // Create a Square
  var square1 = new Square(4);
  console.log(
    "Square: Side =",
    square1.side,
    ", Area =",
    square1.getArea(),
    ", Perimeter =",
    square1.getPerimeter()
  );

  // Attempt to create another Square
  var square2 = new Square(6); // Should throw an error
  console.log(
    "Square: Side =",
    square2.side,
    ", Area =",
    square2.getArea(),
    ", Perimeter =",
    square2.getPerimeter()
  );
} catch (error) {
  console.error(error.message); // Logs the error message
}

// Output the number of created Rectangle objects
console.log("Number of created Rectangle objects:", Rectangle.getObjectCount()); // Output: 1
console.log(square1, square2);
