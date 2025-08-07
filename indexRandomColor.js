const body = document.querySelector("body");

const colorBox = document.createElement("div");
const button = document.createElement("button");

colorBox.classList.add("colorBox");

button.innerText = "change color";

const nameColors = [
  `AliceBlue`,
  `AntiqueWhite`,
  `Aqua`,
  `Aquamarine`,
  `Azure`,
  `Beige`,
  `Bisque`,
  `Black`,
  `BlanchedAlmond`,
  `Blue`,
  `BlueViolet`,
  `Brown`,
  `BurlyWood`,
];

colorBox.style.backgroundColor = nameColors[0];
let count = 1;
button.addEventListener("click", () => {
  //   console.log("working");
  colorBox.style.backgroundColor = nameColors[count];
  count++;
  if (count == 1) {
  }
});

body.appendChild(colorBox);
body.appendChild(button);
