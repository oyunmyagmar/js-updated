const counterDiv = document.getElementById("counter");
const secondSpan = document.getElementById("second");
const minuteSpan = document.getElementById("minute");
const hourSpan = document.getElementById("hour");

let second = 0;
let minute = 0;
let hour = 0;
secondSpan.innerText += ": " + second;
minuteSpan.innerText += ": " + minute;
hourSpan.innerText = hour;

function addSecond() {
  //   console.log("working");
  second++;
  secondSpan.innerText = ": " + second;
  if (second > 60) {
    minute++;
    second = 0;
    minuteSpan.innerText = ": " + minute;
  }
  if (minute > 60) {
    hour++;
    minute = 0;
    hourSpan.innerText = hour;
  }
}
let interval;
// = setInterval(addSecond, 1000);

function stopTimer() {
  clearInterval(interval);
}
function startTimer() {
  clearInterval(interval);
  interval = setInterval(addSecond, 1000);
}
function resetTimer() {
  clearInterval(interval);
  second = 0;
  minute = 0;
  hour = 0;
  secondSpan.innerText = ": " + second;
  minuteSpan.innerText = ": " + minute;
  hourSpan.innerText = hour;
}
