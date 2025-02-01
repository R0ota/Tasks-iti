// function printValueLength<T>(value: T): void {
//   if (typeof value === "string") {
//     console.log(`String length: ${value.length}`);
//   } else if (Array.isArray(value)) {
//     console.log(`Array length: ${value.length}`);
//   } else {
//     console.log("Unsupported type");
//   }
// }

// printValueLength<string>("hello");

// printValueLength<string[]>(["a", "b", "c"]);

// printValueLength<number[]>([1, 2]);

// printValueLength<object[]>([
//   { name: "Ali" },
//   { name: "Mohammed" },
//   { name: "Mostafa" },
// ]);

// function printValueLength<T>(value: T): void {
//   var length = 0;
//   if (typeof value === "string") {
//     length = value.length;
//   } else if (Array.isArray(value)) {
//     length = value.length;
//   }
//   console.log(`Length: ${length}`);
// }

// printValueLength("hello");

// printValueLength(["a", "b", "c"]);

// printValueLength([1, 2]);

// printValueLength([{ name: "Ali" }, { name: "Mohammed" }, { name: "Mostafa" }]);

function printValueLength<T>(value: T): void {
  if (typeof value === "string") {
    console.log(`String length: ${value.length}`);
  } else if (Array.isArray(value)) {
    console.log(`Array length: ${value.length}`);
  } else {
    console.log("Unsupported type");
  }
}

printValueLength("hello");

printValueLength(["a", "b", "c"]);

printValueLength([1, 2]);

printValueLength([{ name: "Ali" }, { name: "Mohammed" }, { name: "Mostafa" }]);
