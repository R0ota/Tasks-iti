// // Book Constructor
// function Book(name, type) {
//   this.name = name; // Name of the book
//   this.type = type; // Type or category of the book
// }

// // Box Constructor
// function Box() {
//   this.content = []; // Array to store books
//   this.numOfBooks = 0; // Counter for books
// }

// // add a book to the box
// Box.prototype.addBook = function (name, type) {
//   var book = new Book(name, type); // Create a new book object
//   this.content.push(book); // Add the book to the content array
//   this.numOfBooks++; // Increment the book count
// };

// //  delete a book from the box by name or type
// Box.prototype.deleteBook = function (identifier) {
//   this.content = this.content.filter(
//     (book) => book.name !== identifier && book.type !== identifier
//   );
//   this.numOfBooks = this.content.length; // Update the book count
// };

// //  display the details
// Box.prototype.toString = function () {
//   return `Box contains ${this.numOfBooks} books.`;
// };

// // Example for applying
// var myBox = new Box();

// // Add books to the box
// myBox.addBook("JavaScript", "Programming");
// myBox.addBook("Html", "structure");
// myBox.addBook(" css", "style");

// console.log(myBox.toString());

// // Delete a book by name
// myBox.deleteBook("Html");
// console.log(myBox.toString());

// // Delete a book by type
// myBox.deleteBook("style");
// console.log(myBox.toString());

// Book Constructor
function Book(name, type) {
  this.name = name;
  this.type = type;
}

// Box Constructor
function Box() {
  this.content = []; // Array to store books
  this.numOfBooks = 0; // Counter for books
}

// add a book to the box
Box.prototype.addBook = function (name, type) {
  var book = new Book(name, type); // Create a new book object
  this.content.push(book); // Add the book to the content array
  this.numOfBooks++; // Increment the book count
};

// delete a book from the box by name or type
Box.prototype.deleteBook = function (identifier) {
  this.content = this.content.filter(
    (book) => book.name !== identifier && book.type !== identifier
  );
  this.numOfBooks = this.content.length; // Update the book count
};

// Method to display box details
Box.prototype.toString = function () {
  return `Box contains ${this.numOfBooks} books.`;
};

// Implementing valueOf
Box.prototype.valueOf = function () {
  return this.numOfBooks; // Return the number of books in the box
};

// Example Usage
var box1 = new Box();
box1.addBook("JavaScript Basics", "Programming");
box1.addBook("Html", "structure");
box1.addBook("css", "style");

var box2 = new Box();
box2.addBook("oop", "Programming adv");
box2.addBook("react", "framework");
box2.deleteBook("react");
console.log(box1.toString()); // Output: Box contains 3 books.
console.log(box2.toString()); // Output: Box contains 2 books.
// Adding boxes together
var totalBooks = box1 + box2; // Uses valueOf to add book counts
console.log(`Total books in both boxes: ${totalBooks}`); // Output: 5
