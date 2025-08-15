const colorList = [
  "Ivory",
  "Salmon",
  "DarkGreen",
  "WhiteSmoke",
  "Chocolate",
  "LimeGreen",
  "MediumBlue",
  "Lavender",
  "DimGray",
  "Goldenrod",
  "Orange",
  "Azure",
];
const body = document.querySelector("body");
const title = document.createElement("p");
const btn = document.createElement("button");

body.style.backgroundColor = colorList[0];

title.innerText = "1) Random Background Color";
btn.innerText = "Change Color";

btn.addEventListener("click", () => {
  //   console.log(Math.floor(Math.random() * 10));
  body.style.backgroundColor = colorList[Math.floor(Math.random() * 10)];
});

body.appendChild(title);
body.appendChild(btn);
