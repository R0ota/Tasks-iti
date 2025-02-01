import { Rectangle } from "./rectangle.js";
export class Square extends Rectangle {
  constructor(name, side) {
    super(name, side, side);
  }

  toString() {
    return `${this.name}  with side  ${this.width}.`;
  }
}
