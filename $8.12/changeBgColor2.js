const body = document.querySelector("body");
const container = document.createElement("div");
const title = document.createElement("h4");
const colorBox = document.createElement("div");
const btn = document.createElement("button");

colorBox.classList.add("colorBox");

colorBox.style.backgroundColor = "red";

title.innerText = "2) Change Background Color";
btn.innerText = "Change Color";

btn.addEventListener("click", () => {
  colorBox.style.backgroundColor = "blue";
});

container.appendChild(title);
container.appendChild(colorBox);
container.appendChild(btn);

body.appendChild(container);
