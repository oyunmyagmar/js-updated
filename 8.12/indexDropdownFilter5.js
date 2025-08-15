foodList = [
  { name: "Banana", category: "Fruits" },
  { name: "Apple", category: "Fruits" },
  { name: "Strawberries", category: "Fruits" },
  { name: "Blueberries", category: "Fruits" },
  { name: "Broccoli", category: "Vegetables" },
  { name: "Spinach", category: "Vegetables" },
  { name: "Sweet Potatoes", category: "Vegetables" },
  { name: "Corn", category: "Vegetables" },
  { name: "Milk", category: "Dairy" },
  { name: "Yogurt", category: "Dairy" },
  { name: "Cheese", category: "Dairy" },
  { name: "Curd", category: "Dairy" },
  { name: "Meat", category: "Protein" },
  { name: "Chicken", category: "Protein" },
  { name: "Eggs", category: "Protein" },
  { name: "Fish", category: "Protein" },
];
const body = document.querySelector("body");
const task5 = document.createElement("h4");
const select = document.createElement("select");
const option = document.createElement("option");
const ul = document.createElement("ul");
const foodCategorySelect = document.getElementById("foodCategorySelect");

task5.innerText = "5) Dropdown Filter";

// endes dosh dahij harah
foodList.map((element) => {
  //   console.log("working");
  //   console.log(element.name);
  const li = document.createElement("li");
  li.innerText = element.name;
  ul.appendChild(li);
});
const categories = foodList.map((item) => {
  return item.category;
});
const uniqueCategories = {};
categories.forEach((category) => {
  uniqueCategories[category] = true;
  // console.log(uniqueCategories);
  console.log(Object.keys(uniqueCategories));
});

// endes desh dahij harah

foodCategorySelect.addEventListener("change", () => {
  ul.innerHTML = "";
  let newFoodList = foodList.filter((el) => {
    return el.category == foodCategorySelect.value;
  });
  console.log(newFoodList);
  newFoodList.map((elem) => {
    const li = document.createElement("li");
    li.innerText = elem.name;
    ul.appendChild(li);
  });
});

select.appendChild(option);
body.appendChild(task5);
body.appendChild(select);
body.appendChild(ul);
