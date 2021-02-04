let secs = 0;
let mins = 0;
let mili = 0;
let startTimerBtn = false;
var myTimer;

var minDisplay = document.getElementById("minutes");
var secDisplay = document.getElementById("seconds");
var milliSecsDisplay = document.getElementById("milli-seconds");
var startBtn = document.getElementById("start-btn");
var pauseBtn = document.getElementById("pause-btn");

function startTimer() {
  myTimer = setInterval(function () {
    if (startTimerBtn === false) {
      mili++;
      milliSecsDisplay.innerHTML = mili;
      if (mili < 10) {
        milliSecsDisplay.innerHTML = "0" + mili;
      }

      if (mili == 10) {
        secs++;
        secDisplay.innerHTML = secs;
        mili = "00";
        milliSecsDisplay.innerHTML = mili;
        if (secs < 10) {
          if (secs < 10) {
            secDisplay.innerHTML = "0" + secs;
          }
        }
      }

      if (secs == 10) {
        mins++;
        minDisplay.innerHTML = mins;
        secs = "00";
        secDisplay.innerHTML = secs;
        if (mins < 10) {
          minDisplay.innerHTML = "0" + mins;
        }
      }
      startBtn.style.display = "none";
      pauseBtn.style.display = "unset";
    }
  }, 100);
}

function pauseTimer() {
  clearInterval(myTimer);
  pauseBtn.style.display = "none";
  startBtn.style.display = "unset";

}

function resetTimer() {
  milliSecsDisplay.innerHTML = "00";
  secDisplay.innerHTML = "00";
  minDisplay.innerHTML = "00";
}
