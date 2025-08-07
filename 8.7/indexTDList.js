// input
// click button
// button click hiihed
// input der orulsan utga
// li der add hiij haragddag

let listData = [];
const body = document.querySelector("body");
const input = document.createElement("input");
const button = document.createElement("button");
const ul = document.createElement("ul");

button.innerText = "add";

// input value log and listData array push
const printInputValue = (value) => {
  listData.push(value);
};

// ul empty
// listData loop
// create li tag and change innerText
// ul appendChild li
const render = () => {
  ul.innerHTML = "";
  listData.map((element, index) => {
    const li = document.createElement("li");
    const removeBtn = document.createElement("button");

    li.innerText = element;
    removeBtn.innerText = "X";

    removeBtn.addEventListener("click", () => {
      const newListData = listData.filter((el, i) => {
        return i !== index;
      });
      listData = newListData;
      render();
    });

    ul.appendChild(li);
    li.appendChild(removeBtn);
  });
};

// onclick
button.addEventListener("click", () => {
  printInputValue(input.value);
  render();
});

body.appendChild(input);
body.appendChild(button);
body.appendChild(ul);
