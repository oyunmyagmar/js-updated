const body = document.querySelector("body");
const task4 = document.createElement("h4");
const input = document.createElement("input");
const p = document.createElement("p");

task4.innerText = "4) Live Character Counter";
p.innerText = "Characters: 0";

input.addEventListener("change", () => {
  //   console.log("working");
  //   console.log(input.value.split(""));
  let charArr = input.value.split("");
  p.innerText = "Character: " + charArr.length;
  //   console.log(charArr);
});

body.appendChild(task4);
body.appendChild(input);
body.appendChild(p);
