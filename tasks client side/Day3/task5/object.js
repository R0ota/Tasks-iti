var rectangle = {
  width: 5,
  height: 10,
  getArea: function () {
    return rectangle.width * rectangle.height;
  },
  getPerimeter: function () {
    return 2 * (rectangle.width + rectangle.height);
  },
  displayInfo: function () {
    console.log(
      "Width:" + rectangle.width,
      "Height:" + rectangle.height,
      "Area:" + rectangle.getArea(),
      "Perimeter:" + rectangle.getPerimeter()
    );
  },
};
rectangle.displayInfo();
