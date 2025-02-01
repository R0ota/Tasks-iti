let destructed = ([a, b] = [(x = 5), (y = 6)]);
console.log(a, b);
[x, y] = [y, x];

console.log(a, b);

// let desArray = ([a, b, c] = ["mai", "reham", "ali"]);

// console.log(a, b, c);

let a = 5;
let b = 10;

// Swapping
[a, b] = [b, a];

console.log(a, b);
