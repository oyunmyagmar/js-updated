const body = document.querySelector("body");
const counter = document.createElement("div");
const second = document.createElement("p");
const startBtn = document.createElement("button");
const stopBtn = document.createElement("button");

counter.innerText = 0;
second.value = 0;

counter.appendChild(second);
body.append(counter);
