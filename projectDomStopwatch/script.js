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

timeCounter.innerText = `0${minutes}:0${seconds}.00${milliseconds}`;
startBtn.innerText = "Start";
stopBtn.innerText = "Stop";
resetBtn.innerText = "Reset";

const addMilliseconds = () => {
  milliseconds += 10;

  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }

  function formatMilliseconds(milliseconds) {
    if (milliseconds < 10) {
      return (milliseconds = `00${milliseconds}`);
    } else if (milliseconds < 100) {
      return (milliseconds = `0${milliseconds}`);
    } else if (milliseconds < 1000) {
      return milliseconds;
    }
  }
  let formattedMilliseconds = formatMilliseconds(milliseconds);

  function formatSeconds(seconds) {
    if (seconds < 10) {
      return (seconds = `0${seconds}`);
    } else {
      return seconds;
    }
  }
  let formattedSeconds = formatSeconds(seconds);

  function formatMinutes(minutes) {
    if (minutes < 10) {
      return (minutes = `0${minutes}`);
    } else {
      return minutes;
    }
  }
  let formattedMinutes = formatMinutes(minutes);

  timeCounter.innerText = `${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`;
};

let interval;

startBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(addMilliseconds, 10);
});
stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});
resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  timeCounter.innerText = `0${minutes}:0${seconds}.00${milliseconds}`;
});

function printRealTime() {
  let dateToday = new Date();
  const currentTime = dateToday.toString().split(" ")[4];
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
