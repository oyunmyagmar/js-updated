const body = document.querySelector("body");
const task5 = document.createElement("h4");
const text = document.createElement("p");
const countBtn = document.createElement("button");

task5.innerText = "5) Count Button Clicks";
text.innerText = "Clicked 0 times";
countBtn.innerText = "Click Me";

let count = 0;

countBtn.addEventListener("click", () => {
  count++;
  text.innerText = `Clicked ${count} times`;
});

body.appendChild(task5);
body.appendChild(text);
body.appendChild(countBtn);
