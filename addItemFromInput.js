const itemList = [];
const body = document.querySelector("body");
const title = document.createElement("h5");
const input = document.createElement("input");
const btn = document.createElement("button");
const ul = document.createElement("ul");

title.innerText = "2) Add Item from Input";
btn.innerText = "Add";

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
  });
};

btn.addEventListener("click", () => {
  printInputValue(input.value);
  render();
});

body.appendChild(title);
body.appendChild(input);
body.appendChild(btn);
body.appendChild(ul);
