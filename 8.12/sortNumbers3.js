let numList = [2, 34, 76, 6, 7, 8, 0];
const body = document.querySelector("body");
const title = document.createElement("h4");
const p = document.createElement("p");
const btn = document.createElement("button");

title.innerText = "3) Sort Numbers";
p.innerText = "Numbers: " + numList;
btn.innerText = "Sorting Ascending";

btn.addEventListener("click", () => {
  //   console.log("working");
  let newNumList = numList.sort((a, b) => {
    return a - b;
  });
  p.innerText = "Numbers: " + newNumList;
});
// console.log(numList);

body.appendChild(title);
body.appendChild(p);
body.appendChild(btn);
