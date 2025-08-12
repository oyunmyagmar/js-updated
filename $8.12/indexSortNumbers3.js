const numList = [23, 45, 6, 87, 237, 532, 87654, -765, -3, 0];
const body = document.querySelector("body");
const task3 = document.createElement("h4");
const p = document.createElement("p");
const sortBtn = document.createElement("button");

task3.innerText = " 3) Sort Numbers";
p.innerText = "Numbers: " + numList;
sortBtn.innerText = "Sorting Ascending";

sortBtn.addEventListener("click", () => {
  numList.sort((a, b) => {
    return a - b;
  });
  p.innerText = "Numbers: " + numList;
});

body.appendChild(task3);
body.appendChild(p);
body.appendChild(sortBtn);
