type Color = "red" | "yellow" | "blue";

function getColorCode(color: Color): string {
  switch (color) {
    case "red":
      return "#FF0000";
    case "yellow":
      return "#FFFF00";
    case "blue":
      return "#0000FF";
    default:
      throw "Invalid color";
  }
}

console.log(getColorCode("red"));
console.log(getColorCode("yellow"));
console.log(getColorCode("blue"));
// console.log(getColorCode("green"));
