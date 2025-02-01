function getRandomColor() {
  var color = "#";
  for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 16).toString(16);
  }
  return color;
}

document.getElementById("original").addEventListener("click", function () {
  var clonedDiv = this.cloneNode(true);
  clonedDiv.style.backgroundColor = getRandomColor();
  document.body.appendChild(clonedDiv);
});
