var clockInterval;
var mainTitle = document.getElementById("mainTitle");

// Start the clock on button click
document.getElementById("startClock").addEventListener("click", function () {
  alert("Clock Started"); // Display alert
  mainTitle.textContent = " Starting Clock";
  startClock();
});

// Start the clock functionality
function startClock() {
  clearInterval(clockInterval); // Clear any previous interval
  clockInterval = setInterval(() => {
    var now = new Date();
    var time = now.toLocaleTimeString(); // Get time in local format
    document.getElementById("clock").textContent = time;
  }, 1000);
}

// Stop the clock with Alt + W
document.addEventListener("keydown", function (event) {
  if (event.altKey && event.key.toLowerCase() === "w") {
    clearInterval(clockInterval);
    alert("Clock Stopped"); // Display alert
    mainTitle.textContent = " Stopping Clock";
  }
});
