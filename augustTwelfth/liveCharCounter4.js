const body = document.querySelector("body");
const title = document.createElement("h5");
const input = document.createElement("input");
const p = document.createElement("p");

title.innerText = "4) Live Character Counter";
p.innerText = "Characters: 0";

input.addEventListener("change", () => {
  // console.log(input.value.split(""));
  const newCharList = input.value.split("");
  p.innerText = "Characters: " + newCharList.length;
});

body.appendChild(title);
body.appendChild(input);
body.appendChild(p);
