const body = document.querySelector("body");
const stopWatchContainer = document.createElement("div");
const timeCounter = document.createElement("div");
const hourSpan = document.createElement("span");
const minuteSpan = document.createElement("span");
const secondSpan = document.createElement("span");
const btnContainer = document.createElement("div");
const startBtn = document.createElement("button");
const stopBtn = document.createElement("button");
const resetBtn = document.createElement("button");

let hour = 0;
let minute = 0;
let second = 0;
hourSpan.innerText = hour;
minuteSpan.innerText = " : " + minute;
secondSpan.innerText = " : " + second;
startBtn.innerText = "Start";
stopBtn.innerText = "Stop";
resetBtn.innerText = "Reset";

timeCounter.appendChild(hourSpan);
timeCounter.appendChild(minuteSpan);
timeCounter.appendChild(secondSpan);
btnContainer.appendChild(startBtn);
btnContainer.appendChild(stopBtn);
btnContainer.appendChild(resetBtn);
stopWatchContainer.appendChild(timeCounter);
stopWatchContainer.appendChild(btnContainer);
body.append(stopWatchContainer);

startBtn.addEventListener("click", () => {});
function addSecond() {
  second++;
}
setInterval(addSecond, 1000);
