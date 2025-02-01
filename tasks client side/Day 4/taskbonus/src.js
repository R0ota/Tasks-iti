// using method

var text = prompt("Enter a string:");

if (text === "" || !isNaN(text)) {
  alert("Please enter a valid string (not empty and not a number).");
} else {
  var caseSensitive = prompt(
    "Do you want to consider case sensitivity? (yes/no):"
  ).toLowerCase();

  if (caseSensitive === "no") {
    text = text.toLowerCase();
  }

  var reversedText = "";

  for (let i = text.length - 1; i >= 0; i--) {
    reversedText += text[i];
  }

  if (text === reversedText) {
    alert("The string is a palindrome.");
  } else {
    alert("The string is not a palindrome.");
  }
}

// var text = prompt("Enter a string:");

// var caseSensitive = prompt(
//   "Do you want to consider case sensitivity? (yes/no):"
// ).toLowerCase();

// if (caseSensitive === "no") {
//   text = text.toLowerCase();
// }

// var reversedText = "";

// for (let i = text.length - 1; i >= 0; i--) {
//   reversedText += text[i];
// }

// if (text === reversedText) {
//   alert("The string is a palindrome.");
// } else {
//   alert("The string is not a palindrome.");
// }
