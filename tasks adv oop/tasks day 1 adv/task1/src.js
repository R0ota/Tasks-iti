function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.calculateArea = function () {
  return this.width * this.height;
};

Rectangle.prototype.calculatePerimeter = function () {
  return 2 * (this.width + this.height);
};

Rectangle.prototype.displayInfo = function () {
  console.log(
    "Width: " + this.width,
    "Height: " + this.height,
    "Area: " + this.calculateArea(),
    "Perimeter: " + this.calculatePerimeter()
  );
};

var rectangle = new Rectangle(5, 10);
var rectangle2 = new Rectangle(6, 4);
rectangle.displayInfo();
console.log(rectangle);
console.log(rectangle2);
// var rectangle = {
//   width: 5,
//   height: 10,
//   getArea: function () {
//     return this.width * this.height;
//   },
//   getPerimeter: function () {
//     return 2 * (rectangle.width + rectangle.height);
//   },
//   displayInfo: function () {
//     console.log(
//       "Width:" + this.width,
//       "Height:" + this.height,
//       "Area:" + this.getArea(),
//       "Perimeter:" + this.getPerimeter()
//     );
//   },
// };
// rectangle.displayInfo();
// console.log(rectangle.displayInfo());
// console.log("dd");
