// // handling position for the header
// var header = document.querySelector("#header");
// header.style.textAlign = "right"; // move it inner image to right
// header.style.marginRight = "50px";
// header.style.marginTop = "20px";

// // handlign position for the list
// var list = document.querySelector("ul");
// list.style.listStyleType = "circle"; // change the list style to circle
// list.style.width = "100px"; // add fixed width to the list
// list.style.margin = "auto"; // center the list in the page

// // copy the header element and append it as the last child of the center div
// var center = document.querySelector(".center");
// var newHeader = header.cloneNode(true);
// center.appendChild(newHeader);
// newHeader.style.textAlign = "left"; // center the new header
// newHeader.style.marginRight = "0px"; // remove the margin
// newHeader.style.marginLeft = "50px"; // add margin to the left
// newHeader.style.marginBottom = "20px";
// second solution
// Handling position for the header
var header = document.querySelector("#header");
header.style.textAlign = "right"; // move it inner image to right
header.style.marginRight = "50px"; //  // move it inner image to right
header.style.marginTop = "20px"; // Add a margin to the top of the header

// Handling position for the navigation list
var list = document.querySelector("#nav");
list.style.listStyleType = "circle"; // Change the list style to circles
list.style.width = "100px"; // Set a fixed width for the list
list.style.margin = "auto"; // Center  the list in the page

// Clone the header and append it as the last element in the body
var newHeader = header.cloneNode(true); // Clone the header (including its content)
document.body.appendChild(newHeader); // Append the cloned header to the body
newHeader.style.textAlign = "left"; // Align the cloned header content to the left
newHeader.style.marginRight = "0px"; // remove the margin
newHeader.style.marginLeft = "50px"; // Add a left margin
newHeader.style.marginBottom = "20px"; // Add a bottom margin
