// function setCookie(cookieName, cookieValue, expiryDate) {
//   let expires = "";
//   if (expiryDate) {
//     const date = new Date(expiryDate);
//     expires = "expires=" + date.toUTCString() + ";";
//   }
//   document.cookie = `${cookieName}=${encodeURIComponent(
//     cookieValue
//   )};${expires}path=/`;
// }

// // usage
// setCookie(
//   "username",
//   "John Doe",
//   new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
// ); // 7 days expiry

// function getCookie(name) {
//   const cookieArr = document.cookie.split("; ");
//   for (let cookie of cookieArr) {
//     const [key, val] = cookie.split("=");
//     if (key === name) return decodeURIComponent(val); // Decode the value
//   }
//   return null;
// }
// // usage
// console.log(getCookie("username")); // Outputs: "John Doe"

// function deleteCookie(cookieName) {
//   document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
// }
// // usage
// deleteCookie("username");
// console.log(getCookie("username")); // Outputs: null

// function allCookieList() {
//   const cookieArr = document.cookie.split("; ");
//   const cookiesList = [];
//   for (let cookie of cookieArr) {
//     const [key, value] = cookie.split("=");
//     cookiesList.push([key, decodeURIComponent(value)]);
//   }
//   return cookiesList;
// }
// // usage
// console.log(allCookieList());
// // Outputs: [["username", "John Doe"], ["theme", "dark"], ...]
// function hasCookie(cookieName) {
//   const cookieArr = document.cookie.split("; ");
//   for (let cookie of cookieArr) {
//     const [key] = cookie.split("=");
//     if (key === cookieName) return true;
//   }
//   return false;
// }
// // usage
// console.log(hasCookie("username")); // Outputs: true or false

// // test
// setCookie("testCookie", "Hello World", new Date(Date.now() + 1000 * 60 * 60));
// console.log(getCookie("testCookie")); // Outputs: "Hello World"
// console.log(allCookieList());
// console.log(hasCookie("testCookie")); // Outputs: true
// deleteCookie("testCookie");
// console.log(hasCookie("testCookie")); // Outputs: false
// Set a cookie

// second solution
function setCookie(name, value, days = 0) {
  const expires = days
    ? `; expires=${new Date(Date.now() + days * 864e5).toUTCString()}`
    : "";
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )}${expires}; path=/`;
}

// Get a cookie by name
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, val] = cookie.split("=");
    if (key === encodeURIComponent(name)) return decodeURIComponent(val);
  }
  return null;
}

// Delete a cookie
function deleteCookie(name) {
  document.cookie = `${encodeURIComponent(
    name
  )}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

// Get all cookies as an array of [key, value] pairs
function allCookies() {
  return document.cookie.split("; ").map((cookie) => {
    const [key, val] = cookie.split("=");
    return [decodeURIComponent(key), decodeURIComponent(val)];
  });
}

function hasCookie(name) {
  if (getCookie(name) !== null) {
    return true;
  }
  return false;
}
