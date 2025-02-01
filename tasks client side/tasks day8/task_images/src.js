// // var image = document.images;
// // var image = document.querySelector("#galleryImage");
// // var imagesArr = [
// //   "./imgaes/img1.jpeg",
// //   "./imgaes/img2.jpeg",
// //   "./imgaes/img3.jpeg",
// //   "./imgaes/img4.jpeg",
// // ];
// // var counter = 0;
// // var nextbtn = document.querySelector(".btn-next");
// // var backbtn = document.querySelector(".btn-back");
// // var backbtn = document.querySelector(".btn-slide");
// // var backbtn = document.querySelector(".btn-stop");

// // nextbtn.addEventListener("click", function () {
// //   if (counter < imagesArr.length - 1) {
// //     console.log("jfjfjf");
// //     image.src = imagesArr[++counter];
// //   }
// // });
// // backbtn.addEventListener("click", function () {
// //   if (counter > 0) {
// //     console.log("back");
// //     image.src = imagesArr[--counter];
// //   }
// // });

// var image = document.querySelector("#galleryImage");
// var imagesArr = ["./imgaes/img1.jpeg", "./imgaes/img2.jpeg"];
// console.log(imagesArr, "arr");
// var counter = 0;
// var sliderInterval;
// var nextbtn = document.querySelector(".btn-next");
// var backbtn = document.querySelector(".btn-back");
// var slidebtn = document.querySelector(".btn-slide");
// var stopbtn = document.querySelector(".btn-stop");
// nextbtn.addEventListener("click", function () {
//   if (counter < imagesArr.length - 1) {
//     console.log("Next");
//     image.src = imagesArr[++counter];
//   }
// });
// backbtn.addEventListener("click", function () {
//   if (counter > 0) {
//     console.log("Back");
//     image.src = imagesArr[--counter];
//   }
// });

// // slidebtn.addEventListener("click", function () {
// //   if (counter >= imagesArr.length - 1) {
// //     counter = 0;
// //   } else {
// //     counter++;
// //   }
// //   image.src = imagesArr[counter];
// // });

// // setInterval(function () {
// //   if (counter >= imagesArr.length - 1) {
// //     counter = 0;
// //   } else {
// //     counter++;
// //   }
// //   image.src = imagesArr[counter];
// // }, 2000);

// // Function to update the image
// function updateImage() {
//   if (counter >= imagesArr.length - 1) {
//     counter = 0;
//   } else {
//     counter++;
//   }
//   image.src = imagesArr[counter];
// }

// // Event listener for button click
// slidebtn.addEventListener("click", function () {
//   // Reset the interval
//   clearInterval(sliderInterval); // Stop the current interval
//   updateImage(); // Update the image immediately
//   startSlider(); // Restart the interval
// });

// // Function to start the slider
// function startSlider() {
//   sliderInterval = setInterval(updateImage, 2000);
// }

// // Initialize the slider
// startSlider();

var imageEl = document.querySelector("#galleryImage");
var imagesArr = [
  "images/img1.jpeg",
  "images/img2.jpeg",
  "images/img3.jpeg",
  "images/img4.jpeg",
  "images/img5.jpeg",
];
var counter = 0;
var sliderInterval;
console.log(imageEl);
// Button selectors
var nextbtn = document.querySelector(".btn-next");
var backbtn = document.querySelector(".btn-back");
var slidebtn = document.querySelector(".btn-slide");
var stopbtn = document.querySelector(".btn-stop");

// Event listeners for buttons
nextbtn.addEventListener("click", function () {
  console.log(counter);
  if (counter < imagesArr.length - 1) {
    counter++;
    console.log(counter, "counter", imagesArr.length);
    imageEl.src = imagesArr[counter];
    // imageElement.src = 'new_image.jpg';
  }
  console.log(imageEl);
  console.log(imagesArr[counter + 1]);
});

backbtn.addEventListener("click", function () {
  console.log("before, ", counter);

  if (counter <= imagesArr.length - 1 && counter > 0) {
    counter--;
    console.log("after, ", counter);
    imageEl.src = imagesArr[counter];
    console.log(imagesArr[counter]);
  }
});

slidebtn.addEventListener("click", function () {
  clearInterval(sliderInterval);
  startSlider();
});

stopbtn.addEventListener("click", function () {
  clearInterval(sliderInterval);
});

// function updateImage() {
//   counter = (counter + 1) % imagesArr.length;
//   imageEl.src = imagesArr[counter];
// }
function updateImage() {
  counter++;
  if (counter >= imagesArr.length) {
    counter = 0;
  }
  imageEl.src = imagesArr[counter];
}

function startSlider() {
  sliderInterval = setInterval(updateImage, 2000);
}
