const percentArr = [0.05, 0.1, 0.15, 0.25, 0.35, 0.5, 0.65, 0.8];
const body = document.querySelector("body");

const tipCalculatorContainer = document.createElement("div");
const tipCalculatorTitle = document.createElement("h1");
const mainCalculator = document.createElement("div");

const billContainer = document.createElement("div");
const billTitle = document.createElement("p");
const billInput = document.createElement("input");
const tipSelectorContainer = document.createElement("div");
const tipSelectorTitle = document.createElement("p");
const tipBtns = document.createElement("div");
const tip5PerBtn = document.createElement("button");
const tip10PerBtn = document.createElement("button");
const tip15PerBtn = document.createElement("button");
const tip25PerBtn = document.createElement("button");
const tip35PerBtn = document.createElement("button");
const tip50PerBtn = document.createElement("button");
const tip65PerBtn = document.createElement("button");
const tip80PerBtn = document.createElement("button");
let total = document.createElement("p");
const resetBtn = document.createElement("button");

tipCalculatorContainer.classList.add("tipCalculatorContainer");
tipCalculatorTitle.classList.add("tipCalculatorTitle");
mainCalculator.classList.add("mainCalculator");
billContainer.classList.add("billContainer");
billTitle.classList.add("billTitle");
billInput.classList.add("billInput");
tipSelectorContainer.classList.add("tipSelectorContainer");
tipSelectorTitle.classList.add("tipSelectorTitle");
tipBtns.classList.add("tipBtns");
tip5PerBtn.classList.add("btn");
tip10PerBtn.classList.add("btn");
tip15PerBtn.classList.add("btn");
tip25PerBtn.classList.add("btn");
tip35PerBtn.classList.add("btn");
tip50PerBtn.classList.add("btn");
tip65PerBtn.classList.add("btn");
tip80PerBtn.classList.add("btn");
total.classList.add("total");
resetBtn.classList.add("resetBtn");

tipCalculatorTitle.innerText = "Tip Calculator";

billTitle.innerText = "Bill";
billInput.placeholder = "$";
tipSelectorTitle.innerText = "Select Tip %";
tip5PerBtn.innerText = "5%";
tip10PerBtn.innerText = "10%";
tip15PerBtn.innerText = "15%";
tip25PerBtn.innerText = "25%";
tip35PerBtn.innerText = "35%";
tip50PerBtn.innerText = "50%";
tip65PerBtn.innerText = "65%";
tip80PerBtn.innerText = "80%";
total.innerText = "Total: ";
resetBtn.innerText = "Reset";

tip5PerBtn.addEventListener("click", () => {
  percentArr.map((element) => {
    total.innerText = element * parseInt(billInput.value);
  });
  // console.log(billInput.value);
  // total.innerText = "Total: ";
  // total.innerText += parseFloat(billInput.value * 1.05).toFixed(2);
  // console.log(total.innerText);
});

// tip5PerBtn.addEventListener("click", () => {
//   // console.log(billInput.value);
//   total.innerText = "Total: ";
//   total.innerText += parseFloat(billInput.value * 1.05).toFixed(2);
//   // console.log(total.innerText);
// });

tip10PerBtn.addEventListener("click", () => {
  total.innerText = "Total: ";
  total.innerText += parseFloat(billInput.value * 1.1).toFixed(2);
});
tip15PerBtn.addEventListener("click", () => {
  total.innerText = "Total: ";
  total.innerText += parseFloat(billInput.value * 1.15).toFixed(2);
});
tip25PerBtn.addEventListener("click", () => {
  total.innerText = "Total: ";
  total.innerText += parseFloat(billInput.value * 1.25).toFixed(2);
});
tip35PerBtn.addEventListener("click", () => {
  total.innerText = "Total: ";
  total.innerText += parseFloat(billInput.value * 1.35).toFixed(2);
});
tip50PerBtn.addEventListener("click", () => {
  total.innerText = "Total: ";
  total.innerText += parseFloat(billInput.value * 1.5).toFixed(2);
});
tip65PerBtn.addEventListener("click", () => {
  total.innerText = "Total: ";
  total.innerText += parseFloat(billInput.value * 1.65).toFixed(2);
});
tip80PerBtn.addEventListener("click", () => {
  total.innerText = "Total: ";
  total.innerText += parseFloat(billInput.value * 1.8).toFixed(2);
});

resetBtn.addEventListener("click", () => {
  // console.log("working");
  total.innerText = "0.00";
  billInput.value = "";
});

billContainer.appendChild(billTitle);
billContainer.appendChild(billInput);

tipBtns.appendChild(tip5PerBtn);
tipBtns.appendChild(tip10PerBtn);
tipBtns.appendChild(tip15PerBtn);
tipBtns.appendChild(tip25PerBtn);
tipBtns.appendChild(tip35PerBtn);
tipBtns.appendChild(tip50PerBtn);
tipBtns.appendChild(tip65PerBtn);
tipBtns.appendChild(tip80PerBtn);

tipSelectorContainer.appendChild(tipSelectorTitle);
tipSelectorContainer.appendChild(tipBtns);

mainCalculator.appendChild(billContainer);
mainCalculator.appendChild(tipSelectorContainer);
mainCalculator.appendChild(total);
mainCalculator.appendChild(resetBtn);

tipCalculatorContainer.appendChild(tipCalculatorTitle);
tipCalculatorContainer.appendChild(mainCalculator);

body.appendChild(tipCalculatorContainer);
