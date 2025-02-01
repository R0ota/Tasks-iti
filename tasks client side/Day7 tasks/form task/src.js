// Elements
var addButton = document.getElementById("addButton");
var resetButton = document.getElementById("resetButton");
var form = document.getElementById("userForm");
var nameInput = document.getElementById("name");
var ageInput = document.getElementById("age");
var emailInput = document.getElementById("email");
var dataTable = document.getElementById("dataTable");
var dataTableBody = document.querySelector("#dataTable tbody");

// Error elements
var nameError = document.getElementById("nameError");
var ageError = document.getElementById("ageError");
var emailError = document.getElementById("emailError");

// Regex patterns
var namePattern = /^[a-zA-Z\s]+$/; // varters and spaces only
var agePattern = /^[1-9][0-9]*$/; // Positive integers only
var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Basic email format

addButton.addEventListener("click", function () {
  // Clear previous errors
  nameError.textContent = "";
  ageError.textContent = "";
  emailError.textContent = "";

  // Get form values
  var name = nameInput.value.trim();
  var age = ageInput.value.trim();
  var email = emailInput.value.trim();

  var isValid = true;

  // Validation
  if (!name.length) {
    nameError.textContent = "the field is required";
  } else if (!namePattern.test(name)) {
    nameError.textContent = "Invalid Name";
    isValid = false;
  }
  if (!age.length) {
    ageError.textContent = "the field is required";
  } else if (!agePattern.test(age)) {
    ageError.textContent = "Invalid age";
    isValid = false;
  }
  if (!email.length) {
    emailError.textContent = "the field is required";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Invalid email";
    isValid = false;
  }

  // If valid, add data to table and show the table
  if (isValid) {
    var newRow = dataTableBody.insertRow();
    newRow.innerHTML = `
                  <td>${name}</td>
                  <td>${age}</td>
                  <td>${email}</td>
              `;

    // Show the table
    dataTable.style.display = "table";

    // Reset the form
    form.reset();
  }
});

// Reset Button Click
resetButton.addEventListener("click", function () {
  // Clear errors
  nameError.textContent = "";
  ageError.textContent = "";
  emailError.textContent = "";

  // Clear table data
  dataTableBody.innerHTML = newRow;
});
