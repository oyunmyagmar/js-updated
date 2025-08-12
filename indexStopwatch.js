const body = document.querySelector("body");
const stopWatchContainer = document.createElement("div");
const title = document.createElement("h3");
const timeContainer = document.createElement("div");
const date = new Date("2025 - 8 - 12");
const inputHour = document.createElement("input");
const inputMinute = document.createElement("input");
const inputSecond = document.createElement("input");
const startBtn = document.createElement("button");
const stopBtn = document.createElement("button");
const resetBtn = document.createElement("button");

title.innerText = "Online Timer & Stopwatch";
startBtn.innerText = "Start";
stopBtn.innerText = "Stop";
resetBtn.innerText = "Reset";

startBtn.addEventListener("click", () => {
  console.log(parseInt(inputSecond.value));
});

timeContainer.appendChild(inputHour);
timeContainer.appendChild(inputMinute);
timeContainer.appendChild(inputSecond);
stopWatchContainer.appendChild(title);
stopWatchContainer.appendChild(timeContainer);
stopWatchContainer.appendChild(startBtn);
stopWatchContainer.appendChild(stopBtn);
stopWatchContainer.appendChild(resetBtn);
body.appendChild(stopWatchContainer);
