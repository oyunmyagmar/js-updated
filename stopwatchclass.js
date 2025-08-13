const counterDiv = document.getElementById("counter");
const second = document.getElementById("second");
const minutes = document.getElementById("minutes");
const hour = document.getElementById("hour");

let sec = 0;
let min = 0;
let h = 0;
second.innerText += ": " + sec;
minutes.innerText += ": " + min;
hour.innerText = h;

function addSecond() {
  console.log("working");
  sec++;
  second.innerText = ": " + sec;
  if (sec == 60) {
    min++;
    sec = 0;
    minutes.innerText = ": " + min;
  }
  if (min == 60) {
    h++;
    min = 0;
    min++;
    hour.innerText = h;
  }
}
let interval = setInterval(addSecond, 100);

function stopTimer() {
  clearInterval(interval);
}

function startTimer() {
  interval = setInterval(addSecond, 100);
}

function resetTimer() {
  sec = 0;
}
