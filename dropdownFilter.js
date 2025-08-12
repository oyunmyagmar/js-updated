const body = document.querySelector("body");

const title = document.createElement("h5");
const select = document.getElementById("food-select");
const ul = document.createElement("ul");

title.innerText = "5) Dropdown Filter";

let food = [
  { name: "Apple", category: "Fruits" },
  { name: "Banana", category: "Fruits" },
  { name: "Bluberry", category: "Fruits" },
  { name: "Pea", category: "Vegetables" },
  { name: "Potato", category: "Vegetables" },
  { name: "Broccoli", category: "Vegetables" },
  { name: "Milk", category: "Dairy" },
  { name: "Yogurt", category: "Dairy" },
  { name: "Cheese", category: "Dairy" },
];

food.map((element) => {
  const li = document.createElement("li");
  li.innerText += element.name;
  ul.appendChild(li);
});

const printFood = () => {
  food.map((element) => {
    const li = document.createElement("li");
    li.innerText += element.name;
    ul.appendChild(li);
  });
};
// select.append(option);
body.appendChild(title);
body.appendChild(ul);
// body.appendChild(select);
