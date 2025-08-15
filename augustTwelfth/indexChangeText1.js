const body = document.querySelector("body");
const task1 = document.createElement("h4");
const input = document.createElement("input");
const changeBtn = document.createElement("button");

task1.innerText = "1) Change text";
input.value = "Hello World!";
changeBtn.innerText = "Change to 'Hi There!'";

changeBtn.addEventListener("click", () => {
  input.value = "Hi There!";
});

body.appendChild(task1);
body.appendChild(input);
body.appendChild(changeBtn);
