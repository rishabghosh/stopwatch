let updateCentiSec;
let updateTime;
let printStopwatch;

let centiSeconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

const start = function () {

  updateCentiSec = setInterval(function () {
    centiSeconds = centiSeconds + 1;
    if (centiSeconds >= 99) { centiSeconds = 0; }
  }, 9);

  updateTime = setInterval(function () {
    seconds = seconds + 1;
    if (seconds >= 60) {
      minutes = minutes + 1;
      seconds = 0;
    }
    if (seconds >= 60 && minutes >= 59) {
      hours = hours + 1;
      minutes = 0;
    }

  }, 997);

  printStopwatch = setInterval(function () {

    let element = document.getElementById("txt");
    element.innerHTML = hours + " : " + minutes + " : " + seconds + "." + centiSeconds;
  }, 50);
};

const pause = function(){
  clearInterval(updateCentiSec);
  clearInterval(updateTime);
  clearInterval(printStopwatch);
};

let hasStarted = false;

const startPause = function(){
  const startButton = document.getElementById("startBtn");
  if(hasStarted){
    pause();
    hasStarted = false;
    startButton.value = "Resume";
    return;
  }
  start();
  startButton.value = "Pause";
  hasStarted = true;
};

const showClock = function () {
  let element = document.getElementById("txt");
  element.innerHTML = "0 : 0 : 0.00";
  centiSeconds=seconds=minutes=hours=0;
  clearInterval(updateCentiSec);
  clearInterval(updateTime);
  clearInterval(printStopwatch);
  document.getElementById("startBtn").value = "Start";
};



