const body = document.querySelector("body");

const colorBox = document.createElement("div");
const button = document.createElement("button");

colorBox.classList.add("colorBox");

button.innerText = "change color";

const namedColors = [
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

colorBox.style.backgroundColor = namedColors[namedColors.length - 1];
let count = 0;

button.addEventListener("click", () => {
  colorBox.style.backgroundColor = namedColors[count];
  if (count > namedColors.length - 1) count = 0;
  Math.random();
  count++;
});

body.appendChild(colorBox);
body.appendChild(button);
