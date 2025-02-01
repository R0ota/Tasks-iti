// window.onload = function () {
//   // Utility functions for cookies
//   function getCookie(cookieName) {
//     const cookies = decodeURIComponent(document.cookie).split("; ");
//     for (let cookie of cookies) {
//       const [name, value] = cookie.split("=");
//       if (name === cookieName) return decodeURIComponent(value);
//     }
//     return null;
//   }

//   function setCookie(cookieName, cookieValue, expiryDate) {
//     const expires = expiryDate ? `expires=${expiryDate.toUTCString()};` : "";
//     document.cookie = `${cookieName}=${encodeURIComponent(
//       cookieValue
//     )};${expires}path=/;`;
//   }

//   function deleteCookie(cookieName) {
//     document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
//   }

//   // Retrieve cookies
//   const name = getCookie("name");
//   const age = getCookie("age");
//   const gender = getCookie("gender");
//   const color = getCookie("color");
//   let visits = parseInt(getCookie("visits") || "0");

//   // Increment visits count
//   visits += 1;
//   const expiryDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000); // 1 year
//   setCookie("visits", visits, expiryDate);

//   // Update the profile page content
//   const greetingElement = document.getElementById("greeting");
//   const ageElement = document.getElementById("age");
//   const visitsElement = document.getElementById("visits");
//   const profileImage = document.getElementById("profile_image");

//   // Display the user's information
//   greetingElement.innerText = `Hello, ${name || "Guest"}!`;
//   ageElement.innerText = `You are ${age || "unknown"} years old.`;
//   visitsElement.innerText = `You have visited this site ${visits} times.`;

//   // Apply the user's preferred font color
//   document.body.style.color = color || "#000000";

//   // Set the profile image based on gender
//   if (gender === "male") {
//     profileImage.src = "m.jpg"; // Path to the male profile image
//   } else if (gender === "female") {
//     profileImage.src = "f.jpeg"; // Path to the female profile image
//   } else {
//     profileImage.src = "default.jpg"; // Path to a default profile image
//   }

//   // Handle logout functionality
//   const logoutButton = document.getElementById("logoutButton");
//   logoutButton.addEventListener("click", () => {
//     // Clear all cookies
//     deleteCookie("name");
//     deleteCookie("age");
//     deleteCookie("gender");
//     deleteCookie("color");
//     deleteCookie("visits");

//     // Redirect to the registration page
//     location.href = "index.html";
//   });
// };
//  second solution
window.onload = function () {
  // Utility functions for cookies
  const getCookie = (name) => {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === decodeURIComponent(name)) return decodeURIComponent(value);
    }
    return null;
  };

  const setCookie = (name, value, days) => {
    const expires = days
      ? `; expires=${new Date(Date.now() + days * 864e5).toUTCString()}`
      : "";
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
      value
    )}${expires}; path=/`;
  };

  const deleteCookie = (name) => {
    document.cookie = `${encodeURIComponent(
      name
    )}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  };

  // Retrieve cookies
  const name = getCookie("name") || "Not regestired";
  const age = getCookie("age") || "no value";
  const gender = getCookie("gender") || "no value";
  const color = getCookie("color") || "red";
  const visits = parseInt(getCookie("visits") || "0") + 1;

  // Update visits cookie
  setCookie("visits", visits, 365);

  // Update the profile page content
  document.getElementById("greeting").innerText = `Hello, ${name}!`;
  document.getElementById("age").innerText = `You are ${age} years old.`;
  document.getElementById(
    "visits"
  ).innerText = `You have visited this site ${visits} times.`;
  document.body.style.color = color;

  // Set the profile image based on gender
  const profileImage = document.getElementById("profile_image");
  if (gender === "male") {
    profileImage.src = "m.jpg";
  } else if (gender === "female") {
    profileImage.src = "f.jpeg";
  } else {
    profileImage.src = "default.jpg";
  }

  // Logout functionality
  document.getElementById("logoutButton").addEventListener("click", () => {
    ["name", "age", "gender", "color", "visits"].forEach(deleteCookie);
    location.href = "index.html";
  });
};
