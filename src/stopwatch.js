let centiSeconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

setInterval(function () {

  centiSeconds++;
  if (centiSeconds >= 99) {
    centiSeconds = 0;
  }

}, 9);


setInterval(function () {
  seconds++;

  if (seconds >= 60) {
    minutes++;
    seconds = 0;
    if (minutes >= 59) {
      hours++;
      minutes = 0;
    }
  }

}, 997);


const main = function () {
  setInterval(function () {
    let element = document.getElementById("txt");
    element.innerHTML = hours + ":" + minutes + ":" + seconds + "." + centiSeconds;
  }, 50);
};





