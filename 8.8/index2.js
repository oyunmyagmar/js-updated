const body = document.querySelector("body");
const boxRed = document.createElement("div");
const boxBlue = document.createElement("div");

boxRed.style.width = "50%";
boxBlue.style.width = "50%";

boxRed.classList.add("boxRed");
boxBlue.classList.add("boxBlue");

boxRed.addEventListener("click", () => {
  boxRed.style.width = parseInt(boxRed.style.width) + 1 + "%";
  boxBlue.style.width = parseInt(boxBlue.style.width) - 1 + "%";
});

boxBlue.addEventListener("click", () => {
  boxBlue.style.width = parseInt(boxBlue.style.width) + 1 + "%";
  boxRed.style.width = parseInt(boxRed.style.width) - 1 + "%";
});

body.appendChild(boxRed);
body.appendChild(boxBlue);

document.addEventListener("keydown", function (event) {
  console.log("key pressed: " + event.key);
  if (event.key == "Enter") {
    boxRed.style.width = parseInt(boxRed.style.width) + 1 + "%";
    boxBlue.style.width = parseInt(boxBlue.style.width) - 1 + "%";
  } else if (event.key == " ") {
    boxBlue.style.width = parseInt(boxBlue.style.width) + 1 + "%";
    boxRed.style.width = parseInt(boxRed.style.width) - 1 + "%";
  }
});
