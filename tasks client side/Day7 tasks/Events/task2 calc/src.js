// var currentInput = ""; // Store the current input expression
// var operator = ""; // Store the last operator
// var result = 0; // Store the calculated result

// // Function to handle number and decimal input
// function EnterNumber(value) {
//   var display = document.getElementById("Answer");
//   currentInput += value; // Append the clicked number
//   display.value = currentInput; // Update the display
// }

// // Function to handle operators (+, -, *, /)
// function EnterOperator(value) {
//   var display = document.getElementById("Answer");
//   if (currentInput === "") return; // Avoid adding an operator without a number

//   currentInput += value; // Append operator with spacing
//   display.value = currentInput; // Update the display
// }

// // Function to evaluate the expression when "=" is pressed
// function EnterEqual() {
//   var display = document.getElementById("Answer");
//   try {
//     result = eval(currentInput); // Use eval to calculate the result
//     display.value = result; // Display the result
//     currentInput = result.toString(); // Update currentInput with result
//   } catch (error) {
//     display.value = "Error"; // Display an error message for invalid input
//     currentInput = "";
//   }
// }

// // Function to clear the input and reset
// function EnterClear() {
//   var display = document.getElementById("Answer");
//   currentInput = ""; // Reset input
//   display.value = ""; // Clear the display
// }

// second sloution

var currentInput = ""; // Store the current input expression

// Function to handle any input (numbers, operators, or decimal)
function EnterValue(value) {
  var display = document.getElementById("Answer");
  currentInput += value; // Append value to input
  display.value = currentInput; // Update display
}

// Function to clear the display and reset input
function EnterClear() {
  currentInput = ""; // Reset input
  document.getElementById("Answer").value = ""; // Clear display
}

// Function to evaluate the expression
function EnterEqual() {
  var display = document.getElementById("Answer");
  try {
    display.value = eval(currentInput); // Calculate result
    currentInput = display.value; // Update input with result
  } catch {
    display.value = "Error"; // Handle invalid input
    currentInput = "";
  }
}
