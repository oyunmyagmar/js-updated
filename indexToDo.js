const listData = [];
const ul = document.querySelector("ul");

const printInputValue = (value) => {
  console.log(value);
  listData.push(value);
  console.log(listData);
};
// printInputValue("hello")

const render = () => {
  //   console.log("working");
  ul.innerHTML = "";
  listData.map((element) => {
    const li = document.createElement("li");
    li.innerText = element;
    ul.appendChild(li);
  });
};

const body = document.querySelector("body");
const input = document.createElement("input");
const button = document.createElement("button");
button.addEventListener("click", () => {
  //   input.value;
  printInputValue(input.value);
  render();
});
button.innerText = "click me";
// button.onclick = printInputValue();

body.appendChild(input);
body.appendChild(button);
