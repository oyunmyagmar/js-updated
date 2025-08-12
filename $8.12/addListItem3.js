const body = document.querySelector("body");
const container = document.createElement("div");
const title = document.createElement("h4");
const ul = document.createElement("ul");
const btn = document.createElement("button");

title.innerText = "3) Add List Item";
btn.innerText = "Add Banana";

btn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.innerText = btn.innerText;
  ul.appendChild(li);
});

container.appendChild(title);
container.appendChild(ul);
container.appendChild(btn);

body.appendChild(container);
