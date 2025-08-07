// Light turn on/off
// https://www.w3schools.com/js/pic_bulboff.gif
// https://www.w3schools.com/js/pic_bulbon.gif

const body = document.querySelector("body");
const image = document.createElement("img");
const button = document.createElement("button");

let isOn = false;
button.innerText = "On";

image.src = " https://www.w3schools.com/js/pic_bulboff.gif";

button.addEventListener("click", () => {
  isOn = !isOn;

  button.innerText = isOn ? "Off" : "On";

  if (isOn) {
    image.src = "https://www.w3schools.com/js/pic_bulbon.gif";
  } else {
    image.src = "https://www.w3schools.com/js/pic_bulboff.gif";
  }
  // isOn
  //   ? (image.src = "https://www.w3schools.com/js/pic_bulboff.gif")
  //   : (image.src = "https://www.w3schools.com/js/pic_bulbon.gif");
});
body.appendChild(image);
body.appendChild(button);
