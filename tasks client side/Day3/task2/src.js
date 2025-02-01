do {
  var message = prompt("Please enter your message:");
} while (!message || isFinite(message));

for (var i = 1; i <= 6; i++) {
  document.write("<h" + i + ">" + message + "</h" + i + ">");
}
