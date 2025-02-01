// document.addEventListener("DOMContentLoaded", function () {
//   fetchUsers()
//     .then(function (users) {
//       // Add each user as a tab
//       users.forEach(function (user) {
//         const tab = document.createElement("div");
//         tab.classList.add("tab");
//         tab.setAttribute("data-id", user.id);
//         tab.textContent = user.username;
//         document.getElementById("tabs").appendChild(tab);
//       });

//       document
//         .getElementById("tabs")
//         .addEventListener("click", function (event) {
//           if (event.target.classList.contains("tab")) {
//             const userId = event.target.getAttribute("data-id"); // Get the userId

//             const tabs = document.querySelectorAll(".tab");
//             tabs.forEach((tab) => tab.classList.remove("active"));
//             event.target.classList.add("active");

//             // Fetch posts for the selected user
//             fetchPosts(userId)
//               .then(function (posts) {
//                 // Clear the previous posts
//                 const postsContainer = document.getElementById("posts");
//                 postsContainer.innerHTML = "";

//                 // Check if there are posts and display them
//                 if (posts.length > 0) {
//                   posts.forEach(function (post) {
//                     const postTitle = document.createElement("div");
//                     postTitle.classList.add("post-title");
//                     postTitle.textContent = post.title;
//                     postsContainer.appendChild(postTitle);
//                   });
//                 } else {
//                   postsContainer.innerHTML =
//                     "<p>No posts found for this user.</p>";
//                 }
//               })
//               .catch(function () {
//                 document.getElementById("posts").innerHTML =
//                   "<p>Error loading posts.</p>";
//               });
//           }
//         });
//     })
//     .catch(function () {
//       console.log("Error fetching users.");
//     });
// });

// // Function to fetch users using Promise
// function fetchUsers() {
//   return new Promise(function (resolve, reject) {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => resolve(data)) // Resolve the promise with the users data
//       .catch(() => reject("Error fetching users")); // Reject if there's an error
//   });
// }

// // Function to fetch posts using Promise
// function fetchPosts(userId) {
//   return new Promise(function (resolve, reject) {
//     fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//       .then((response) => response.json())
//       .then((data) => resolve(data)) // Resolve the promise with the posts data
//       .catch(() => reject("Error fetching posts")); // Reject if there's an error
//   });
// }
//  2
// document.addEventListener("DOMContentLoaded", function () {
//   // Fetch users
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function (response) {
//       return response.json(); // Return the parsed JSON data
//     })
//     .then(function (users) {
//       // Add each user as a tab
//       users.forEach(function (user) {
//         const tab = document.createElement("div");
//         tab.classList.add("tab");
//         tab.setAttribute("data-id", user.id);
//         tab.textContent = user.username;
//         document.getElementById("tabs").appendChild(tab);
//       });

//       // Add click event to tabs
//       document
//         .getElementById("tabs")
//         .addEventListener("click", function (event) {
//           if (event.target.classList.contains("tab")) {
//             const userId = event.target.getAttribute("data-id"); // Get the userId

//             const tabs = document.querySelectorAll(".tab");
//             tabs.forEach((tab) => tab.classList.remove("active"));
//             event.target.classList.add("active");

//             // Fetch posts for the selected user
//             fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//               .then(function (response) {
//                 return response.json(); // Parse the posts data
//               })
//               .then(function (posts) {
//                 // Clear the previous posts
//                 const postsContainer = document.getElementById("posts");
//                 postsContainer.innerHTML = "";

//                 // Check if there are posts and display them
//                 if (posts.length > 0) {
//                   posts.forEach(function (post) {
//                     const postTitle = document.createElement("div");
//                     postTitle.classList.add("post-title");
//                     postTitle.textContent = post.title;
//                     postsContainer.appendChild(postTitle);
//                   });
//                 } else {
//                   postsContainer.innerHTML =
//                     "<p>No posts found for this user.</p>";
//                 }
//               })
//               .catch(function (error) {
//                 document.getElementById("posts").innerHTML =
//                   "<p>Error loading posts.</p>";
//               });
//           }
//         });
//     })
//     .catch(function (error) {
//       console.log("Error fetching users:", error);
//     });
// });
