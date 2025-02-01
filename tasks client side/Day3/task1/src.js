alert("Welcome to my site!");

do {
  var userName = prompt("Enter your name:");
} while (!userName || isFinite(userName));

do {
  var userColor = prompt("Please  choose either (red, green or blue");
} while (!userColor || isFinite(userColor));

switch (userColor) {
  case "red":
  case "RED":
  case "r":
    userColor = "red";
    break;
  case "green":
  case "GREEN":
  case "g":
    userColor = "green";

    break;
  case "blue":
  case "BLUE":
  case "b":
    userColor = "blue";

    break;

  default:
    userColor = "black";
}
document.write(
  '<h1 style="color:' + userColor + '">Welcome ' + userName + "</h1>"
);

//
// alert("Welcome to my site!");
// var userName = prompt("Enter your name:");
// if (!userName) {
//   alert("no name");
// } else {
//   alert("Welcome" + userName + "!");
// }
// var myColor = prompt("Please  choose either (red, green or blue");
// if (!myColor) {
//   alert("no color selected");
// }
// if (myColor !== "red" && myColor !== "green" && myColor !== "blue") {
//   myColor = "black";
// } else {
//   alert("bye");
// }
// document.write(
//   '<h1 style="color:' + myColor + '">Welcome ' + userName + "</h1>"
// );

// 2
// alert("Welcome to my site!");
// var userName = prompt("Enter your name:");

// if (!isNaN(userName)) {
//   userName = prompt("Please enter a valid name (it should not be a number):");
// }
// var color;
// do {
//   color = prompt("Please  choose either (red, green or blue");
// } while (
//   color != null &&
//   !isNaN(color) &&
//   color != "red" &&
//   color != "green" &&
//   color != "blue"
// );
// switch (color) {
//   case "red":
// case "red":
//   case "RED":
//     case "r"
//     break;
//   case "green":
//     break;
//   case "blue":
//     break;
//   default:
// }
// document.write('<h1 style="color:' + color + '">Welcome ' + userName + "</h1>");
//
