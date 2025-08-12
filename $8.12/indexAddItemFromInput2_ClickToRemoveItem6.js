let itemList = [];
const body = document.querySelector("body");
const task2 = document.createElement("h4");
const input = document.createElement("input");
const addBtn = document.createElement("button");
const task5 = document.createElement("h4");
const ul = document.createElement("ul");

task2.innerText = "2) Add Item from Input";
addBtn.innerText = "Add";
task5.innerText = "6) Click to Remove Item";

const printInputValue = (value) => {
  //   console.log(value);
  itemList.push(value);
  input.value = "";
  //   console.log(itemList);
};

const render = () => {
  ul.innerHTML = "";
  //   console.log("working");
  itemList.map((el, i) => {
    const li = document.createElement("li");
    li.innerText = el;
    ul.appendChild(li);

    li.addEventListener("click", () => {
      let newItemList = itemList.filter((element, index) => {
        return index !== i;
      });
      itemList = newItemList;
      // console.log(itemList);
      render();
    });
  });
};

addBtn.addEventListener("click", () => {
  //   console.log("working");
  printInputValue(input.value);
  render();
});

body.appendChild(task2);
body.appendChild(input);
body.appendChild(addBtn);
body.appendChild(task5);
body.appendChild(ul);
