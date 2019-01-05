let updateCentiSec;
let updateTime;
let printStopwatch;

const start = function (status) {
  let centiSeconds = 0;
  let seconds = 0;
  let minutes = 0;
  let hours = 0;

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
    element.innerHTML = hours + " : " + minutes +
      " : " + seconds + "." + centiSeconds;

    if (status === true) {
      clearInterval(printStopwatch);
      clearInterval(updateTime);
      clearInterval(updateCentiSec);
      console.log("cleared interval");
    }
  }, 50);
};

const showClock = function () {
  let element = document.getElementById("txt");
  console.log("inside showClock");
  element.innerHTML = "0 : 0 : 0.00";
  clearInterval(updateCentiSec);
  clearInterval(updateTime);
  clearInterval(printStopwatch);
};



