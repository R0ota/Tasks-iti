var mainAudio = document.querySelector(".song audio");
var timeRange = document.querySelector("#timeInput");
var audioBoxes = document.querySelectorAll(".audio-box");
var mainImg = document.querySelector(".song img");
var mainTitle = document.querySelector(".song h5");

window.addEventListener("load", function () {
  timeRange.setAttribute("max", mainAudio.duration);
});

function changeRange() {
  timeRange.value = mainAudio.currentTime;
}
function changeTime() {
  mainAudio.currentTime = timeRange.value;
}

function playAudio() {
  mainAudio.play();
}
function pauseAudio() {
  mainAudio.pause();
}
function stopAudio() {
  mainAudio.load();
  mainAudio.pause();
}
function muteAudio() {
  mainAudio.muted = !mainAudio.muted;
}
function changeVolume(rangeVol) {
  mainAudio.volume = rangeVol.value;
}

audioBoxes.forEach(function (audioBox) {
  audioBox.addEventListener("click", function () {
    var songTitle = this.querySelector("h5").textContent;
    var songImg = this.querySelector("img").src;
    var songAud = this.querySelector("audio").src;

    mainAudio.src = songAud;
    mainImg.src = songImg;
    mainTitle.textContent = songTitle;

    mainAudio.addEventListener("load", function () {
      timeRange.max = mainAudio.duration;
      mainAudio.play(); // Automatically play the new song
    });
  });
});
