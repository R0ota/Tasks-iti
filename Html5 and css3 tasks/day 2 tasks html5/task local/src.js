window.onload = function () {
  // Retrieve stored username and email from local storage
  var savedUsername = localStorage.getItem("username");
  var savedEmail = localStorage.getItem("email");

  if (savedUsername) {
    // Set stored username value and remember-me checkbox state
    document.getElementById("name").value = savedUsername;
    document.getElementById("remember-me").checked = true;
  }

  if (savedEmail) {
    // Set stored email value
    document.getElementById("email").value = savedEmail;
  }
};

function saveUsername() {
  // Save username and email to local storage
  var username = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  if (document.getElementById("remember-me").checked) {
    // If remember-me checkbox is checked, store username and email
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
  } else {
    // If remember-me checkbox is unchecked, remove stored username and email
    localStorage.removeItem("username");
    localStorage.removeItem("email");
  }

  location.reload(); // Reload the page
}

// Add submit event listener to the form
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  saveUsername(); // Save username and email
});
