const body = document.querySelector("body");
const task4 = document.createElement("h4");
const text = document.createElement("p");
const btn = document.createElement("button");

task4.innerText = "4) Hide & Show Element";
text.innerText = "You can hide and show me";
btn.innerText = "Hide/Show";

btn.addEventListener("click", () => {
  if (text.innerText == "You can hide and show me") {
    text.innerText = "";
  } else if (text.innerText == "") {
    text.innerText = "You can hide and show me";
  }
});

body.appendChild(task4);
body.appendChild(text);
body.appendChild(btn);
