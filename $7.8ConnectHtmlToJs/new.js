// ta neree oruulna uu? gsen garchigtai
// dood tald ni 1 inout der neree orulad submit btn darangut
// console.log der Sain bn u Andy gj garj irdeg

let input = document.getElementById("name-input");
let button = document.getElementById("btn");
let greeting = "Sain bn uu! ";

button.addEventListener("click", () => {
  console.log("Sain uu!", input.value);
  console.log(greeting + input.value);
});

// 2 sh input
// find sum of 2 numbers
// num1-input
// num2-input
let num1Input = document.getElementById("num1-input");
let num2Input = document.getElementById("num2-input");
let sumBtn = document.getElementById("sum-btn");

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
console.log(a + parseInt(b));

// odoo tegvel + - uildel hiie
let plusBtn = document.getElementById("plus-btn");

plusBtn.addEventListener("click", () => {
  console.log(parseInt(num1Input.value) + parseInt(num2Input.value));
});

let minusBtn = document.getElementById("minus-btn");

minusBtn.addEventListener("click", () => {
  console.log(parseInt(num1Input.value) - parseInt(num2Input.value));
});

// html dotor input type = "text" -g "number" bolgoson ch number blohgui
// ter ni tuhain input dotor number -aas uur yum bichij blgohgui bolgoj bga

let multiplyBtn = document.getElementById("multiply-btn");

multiplyBtn.addEventListener("click", () => {
  console.log(parseInt(num1Input.value) * parseInt(num2Input.value));
});

let divideBtn = document.getElementById("divide-btn");

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

// 3 input -iinhaa toonuudiig avya

maxBtn.addEventListener("click", () => {
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
