const body = document.querySelector("body");
const stopWatchContainer = document.createElement("div");
const timeCounter = document.createElement("div");
const btnContainer = document.createElement("div");
const startBtn = document.createElement("button");
const stopBtn = document.createElement("button");
const resetBtn = document.createElement("button");

stopWatchContainer.classList.add("stopWatchContainer");
timeCounter.classList.add("timeCounter");
btnContainer.classList.add("btnContainer");
startBtn.classList.add("btn");
stopBtn.classList.add("btn");
resetBtn.classList.add("btn");

let minutes = 0;
let seconds = 0;
const date = new Date();
let milliseconds = date.getMilliseconds();
console.log(date.getMilliseconds());

timeCounter.innerText = `0${minutes}:0${seconds}:${milliseconds}`;
startBtn.innerText = "Start";
stopBtn.innerText = "Stop";
resetBtn.innerText = "Reset";

const addMlliseconds = () => {
  console.log("ms", milliseconds);
  milliseconds += 1;
  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }
  timeCounter.innerText = `${minutes}:${seconds}:${milliseconds}`;
};
let interval;
// clearInterval(interval);

startBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(addMlliseconds, 0.001);
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  timeCounter.innerText = `0${milliseconds}:0${seconds}:00${minutes}`;
});

btnContainer.appendChild(startBtn);
btnContainer.appendChild(stopBtn);
btnContainer.appendChild(resetBtn);
stopWatchContainer.appendChild(timeCounter);
stopWatchContainer.appendChild(btnContainer);
body.append(stopWatchContainer);
