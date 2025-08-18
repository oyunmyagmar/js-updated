const body = document.querySelector("body");
const stopWatchContainer = document.createElement("div");
const timeCounter = document.createElement("div");
const btnContainer = document.createElement("div");
const startBtn = document.createElement("button");
const stopBtn = document.createElement("button");
const resetBtn = document.createElement("button");
const currentTimePTag = document.createElement("p");

stopWatchContainer.classList.add("stopWatchContainer");
timeCounter.classList.add("timeCounter");
btnContainer.classList.add("btnContainer");
startBtn.classList.add("btn");
stopBtn.classList.add("btn");
resetBtn.classList.add("btn");
currentTimePTag.classList.add("currentTimePTag");

let minutes = 0;
let seconds = 0;
let milliseconds = 0;

timeCounter.innerText = "00:00.000";
startBtn.innerText = "Start";
stopBtn.innerText = "Stop";
resetBtn.innerText = "Reset";

const addMilliseconds = () => {
  let dateToday = new Date();
  let milliseconds = dateToday.getMilliseconds();
  console.log("milliseconds", milliseconds);
  // let seconds = dateToday.getSeconds();
  // // console.log("seconds", seconds);
  // let minutes = dateToday.getMinutes();
  // console.log("minutes", minutes);

  if (milliseconds > 998) {
    // milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }
  function formatTimer() {
    if (milliseconds < 10) {
      milliseconds = `00${milliseconds}`;
    } else if (milliseconds < 100) {
      milliseconds = `0${milliseconds}`;
    } else if (milliseconds < 1000) {
      milliseconds = milliseconds;
    }
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  }
  formatTimer();
  timeCounter.innerText = `${minutes}:${seconds}.${milliseconds}`;
  console.log("min", `${minutes} "sec":${seconds} "mili.${milliseconds}`);
};
let interval;
// = setInterval(addMlliseconds, 1);

startBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(addMilliseconds, 1000);
});
stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});
resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  timeCounter.innerText = "00:00.000";
});

function printRealTime() {
  let dateToday = new Date();
  const currentTime = dateToday.toString().split(" ")[4];
  // console.log("currentTime", currentTime);
  currentTimePTag.innerText = `Current time: ${currentTime}`;
}
setInterval(printRealTime, 1000);

btnContainer.appendChild(startBtn);
btnContainer.appendChild(stopBtn);
btnContainer.appendChild(resetBtn);
stopWatchContainer.appendChild(timeCounter);
stopWatchContainer.appendChild(currentTimePTag);
stopWatchContainer.appendChild(btnContainer);
body.append(stopWatchContainer);
