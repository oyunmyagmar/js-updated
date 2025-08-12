const colorList = [
  `AliceBlue`,
  `AntiqueWhite`,
  `Aqua`,
  `Aquamarine`,
  `Azure`,
  `Beige`,
  `Bisque`,
];
const body = document.querySelector("body");
const title = document.createElement("p");
const btn = document.createElement("button");

title.innerText = "1) Random Background Color";
btn.innerText = "Change Color";
body.style.backgroundColor = colorList[0];

btn.addEventListener("click", () => {
  //   console.log(Math.floor(Math.random() * 10));

  body.style.backgroundColor = colorList[Math.floor(Math.random() * 10)];
});

body.appendChild(title);
body.appendChild(btn);
