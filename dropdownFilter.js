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
const body = document.querySelector("body");
const title = document.createElement("h5");
const ul = document.createElement("ul");
const foodSelect = document.getElementById("food-select");

title.innerText = "5) Dropdown Filter";

food.map((element) => {
  const li = document.createElement("li");
  li.innerText += element.name;
  ul.appendChild(li);
});

foodSelect.addEventListener("change", () => {
  // ul.innerHTML = "";
  // console.log("working");
  food.filter((el) => {
    el.category == foodSelect.value;
    const li = document.createElement("li");
    li.innerText += el.name;
    ul.appendChild(li);
  });
});

body.appendChild(title);
body.appendChild(ul);
