// // Function to change font family
// function ChangeFont(font) {
//   document.getElementById("PAR").style.fontFamily = font;
// }

// // Function to change text alignment
// function ChangeAlign(align) {
//   document.getElementById("PAR").style.textAlign = align;
// }

// // Function to change line height
// function ChangeHeight(height) {
//   document.getElementById("PAR").style.lineHeight = height;
// }

// // Function to change letter spacing
// function ChangeLSpace(space) {
//   document.getElementById("PAR").style.letterSpacing = space;
// }

// // Function to change text indent
// function ChangeIndent(indent) {
//   document.getElementById("PAR").style.textIndent = indent;
// }

// // Function to change text transform
// function ChangeTransform(transform) {
//   document.getElementById("PAR").style.textTransform = transform;
// }

// // Function to change text decoration
// function ChangeDecorate(decoration) {
//   document.getElementById("PAR").style.textDecoration = decoration;
// }

// // Function to change text border style
// function ChangeBorder(border) {
//   document.getElementById("PAR").style.borderStyle = border;
// }

// // Function to change border color
// function ChangeBorderColor(color) {
//   document.getElementById("PAR").style.borderColor = color;
// }

// // Function to change font family
// function ChangeFont(font) {
//   document.getElementById("PAR").style.fontFamily = font;
// }

// // Function to change text alignment
// function ChangeAlign(align) {
//   document.getElementById("PAR").style.textAlign = align;
// }

// // Function to change line height
// function ChangeHeight(height) {
//   document.getElementById("PAR").style.lineHeight = height;
// }

// // Function to change letter spacing
// function ChangeLSpace(space) {
//   document.getElementById("PAR").style.letterSpacing = space;
// }

// // Function to change text indent
// function ChangeIndent(indent) {
//   document.getElementById("PAR").style.textIndent = indent;
// }

// // Function to change text transform
// function ChangeTransform(transform) {
//   document.getElementById("PAR").style.textTransform = transform;
// }

// // Function to change text decoration
// function ChangeDecorate(decoration) {
//   document.getElementById("PAR").style.textDecoration = decoration;
// }

// // Function to change text border style
// function ChangeBorder(border) {
//   document.getElementById("PAR").style.borderStyle = border;
// }

// // Function to change border color
// function ChangeBorderColor(color) {
//   document.getElementById("PAR").style.borderColor = color;
// }

// //  secon way on click on parent
// //  valiadtion name form
// //  font rest table

var p = document.getElementById("PAR");
var td = document.querySelectorAll("td");

// Configuration for corresponding CSS properties
var propertyMapping = [
  "fontFamily", // td[0]
  "textAlign", // td[1]
  "lineHeight", // td[2]
  "letterSpacing", // td[3]
  "textIndent", // td[4]
  "textTransform", // td[5]
  "textDecoration", // td[6]
  "borderStyle", // td[7]
  "borderColor", // td[8]
];

// Loop through all table cells
td.forEach((cell, index) => {
  cell.addEventListener("click", function (e) {
    if (e.target.tagName === "INPUT") {
      console.log(e.target.tagName);
      var cssProperty = propertyMapping[index];
      var value = e.target.nextSibling.nodeValue;
      if (cssProperty && value) {
        p.style[cssProperty] = value;
      }
    }
  });
});
