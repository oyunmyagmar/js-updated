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
  if (value !== "") {
    listData.push(value);
  } else {
    alert("input empty");
    prompt("name");
    return null;
  }
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
    const image = document.createElement("img");

    li.classList.add("li");

    li.innerText = element;
    removeBtn.innerText = "X";
    image.src = "https://cdn-icons-png.flaticon.com/128/1250/1250615.png";
    image.height = 22;

    removeBtn.addEventListener("click", () => {
      li.innerText = "";
      const newListData = listData.filter((el, i) => {
        return i !== index;
      });
      listData = newListData;
      render();
    });

    image.addEventListener("click", () => {
      const inputUpdate = document.createElement("input");
      inputUpdate.value = element;
      li.appendChild(inputUpdate);
    });

    li.appendChild(image);
    li.appendChild(removeBtn);
    ul.appendChild(li);
  });
};

// onclick
button.addEventListener("click", () => {
  printInputValue(input.value);
  input.value = "";
  //   if (input.value == "") {
  //     alert("input empty");
  //     prompt("name");
  //     return null;
  //   } else {
  //   }
  render();
});

body.appendChild(input);
body.appendChild(button);
body.appendChild(ul);
