import { Rectangle } from "./rectangle.js";
import { Square } from "./square.js";
import { Circle } from "./circle.js";

const rectangle = new Rectangle("My Rectangle", 5, 10);
console.log(rectangle);

const square = new Square("My Square", 5);
console.log(square.toString());
const circle = new Circle("My Circle", 7);
console.log(circle.toString());

const circle2 = new Circle("My Circle", 7);
console.log(circle2.toString());
