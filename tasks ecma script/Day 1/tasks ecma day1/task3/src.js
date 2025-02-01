//a every
let fruits = ["apple", "strawberry", "banana", "orange", "mango"]; // Check if every element is a string
let allStrings = fruits.every((item) => typeof item === "string");

console.log(allStrings, "every"); // Output: true
// test
// let fruitstest = [1, 1, 1, 1, "mango"];
// let allfruitstest = fruitstest.every((item) => typeof item === "string");
// console.log(allfruitstest); // Output: true
// b

// Check if some elements start with "a"
let startsWithA = fruits.some((item) => item.startsWith("a"));
// let startsWithA = fruits.some((item) => item.startsWith("n"));
console.log(startsWithA, "some");

// c

// Filter elements that start with "b" or "s"
let filteredFruits = fruits.filter(
  (item) => item.startsWith("b") || item.startsWith("a")
);

console.log(filteredFruits, "filter");

//d

// Create a new array using map to say "I like [fruit]"
let mapped = fruits.map((item) => `I like ${item[0]}`);

console.log(mapped, "map");

// Use forEach to display all elements of the new array
mapped.forEach((mapped) => console.log(mapped));
