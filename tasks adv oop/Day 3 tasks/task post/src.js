const mainTitle = document.getElementById("main-title");
const btn = document.getElementById("button");
const loadingMessage = document.getElementById("loading-message");
const loadingAnimation = document.getElementById("loading-animation");
const errorMessage = document.getElementById("error-message");
const errorImage = document.getElementById("error-image");
const postsContainer = document.getElementById("posts-container");

document.getElementById("button").addEventListener("click", function () {
  mainTitle.style.display = "none";
  btn.style.display = "none";
  postsContainer.style.display = "none";
  errorImage.style.display = "none";
  loadingMessage.style.display = "block";
  loadingAnimation.style.display = "block";

  setTimeout(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("get", "https://jsonplaceholder.typicode.com/posts");

    xhr.addEventListener("readystatechange", function () {
      if (xhr.readyState === 4) {
        loadingMessage.style.display = "none";
        loadingAnimation.style.display = "none";

        if (xhr.status === 200) {
          const posts = JSON.parse(xhr.responseText);
          postsContainer.style.display = "block";

          // Display posts
          postsContainer.innerHTML = "";
          posts.forEach((post) => {
            const postDiv = document.createElement("div");
            postDiv.classList.add("post");

            const postTitle = document.createElement("div");
            postTitle.classList.add("post-title");
            postTitle.textContent = post.title;

            const postBody = document.createElement("div");
            postBody.classList.add("post-body");
            postBody.textContent = post.body;

            postDiv.appendChild(postTitle);
            postDiv.appendChild(postBody);
            postsContainer.appendChild(postDiv);
          });
        } else {
          errorImage.style.display = "block";
        }
      }
    });

    xhr.send();
  }, 2000);
});
