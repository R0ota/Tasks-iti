$(document).ready(function () {
  // Using $.get() to fetch users
  $.get("https://jsonplaceholder.typicode.com/users", function (users) {
    // Add each user as a tab
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      $("#tabs").append(
        `<div class="tab" data-id="${user.id}">${user.username}</div>`
      );
    }

    $("#tabs").on("click", ".tab", function () {
      var userId = $(this).data("id"); // Get the userId

      $(".tab").removeClass("active");
      $(this).addClass("active");

      $.ajax({
        url: `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
        method: "GET",
        success: function (posts) {
          // Clear the previous posts
          $("#posts").empty();

          // Check if there are posts and display them
          if (posts.length > 0) {
            posts.forEach((post) => {
              $("#posts").append(`<div class="post-title">${post.title}</div>`);
            });
          } else {
            $("#posts").html("<p>No posts found for this user.</p>");
          }
        },
        error: function () {
          $("#posts").html("<p>Error loading posts.</p>");
        },
      });
    });
  });
});
