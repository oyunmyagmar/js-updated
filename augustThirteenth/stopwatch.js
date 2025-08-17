const body = document.querySelector("body");
const stopWatchContainer = document.createElement("div");
const timeCounter = document.createElement("div");
const btnContainer = document.createElement("div");
const startBtn = document.createElement("button");
const stopBtn = document.createElement("button");
const resetBtn = document.createElement("button");
const realtimePTag = document.createElement("p");

stopWatchContainer.classList.add("stopWatchContainer");
timeCounter.classList.add("timeCounter");
btnContainer.classList.add("btnContainer");
startBtn.classList.add("btn");
stopBtn.classList.add("btn");
resetBtn.classList.add("btn");
realtimePTag.classList.add("realtimePTag");

let minutes = 0;
let seconds = 0;
let dateToday = new Date();
console.log("date", dateToday);
let milliseconds = dateToday.getMilliseconds();
console.log("milliseconds", milliseconds);

timeCounter.innerText = `0${minutes}:0${seconds}.${milliseconds}`;
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
  // if (milliseconds < 10) {
  //   milliseconds += "000" + milliseconds;
  // } else if (milliseconds < 100) {
  //   milliseconds += "00" + milliseconds;
  // } else if (milliseconds < 1000) {
  //   milliseconds += "0" + milliseconds;
  // }
  // if (seconds < 10) {
  //   seconds += "0" + seconds;
  // }
  // if (minutes < 10) {
  //   minutes = "0" + minutes;
  // }
  timeCounter.innerText = `${minutes}:${seconds}.${milliseconds}`;
};
let interval;
// clearInterval(interval);

startBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(addMlliseconds, 1);
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
  const realtime = dateToday.toString().split(" ")[4];
  console.log("realtime", realtime);
  realtimePTag.innerText = `Current: ${realtime}`;
}
setInterval(printRealTime, 1000);

btnContainer.appendChild(startBtn);
btnContainer.appendChild(stopBtn);
btnContainer.appendChild(resetBtn);
stopWatchContainer.appendChild(timeCounter);
stopWatchContainer.appendChild(realtimePTag);
stopWatchContainer.appendChild(btnContainer);
body.append(stopWatchContainer);
