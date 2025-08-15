const colorsByName = [
  `Green`,
  `GreenYellow`,
  `HoneyDew`,
  `HotPink`,
  `IndianRed`,
  `Indigo`,
  `Ivory`,
  `Khaki`,
  `Lavender`,
  `LavenderBlush`,
  `LawnGreen`,
  `LemonChiffon`,
  `LightBlue`,
  `LightCoral`,
];
const body = document.querySelector("body");
const task1 = document.createElement("h4");
const changeBtn = document.createElement("button");

// body.style.backgroundColor = "grey";

task1.innerText = "1) Random Background Color";
changeBtn.innerText = "Change Color";

changeBtn.addEventListener("click", () => {
  //   console.log(Math.floor(Math.random() * 10));
  body.style.backgroundColor = colorsByName[Math.floor(Math.random() * 10)];
});

body.appendChild(task1);
body.appendChild(changeBtn);
