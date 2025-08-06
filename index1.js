let listData = [];
const ul = document.querySelector("ul");

const printInputValue = (value) => {
  console.log(value);
  listData.push(value);
  console.log(listData);
};

const render = () => {
  //   console.log("working");
  ul.innerHTML = "";
  listData.map((element, index) => {
    const li = document.createElement("li");
    const liButton = document.createElement("button");
    li.innerText = element;
    liButton.innerText = "x";

    liButton.addEventListener("click", () => {
      const newListData = listData.filter((el, i) => {
        return i !== index;
      });
      listData = newListData;
      render();
      //   console.log(newListData), "data";
    });

    ul.appendChild(li);
    li.appendChild(liButton);
  });
};

// const deleteInputValue = (value) => {
//   const newListData = listData.filter((element) => {
//     if (element !== value) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// };
const body = document.querySelector("body");
// console.log(body);
const input = document.createElement("input");
const button = document.createElement("button");

button.addEventListener("click", () => {
  printInputValue(input.value);
  render();
});
button.innerText = "click me";
// button.onclick = printInputValue;

body.appendChild(input);
body.appendChild(button);
