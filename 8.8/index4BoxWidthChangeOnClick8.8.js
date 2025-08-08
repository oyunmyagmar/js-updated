const body = document.querySelector("body");
const redSide = document.createElement("div");
const greenSide = document.createElement("div");
const blueSide = document.createElement("div");
const orangeSide = document.createElement("div");

redSide.classList.add("redSide");
greenSide.classList.add("greenSide");
blueSide.classList.add("blueSide");
orangeSide.classList.add("orangeSide");

redSide.style.width = "50%";
redSide.style.height = "50vh";
greenSide.style.width = "50%";
greenSide.style.height = "50vh";
blueSide.style.width = "50%";
blueSide.style.height = "50vh";
orangeSide.style.width = "50%";
orangeSide.style.height = "50vh";

redSide.addEventListener("click", () => {
  redSide.style.width = parseInt(redSide.style.width) + 1 + "%";
  redSide.style.height = parseInt(redSide.style.height) + 1 + "vh";
  greenSide.style.width = parseInt(greenSide.style.width) - 1 + "%";
  greenSide.style.height = parseInt(greenSide.style.height) + 1 + "vh";
  blueSide.style.width = parseInt(blueSide.style.width) + 1 + "%";
  blueSide.style.height = parseInt(blueSide.style.height) - 1 + "vh";
  orangeSide.style.width = parseInt(orangeSide.style.width) - 1 + "%";
  orangeSide.style.height = parseInt(orangeSide.style.height) - 1 + "vh";

  redSide.innerText = redSide.style.width + redSide.style.height;
  greenSide.innerText = greenSide.style.width + greenSide.style.height;
  blueSide.innerText = blueSide.style.width + blueSide.style.height;
  orangeSide.innerText = orangeSide.style.width + orangeSide.style.height;
});

greenSide.addEventListener("click", () => {
  greenSide.style.width = parseInt(greenSide.style.width) + 1 + "%";
  greenSide.style.height = parseInt(greenSide.style.height) + 1 + "vh";
  redSide.style.width = parseInt(redSide.style.width) - 1 + "%";
  redSide.style.height = parseInt(redSide.style.height) + 1 + "vh";
  orangeSide.style.width = parseInt(orangeSide.style.width) + 1 + "%";
  orangeSide.style.height = parseInt(orangeSide.style.height) - 1 + "vh";
  blueSide.style.width = parseInt(blueSide.style.width) - 1 + "%";
  blueSide.style.height = parseInt(blueSide.style.height) - 1 + "vh";

  greenSide.innerText = greenSide.style.width + greenSide.style.height;
  redSide.innerText = redSide.style.width + redSide.style.height;
  orangeSide.innerText = orangeSide.style.width + orangeSide.style.height;
  blueSide.innerText = blueSide.style.width + blueSide.style.height;
});

blueSide.addEventListener("click", () => {
  blueSide.style.width = parseInt(blueSide.style.width) + 1 + "%";
  blueSide.style.height = parseInt(blueSide.style.height) + 1 + "vh";
  orangeSide.style.width = parseInt(orangeSide.style.width) - 1 + "%";
  orangeSide.style.height = parseInt(orangeSide.style.height) + 1 + "vh";
  redSide.style.width = parseInt(redSide.style.width) + 1 + "%";
  redSide.style.height = parseInt(redSide.style.height) - 1 + "vh";
  greenSide.style.width = parseInt(greenSide.style.width) - 1 + "%";
  greenSide.style.height = parseInt(greenSide.style.height) - 1 + "vh";

  blueSide.innerText = blueSide.style.width + blueSide.style.height;
  orangeSide.innerText = orangeSide.style.width + orangeSide.style.height;
  redSide.innerText = redSide.style.width + redSide.style.height;
  greenSide.innerText = greenSide.style.width + greenSide.style.height;
});

orangeSide.addEventListener("click", () => {
  orangeSide.style.width = parseInt(orangeSide.style.width) + 1 + "%";
  orangeSide.style.height = parseInt(orangeSide.style.height) + 1 + "vh";
  blueSide.style.width = parseInt(blueSide.style.width) - 1 + "%";
  blueSide.style.height = parseInt(blueSide.style.height) + 1 + "vh";
  greenSide.style.width = parseInt(greenSide.style.width) + 1 + "%";
  greenSide.style.height = parseInt(greenSide.style.height) - 1 + "vh";
  redSide.style.width = parseInt(redSide.style.width) - 1 + "%";
  redSide.style.height = parseInt(redSide.style.height) - 1 + "vh";

  orangeSide.innerText = orangeSide.style.width + orangeSide.style.height;
  blueSide.innerText = blueSide.style.width + blueSide.style.height;
  greenSide.innerText = greenSide.style.width + greenSide.style.height;
  redSide.innerText = redSide.style.width + redSide.style.height;
});

body.appendChild(redSide);
body.appendChild(greenSide);
body.appendChild(blueSide);
body.appendChild(orangeSide);
