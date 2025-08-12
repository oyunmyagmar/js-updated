const body = document.querySelector("body");
const container = document.createElement("div");
const title = document.createElement("h5");
const p = document.createElement("p");
const btn = document.createElement("button");

title.innerText = "5) Count Button Clicks";
btn.innerText = "Click Me";
p.innerText = "Clicked 0 times";
let count = 0;

btn.addEventListener("click", () => {
  count++;
  console.log(count);
  p.innerText = `Clicked ${count} times`;
});

container.appendChild(title);
container.appendChild(p);
container.appendChild(btn);

body.appendChild(container);
