const body = document.querySelector("body");
const tipCalculatorContainer = document.createElement("div");
const tipCalculatorTitle = document.createElement("h1");
const mainCalculator = document.createElement("div");
const billContainer = document.createElement("div");
const billTitle = document.createElement("p");
const billInput = document.createElement("input");
const tipSelectorContainer = document.createElement("div");
const tipSelectorTitle = document.createElement("p");
const tipBtnsSection = document.createElement("div");
const total = document.createElement("p");
const resetBtn = document.createElement("button");

tipCalculatorContainer.classList.add("tipCalculatorContainer");
tipCalculatorTitle.classList.add("tipCalculatorTitle");
mainCalculator.classList.add("mainCalculator");
billContainer.classList.add("billContainer");
billTitle.classList.add("billTitle");
billInput.classList.add("billInput");
tipSelectorContainer.classList.add("tipSelectorContainer");
tipSelectorTitle.classList.add("tipSelectorTitle");
tipBtnsSection.classList.add("tipBtnsSection");
total.classList.add("total");
resetBtn.classList.add("resetBtn");

tipCalculatorTitle.innerText = "Tip Calculator";
billTitle.innerText = "Bill";
billInput.placeholder = "₮";
tipSelectorTitle.innerText = "Select Tip %";
total.innerText = "Total";
resetBtn.innerText = "Reset";

[5, 10, 15, 25, 35, 50, 65, 80].forEach((element) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = element + "%";

  btn.addEventListener("click", () => {
    if (billInput.value !== "") {
      total.innerText = "Total";
      const tippedTotalBill = parseFloat(
        parseInt(billInput.value) * (1 + element / 100)
      ).toFixed(2);
      total.innerText = `Total ₮ ${tippedTotalBill} `;
    } else {
      billInput.value = "";
    }
  });

  tipBtnsSection.appendChild(btn);
});

resetBtn.addEventListener("click", () => {
  total.innerText = "0.00";
  billInput.value = "";
});

billContainer.appendChild(billTitle);
billContainer.appendChild(billInput);
tipSelectorContainer.appendChild(tipSelectorTitle);
tipSelectorContainer.appendChild(tipBtnsSection);
mainCalculator.appendChild(billContainer);
mainCalculator.appendChild(tipSelectorContainer);
mainCalculator.appendChild(total);
mainCalculator.appendChild(resetBtn);
tipCalculatorContainer.appendChild(tipCalculatorTitle);
tipCalculatorContainer.appendChild(mainCalculator);
body.appendChild(tipCalculatorContainer);
