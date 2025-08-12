const body = document.querySelector("body");
const task3 = document.createElement("h4");
const ul = document.createElement("ul");
const li = document.createElement("li");
const addBtn = document.createElement("button");

task3.innerText = "3) Add List Item";
li.innerText = "Apple";
addBtn.innerText = "Add Banana";

addBtn.addEventListener("click", () => {
  //   console.log("working");
  const li = document.createElement("li");
  li.innerText = "Banana";
  ul.appendChild(li);
});

ul.appendChild(li);
body.appendChild(task3);
body.appendChild(ul);
body.appendChild(addBtn);
