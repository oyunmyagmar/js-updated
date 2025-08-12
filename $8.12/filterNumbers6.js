let numArr = [3, 6, 67, 889, 23, 10, 6, 1, 2, 5];
const body = document.querySelector("body");
const container = document.createElement("div");
const title = document.createElement("h4");
const p = document.createElement("p");
const btn = document.createElement("button");

title.innerText = "6) Filter Numbers > 5";
p.innerText = numArr;
btn.innerText = "Show Numbers > 5";

btn.addEventListener("click", () => {
  let newNumArr = numArr.filter((el) => {
    return Number(el) > 5;
  });
  p.innerText = newNumArr;
});

container.appendChild(title);
container.appendChild(p);
container.appendChild(btn);

body.appendChild(container);
