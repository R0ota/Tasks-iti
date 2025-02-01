let obj = {
  name: "mai",
  age: 25,

  address: [],
};
let handler = {
  get: function (target, prop, prox) {
    if (!target.hasOwnpropperty(prop)) {
      throw "this propperty is  not found";
    }
    return target[prop];
  },
  set: function (target, prop, val, prox) {
    if (!(prop in obj)) {
      throw "this propperty not found";
    }
    if (prop == "age") {
      if (typeof val != "number") {
        throw "this propperty is number only";
      }
    }
    if (prop == "address") {
      if (!["ismailia", "cairo"].includes(val)) {
        throw "address not found";
      }
    }

    target[prop] = val;
  },
};

let prox = new Proxy(obj, handler);
prox.age = 10;
prox.nName = "jjh";
console.log(prox);
