var xhrUsers = new XMLHttpRequest();

xhrUsers.open("get", "./rockbands.json");

var bandSelect = document.getElementById("bandSelect");
var artistSelect = document.getElementById("artistSelect");
var h1 = document.querySelector("h1");
var labels = document.querySelectorAll("label");
var errorImg = document.getElementById("error-image");

xhrUsers.onreadystatechange = function () {
  if (xhrUsers.readyState === 4) {
    if (xhrUsers.status === 200) {
      var rockbands = JSON.parse(xhrUsers.responseText);
      document.getElementById("content").style.display = "block";
      initializeDropdowns(rockbands);
    } else {
      document.getElementById("error").style.display = "block";
      document.querySelector("body").style.backgroundColor = "#F0F0F0";
    }
  }
};

xhrUsers.send();

// Initialize the dropdowns with JSON data
function initializeDropdowns(rockbands) {
  populateBandDropdown(rockbands);

  // Add event listener for band selection
  bandSelect.addEventListener("click", function () {
    var selectedBand = this.value;
    populateArtistDropdown(rockbands[selectedBand]);
    artistSelect.disabled = false; // Enable artist dropdown
  });

  // Add event listener for artist selection
  artistSelect.addEventListener("click", function () {
    var artistLink = this.value;
    if (artistLink) {
      window.open(artistLink, "_blank"); // Open artist's link in a new tab
    }
  });
}

// Populate the band dropdown
function populateBandDropdown(rockbands) {
  Object.keys(rockbands).forEach((band) => {
    var option = document.createElement("option");
    option.value = band; //
    option.textContent = band;
    bandSelect.append(option);
  });
}

// Populate the artist dropdown
function populateArtistDropdown(artists) {
  artistSelect.innerHTML = '<option value="">Select an artist</option>'; // Clear previous options
  if (artists) {
    artists.forEach((artist) => {
      var option = document.createElement("option");
      option.value = artist.value; // Artist link
      option.textContent = artist.name; // Artist name
      artistSelect.append(option);
    });
  }
}

// Function to hide content when error occurs
function hideContent() {
  h1.style.display = "none"; // Hide the title
  labels.forEach((label) => {
    label.style.display = "none"; // Hide labels
  });
  bandSelect.style.display = "none"; // Hide band select
  artistSelect.style.display = "none"; // Hide artist select
}
