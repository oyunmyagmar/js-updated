const body = document.querySelector("body");
const realTimeContainer = document.createElement("div");
const date = new Date();
console.log(date);
console.log(date.toString.split(" "));

function printDate() {
  const newDate = date.split(" ");
  console.log(newDate);
}

body.appendChild(realTimeContainer);
