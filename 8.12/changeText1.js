const body = document.querySelector("body");
const container = document.createElement("div");
const title = document.createElement("p");
const input = document.createElement("input");
const btn = document.createElement("button");

title.innerText = "1) Change text";
input.value = "Hello World!";
btn.innerText = "Change to 'Hi There!'";

btn.addEventListener("click", () => {
  input.value = "Hi There!";
});

container.appendChild(title);
container.appendChild(input);
container.appendChild(btn);

body.appendChild(container);
