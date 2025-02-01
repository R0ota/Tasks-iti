// function add(x, y) {
//   if (arguments.length != 2) {
//     throw Error("error,  accepts only 2 parameters");
//   }
//   return x + y;
// }

// add(1, 2);

// with throw
function chechkNumerical() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    // console.log(typeof arguments[i]);
    if (typeof arguments[i] !== "number") {
      throw Error(" this not equal number");
    }
    sum += arguments[i];
  }
  return sum;
}

console.log(chechkNumerical(5, 10, 2));

// only add without throw
// function chechkNumerical() {
//   var sum = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     console.log(typeof arguments[i]);
//     if (typeof arguments[i] === "number") {
//       sum += arguments[i];
//     }
//   }
//   return sum;
// }
