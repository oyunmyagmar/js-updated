const body = document.querySelector("body");
const task2 = document.createElement("h4");
const colorBox = document.createElement("div");
const changeBtn = document.createElement("button");

colorBox.classList.add("colorBox");

colorBox.style.backgroundColor = "blue";

task2.innerText = "2) Change Background Color";
changeBtn.innerText = "Change Color";

changeBtn.addEventListener("click", () => {
  colorBox.style.backgroundColor = "red";
});

body.appendChild(task2);
body.appendChild(colorBox);
body.appendChild(changeBtn);
