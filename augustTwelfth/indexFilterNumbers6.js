let numArr = [4, 67, 87, -1, 35, 2, 4, -6, 20, 15, 2, 3];
const body = document.querySelector("body");
const task6 = document.createElement("h4");
const p = document.createElement("p");
const showBtn = document.createElement("button");

task6.innerText = "6) Filter Numbers > 5";
p.innerText = numArr;
// console.log(p.innerText);
showBtn.innerText = "Show Numbers > 5";

showBtn.addEventListener("click", () => {
  p.innerText = "";
  //   console.log("working");
  let newNumArr = numArr.filter((element) => {
    return element > 5;
  });
  p.innerText += newNumArr;
  //   console.log(p.innerText);
});

body.appendChild(task6);
body.appendChild(p);
body.appendChild(showBtn);
