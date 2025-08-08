const body = document.querySelector("body");
const boxRed = document.createElement("div");
const boxBlue = document.createElement("div");

boxRed.classList.add("boxRed");
boxBlue.classList.add("boxBlue");

boxRed.addEventListener("click", () => {
  //   boxRed.style.backgroundColor = "black";
  const currentWidthRed = parseInt(getComputedStyle(boxRed).width);
  boxRed.style.width = currentWidthRed + 10 + "px";
  //   console.log(currentWidthRed);
  const currentWidthBlue = parseInt(getComputedStyle(boxBlue).width);
  //   console.log(currentWidthBlue);
  boxBlue.style.width = currentWidthBlue - 10 + "px";
});

boxBlue.addEventListener("click", () => {
  const currentWidthBlue = parseInt(getComputedStyle(boxBlue).width);
  boxBlue.style.width = currentWidthBlue + 10 + "px";
  const currentWidthRed = parseInt(getComputedStyle(boxRed).width);
  boxRed.style.width = currentWidthRed - 10 + "px";
});

body.appendChild(boxRed);
body.appendChild(boxBlue);
