let obj = {};

let handler = {
  set: function (target, prop, val) {
    if (prop === "name") {
      if (typeof val !== "string" || val.length !== 7 || val == "") {
        throw "name  must accept only string of 7 characters.";
      }
    } else if (prop === "address") {
      if (typeof val !== "string" || val == "") {
        throw "address  must be a string.";
      }
    } else if (prop === "age") {
      if (typeof val !== "number" || val < 25 || val > 60) {
        throw "age accepts numerical value between 25 and 60.";
      }
    } else {
      throw `Property "${prop}" is not allowed.`;
    }

    return (target[prop] = val);
  },
};

let prox = new Proxy(obj, handler);

try {
  prox.name = "remoham";
  prox.address = "ismalia";
  prox.age = 30;
  console.log(prox);
} catch (error) {
  console.log(error);
}
// ****************************************************************
//  test cases for name
// prox.name = "aii";
// console.log(prox.name);

// prox.name = "remoham";
// console.log(prox.name);

// ************************************************************
// //  test cases for age
// prox.age = 7;
// console.log(prox.age);
// prox.age = 25;
// console.log(prox.age);
// **************************************************************************************
// test cases for address

// prox.address = "ismalia";
// console.log(prox.address);
// prox.address = 25;
// console.log(prox.address);
