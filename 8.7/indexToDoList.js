let listData = [];
const ul = document.querySelector("ul");

const printInputValue = (value) => {
  if (value == "") {
    alert("input empty");
    const name = prompt("Hello");
    console.log(name);
    return null;
  } else {
    listData.push(value);
  }
  // console.log(value);
  // listData.push(value);
  // console.log(listData);
};
// printInputValue("hello")

// const printIconInput = (value) => {
//   const iconInput = document.createElement("input");
// };

const render = () => {
  //   console.log("working");

  ul.innerHTML = "";
  listData.map((element, index) => {
    const li = document.createElement("li");
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "X";
    removeBtn.classList.add("removeBtn");
    const btnIconContainer = document.createElement("div");
    const image = document.createElement("img");
    image.src =
      "data:image/png;base64,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";
    image.width = 30;

    removeBtn.addEventListener("click", () => {
      // console.log("hello");
      // li.remove(); -> todo2 -iig ustgasan ch todo4 -iig uguhuur butsad garad irne? <- array ustgagui <- solih shardalagatai -> array -iin element -iig ustgah
      const newListData = listData.filter((el, i) => {
        return i !== index;
      });
      // console.log(newListData, "data");
      listData = newListData;
      // console.log(listData, "list");
      render();
    });

    image.addEventListener("click", () => {
      // console.log("hello icon");
      const newListData = listData.filter((el, i) => {
        return i !== index;
      });
      listData = newListData;
      // printIconInput(input);
      render();
    });

    li.innerText = element;
    // input.value = ""; -> by bagsh
    li.classList.add("list");
    btnIconContainer.classList.add("btnIconContainer");

    btnIconContainer.appendChild(image);
    btnIconContainer.appendChild(removeBtn);
    li.appendChild(btnIconContainer);
    ul.appendChild(li);
  });
};

const body = document.querySelector("body");
const input = document.createElement("input");
const button = document.createElement("button");
button.addEventListener("click", () => {
  //   input.value;
  printInputValue(input.value);
  input.value = "";

  render();
});
button.innerText = "click me";
// button.onclick = printInputValue();

body.appendChild(input);
body.appendChild(button);
