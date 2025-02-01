var inp = document.querySelector("#number");

inp.addEventListener("input", function (e) {
  e.preventDefault;
  if (!isFinite(inp.value)) {
    inp.value = "";
  }
});

// another solution
inp.addEventListener("keydown", function (e) {
  if (isNan(e.key)) {
    e.preventDefault;
  }
});
