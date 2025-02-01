var showIcon = document.querySelector(".show");
var password = document.querySelector("#password");

showIcon.addEventListener("click", function () {
  if (password.type == "password") {
    showIcon.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
    password.type = "text";
  } else {
    showIcon.innerHTML = `<i class="fa-solid fa-eye"></i>`;
    password.type = "password";
  }
});
