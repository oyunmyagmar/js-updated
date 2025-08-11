const dataList = [];

const printBillInputValue = (value) => {
  dataList.push(value);
  console.log(dataList);
};

const body = document.querySelector("body");
const tipCalculatorContainer = document.createElement("div");
const tipCalculator = document.createElement("div");

const bill = document.createElement("p");
const billInput = document.createElement("input");
const billContainer = document.createElement("div");
const tipPercent = document.createElement("p");
const tipPercent5Btn = document.createElement("button");
const tipPercent10Btn = document.createElement("button");
const tipPercent15Btn = document.createElement("button");
const tipPercent25Btn = document.createElement("button");
const tipPercent35Btn = document.createElement("button");
const tipPercent50Btn = document.createElement("button");
const tipPercent65Btn = document.createElement("button");
const tipPercent80Btn = document.createElement("button");
const tipPercentContainer = document.createElement("div");
const totalInput = document.createElement("input");
const resetBtn = document.createElement("button");

bill.innerText = "Bill";
tipPercent.innerText = "Select Tip %";
tipPercent5Btn.innerText = "5%";
tipPercent10Btn.innerText = "10%";
tipPercent15Btn.innerText = "15%";
tipPercent25Btn.innerText = "25%";
tipPercent35Btn.innerText = "35%";
tipPercent50Btn.innerText = "50%";
tipPercent65Btn.innerText = "65%";
tipPercent80Btn.innerText = "80%";
totalInput.placeholder = "Total";
resetBtn.innerText = "Reset";

tipPercent5Btn.addEventListener("click", () => {
  printBillInputValue(billInput.value);
});

billContainer.appendChild(bill);
billContainer.appendChild(billInput);
tipPercentContainer.appendChild(tipPercent);
tipPercentContainer.appendChild(tipPercent5Btn);
tipPercentContainer.appendChild(tipPercent10Btn);
tipPercentContainer.appendChild(tipPercent15Btn);
tipPercentContainer.appendChild(tipPercent25Btn);
tipPercentContainer.appendChild(tipPercent35Btn);
tipPercentContainer.appendChild(tipPercent50Btn);
tipPercentContainer.appendChild(tipPercent65Btn);
tipPercentContainer.appendChild(tipPercent80Btn);

tipCalculatorContainer.appendChild(billContainer);
tipCalculatorContainer.appendChild(tipPercentContainer);
tipCalculatorContainer.appendChild(totalInput);
tipCalculatorContainer.appendChild(resetBtn);

body.appendChild(tipCalculatorContainer);
