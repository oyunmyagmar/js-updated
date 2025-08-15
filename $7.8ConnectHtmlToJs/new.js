// name //
// ta neree oruulna uu? gsen garchigtai
// dood tald ni 1 input der neree orulad submit btn darangut
// console.log der Sain bn u Andy gj garj irdeg

let input = document.getElementById("name-input");
let button = document.getElementById("btn");
let greeting = "Sain bn uu! ";

button.addEventListener("click", () => {
  console.log("Sain uu!", input.value);
  console.log(greeting + input.value);
});

// calculator //
// 2 sh input
// find sum of 2 numbers
// num1-input
// num2-input
let num1Input = document.getElementById("num1-input");
let num2Input = document.getElementById("num2-input");
let sumBtn = document.getElementById("sum-btn");
let plusBtn = document.getElementById("plus-btn");
let minusBtn = document.getElementById("minus-btn");
let multiplyBtn = document.getElementById("multiply-btn");
let divideBtn = document.getElementById("divide-btn");

sumBtn.addEventListener("click", () => {
  console.log(num1Input.value + num2Input.value);
});
// ugugdliin turul
// string esvel number
// input der orj irj bga value ni anh orj irehde ug usger orj irj bga
// number bolgoj bolno
// parseInt ged huvirgaj bolno

// doorh a b huvisagch uur
let a = 15;
let b = "15";
console.log(a + b);
console.log(parseInt(a) + parseInt(b));

// html dotor input type = "text" -g "number" bolgoson ch number blohgui
// ter ni tuhain input dotor number -aas uur yum bichij blohgui bolgoj bga
// tsever js -iig baruun mouse darad code run hij bolno
// odoo tegvel + - * / uildel hiie

plusBtn.addEventListener("click", () => {
  console.log(parseInt(num1Input.value) + parseInt(num2Input.value));
});
minusBtn.addEventListener("click", () => {
  console.log(parseInt(num1Input.value) - parseInt(num2Input.value));
});
multiplyBtn.addEventListener("click", () => {
  console.log(parseInt(num1Input.value) * parseInt(num2Input.value));
});
divideBtn.addEventListener("click", () => {
  console.log(parseInt(num1Input.value) / parseInt(num2Input.value));
});

// if else
// 3 input -tei bolgono
// max ged button -tai
// 3 too orulad hamgiin ihiig ni ol
// biggest value calculator
let num3Input = document.getElementById("num3-input");
let maxBtn = document.getElementById("max-btn");

maxBtn.addEventListener("click", () => {
  // 3 input -iinhaa toonuudiig avya
  let num1 = parseInt(num1Input.value);
  let num2 = parseInt(num2Input.value);
  let num3 = parseInt(num3Input.value);
  // console.log(num1);
  // console.log(num2);
  // console.log(num3);
  if (num1 > num2) {
    if (num1 > num3) {
      console.log(num1);
    } else {
      console.log(num3);
    }
  } else {
    if (num2 > num3) {
      console.log(num2);
    } else {
      console.log(num3);
    }
  }
});

let minBtn = document.getElementById("min-btn");
minBtn.addEventListener("click", () => {
  let num1 = parseInt(num1Input.value);
  let num2 = parseInt(num2Input.value);
  let num3 = parseInt(num3Input.value);

  if (num1 < num2) {
    if (num1 < num3) {
      console.log(num1);
    } else {
      console.log(num3);
    }
  } else {
    if (num2 < num3) {
      console.log(num2);
    } else {
      console.log(num3);
    }
  }
});

// file ner, huvisagch ner too useg temdegter ehelj bolohgui
// 3 toonii ih baga der 4 console.log bichsen bol
// 4 toonii ih baga der 8 console.log bichne, 2-iin heden zeregt?

// average calculator

let averageBtn = document.getElementById("average-btn");
averageBtn.addEventListener("click", () => {
  let num1 = parseInt(num1Input.value);
  let num2 = parseInt(num2Input.value);
  let num3 = parseInt(num3Input.value);

  let sum = num1 + num2 + num3;
  let average = sum / 3;
  console.log(average);
  console.log((num1 + num2 + num3) / 3);
});

// if else condition && || operator uzeh
