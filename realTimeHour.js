const body = document.querySelector("body");
const realTimerContainer = document.createElement("div");
const p = document.createElement("p");

realTimerContainer.classList.add("realTimerContainer");

function printDate() {
  let date = new Date();
  // console.log(date.toString().split(" ")[4]);
  const realTime = date.toString().split(" ")[4];
  p.innerText = realTime;
}

setInterval(printDate, 1000);

realTimerContainer.appendChild(p);
body.appendChild(realTimerContainer);
