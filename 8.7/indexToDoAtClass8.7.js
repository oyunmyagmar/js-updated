// <--------- Main Start ---------->
// body select
const body = document.querySelector("body");

// create tag
const input = document.createElement("input");
const button = document.createElement("button");
const ul = document.createElement("ul");

button.innerText = "add";

body.appendChild(input);
body.appendChild(button);
body.appendChild(ul);
// <--------- Main End ---------->

// <--------- ToDo Add Start ---------->
// add data to array
let data = [];

const addTodo = (value) => {
  data.push(value);
};

const createElement = (value) => {
  const li = document.createElement("li");
  const xBtn = document.createElement("button");
  li.innerText = value;
  xBtn.innerText = "X";

  xBtn.addEventListener("click", () => {
    const newData = data.filter((element) => element !== value);
    data = newData;
    render();
  });

  li.appendChild(xBtn);
  ul.appendChild(li);
};

// const removeElement = (value) => {};

// buh element zureah
const render = () => {
  // previous ul empty
  ul.innerHTML = "";
  // buh element -eer davtaad createElement function duudah
  data.map((value) => {
    // 1 element shiner uusgej bga hseg
    createElement(value);
  });
};

button.addEventListener("click", () => {
  addTodo(input.value);
  render();
});
