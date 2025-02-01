// Rectangle Constructor
function Rectangle(width, height) {
  this.width = width;
  this.height = height;

  // Increment the object counter each time a new object is created
  Rectangle.objectCount++;
}

// Initialize to count the number of created objects
Rectangle.objectCount = 0;

// Method to retrieve the number of created objects
Rectangle.getObjectCount = function () {
  return Rectangle.objectCount;
};

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

Rectangle.prototype.getPerimeter = function () {
  return 2 * (this.width + this.height);
};

// Override toString() method to display width, height, area, and perimeter
Rectangle.prototype.toString = function () {
  return `Rectangle: width=${this.width}, height=${
    this.height
  }, area=${this.getArea()}, perimeter=${this.getPerimeter()}`;
};

// for example
var rect1 = new Rectangle(5, 10);
console.log(rect1.toString());
console.log("Number of objects created:" + Rectangle.getObjectCount());

// second example
var rect2 = new Rectangle(2, 3);
console.log(rect2.toString());
console.log("Number of objects created:" + Rectangle.getObjectCount());
