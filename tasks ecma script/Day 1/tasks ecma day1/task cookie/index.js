// window.onload = function () {
//   const form = document.getElementById("registrationForm");

//   if (!form) {
//     console.error("Form element with ID 'registrationForm' not found!");
//     return;
//   }

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     // Retrieve input values
//     const name = form
//       .querySelector("input[placeholder='your name...']")
//       .value.trim();
//     const age = form
//       .querySelector("input[placeholder='your age...']")
//       .value.trim();
//     const gender = form.querySelector("input[name='gender']:checked")?.value;
//     const color = form.querySelector("input[type='color']").value;

//     // Validate inputs
//     if (!name || !age || !gender || !color) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     // Set cookies (using your cookie library)
//     const expiryDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000); // 1 year
//     setCookie("name", name, expiryDate);
//     setCookie("age", age, expiryDate);
//     setCookie("gender", gender, expiryDate);
//     setCookie("color", color, expiryDate);

//     // Redirect to the profile page
//     location.href = "welcome.html";
//   });
// };
// second solution
window.onload = function () {
  const form = document.getElementById("registrationForm");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Retrieve input values
    const name = form
      .querySelector("input[placeholder='your name...']")
      ?.value.trim();
    const age = form
      .querySelector("input[placeholder='your age...']")
      ?.value.trim();
    const gender = form.querySelector("input[name='gender']:checked")?.value;
    const color = form.querySelector("input[type='color']")?.value;

    // Validate inputs
    if (!name || !age || !gender || !color) {
      alert("Please fill in all fields."); //span
      return;
    }

    // Set cookies for 1 year
    const expiryDays = 365; // 1 year in days
    setCookie("name", name, expiryDays);
    setCookie("age", age, expiryDays);
    setCookie("gender", gender, expiryDays);
    setCookie("color", color, expiryDays);

    // Redirect to the profile page
    location.href = "welcome.html";
  });
};

// Utility function to set a cookie
function setCookie(name, value, days) {
  const expires = `; expires=${new Date(
    Date.now() + days * 864e5
  ).toUTCString()}`;
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )}${expires}; path=/`;
}
