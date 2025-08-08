// 1. delgetsee 2 huvaana
// 2. 1 ni ulaan, nuguuh ni tsenher
// 3. ulaan der darval ulan tomrod tsenherin zai bagasana <-click
// 4. tsenher der darval tsenher tomrod ulaan zai bagasana <-click
const body = document.querySelector("body");
const redPart = document.createElement("div");
const bluePart = document.createElement("div");

redPart.classList.add("redPart");
bluePart.classList.add("bluePart");
redPart.style.width = "50%";
bluePart.style.width = "50%";

redPart.addEventListener("click", () => {
  redPart.style.width = parseInt(redPart.style.width) + 1 + "%";
  bluePart.style.width = parseInt(bluePart.style.width) - 1 + "%";
  redPart.innerText = redPart.style.width;
  bluePart.innerText = bluePart.style.width;
});

bluePart.addEventListener("click", () => {
  bluePart.style.width = parseInt(bluePart.style.width) + 1 + "%";
  redPart.style.width = parseInt(redPart.style.width) - 1 + "%";
  bluePart.innerText = bluePart.style.width;
  redPart.innerText = redPart.style.width;
});

body.appendChild(redPart);
body.appendChild(bluePart);
