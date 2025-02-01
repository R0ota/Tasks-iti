function add(x, y) {
  if (arguments.length != 2) {
    throw Error("error,  accepts only 2 parameters");
  }
  return x + y;
}

var result = add(1, 5, 7);
console.log(result);
