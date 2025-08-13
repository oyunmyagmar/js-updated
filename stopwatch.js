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

let hour = 0;
let minute = 0;
let second = 0;

timeCounter.innerText = `0${hour}:0${minute}:0${second}`;
startBtn.innerText = "Start";
stopBtn.innerText = "Stop";
resetBtn.innerText = "Reset";

const addSecond = () => {
  console.log("sec", second);
  second++;
  if (second > 59) {
    second = 0;
    minute++;
  }
  if (minute > 59) {
    minute = 0;
    hour++;
  }
  timeCounter.innerText = `${hour}:${minute}:${second}`;
};
let interval;
// clearInterval(interval);

startBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(addSecond, 100);
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  hour = 0;
  minute = 0;
  second = 0;
  timeCounter.innerText = `0${hour}:0${minute}:0${second}`;
});

btnContainer.appendChild(startBtn);
btnContainer.appendChild(stopBtn);
btnContainer.appendChild(resetBtn);
stopWatchContainer.appendChild(timeCounter);
stopWatchContainer.appendChild(btnContainer);
body.append(stopWatchContainer);
