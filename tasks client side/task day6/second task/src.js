// Step 1: Ask for the number of persons
var numberOfUsers;
do {
  numberOfUsers = parseInt(prompt("Enter the number of persons:"));
} while (isNaN(numberOfUsers) || numberOfUsers <= 0);

console.log("You want to enter " + numberOfUsers + " persons");

// user data
const users = [];

// Step 2: Collect user data
for (let i = 0; i < numberOfUsers; i++) {
  var userName;
  var userAge;

  // Validate name
  do {
    userName = prompt(
      "Enter your name (more than 3 and less than 10 characters):"
    );
  } while (
    !userName ||
    isFinite(userName) ||
    userName.length < 3 ||
    userName.length > 10
  );

  // Validate age
  do {
    userAge = parseInt(
      prompt("Enter your age (greater than 10 and less than 60):")
    );
  } while (isNaN(userAge) || userAge <= 10 || userAge >= 60);

  // Add user data to the array
  users.push({ userName, userAge });
}

// Step 3: Add users to the table

users.forEach((user) => {
  console.log(user);
  var row = document.createElement("tr");
  row.innerHTML = "<td>" + user.userName + "</td><td>" + user.userAge + "</td>";
  document.getElementsByTagName("tbody")[0].append(row);
});

// another solution
// var num = prompt("please enter numbers of uers");
// var nameArr = [];
// var ageArr = [];
// for (var i = 0; i < num; i++) {
//   var uersName = propmt("jjjjj");
//   var uaserAge = prompt("hhh");
//   nameArr.push(uersName);
//   ageArr.push(uaserAge);
// }

// var row = document.createElement("tr");
