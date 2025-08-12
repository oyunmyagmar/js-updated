const body = document.querySelector("body");
const container = document.createElement("div");
const title = document.createElement("h5");
const text = document.createElement("p");
const btn = document.createElement("button");

title.innerText = "4) Hide & Show Element";
text.innerText = "You can hide and show me";
btn.innerText = "Hide/Show";

const printText = (value) => {
  text.innerText = "You can hide and show me";
};
const removeText = (value) => {
  text.innerText = "";
};

btn.addEventListener("click", () => {
  if (text.innerText == "") {
    text.innerText = "You can hide and show me";
  } else if ((text.innerText = "You can hide and show me")) {
    text.innerText = "";
  }
});

container.appendChild(title);
container.appendChild(text);
container.appendChild(btn);

body.appendChild(container);
