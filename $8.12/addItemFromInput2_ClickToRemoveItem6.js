let itemList = [];
const body = document.querySelector("body");
const title = document.createElement("h4");
const input = document.createElement("input");
const btn = document.createElement("button");
const ul = document.createElement("ul");
const title1 = document.createElement("h4");

title.innerText = "2) Add Item from Input";
btn.innerText = "Add";
title1.innerText = "5) Click to Remove Item";

const printInputValue = (value) => {
  //   console.log(value);
  itemList.push(value);
  //   console.log(itemList);
};

const render = () => {
  ul.innerHTML = "";
  itemList.map((element) => {
    const li = document.createElement("li");
    li.innerText = element;
    ul.appendChild(li);

    li.addEventListener("click", () => {
      console.log("working");
      let newItemList = itemList.filter((el) => {
        el !== element;
      });
      itemList = newItemList;
    });
  });
};

btn.addEventListener("click", () => {
  printInputValue(input.value);
  render();
});

body.appendChild(title);
body.appendChild(input);
body.appendChild(btn);
body.appendChild(title1);
body.appendChild(ul);
