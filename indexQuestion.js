const body = document.querySelector("body");
const btn = document.getElementById("btn");

let questionsArr = [
  { q: "Question number1", a: ["1", "2", "3", "4"], c: "1" },
  { q: "Question number2", a: ["1", "2", "3", "4"], c: "2" },
  { q: "Question number3", a: ["1", "2", "3", "4"], c: "3" },
  { q: "Question number4", a: ["1", "2", "3", "4"], c: "4" },
  { q: "Question number5", a: ["1", "2", "3", "4"], c: "1" },
];

const printQuestions = () => {
  let count = 0;
  const p = document.createElement("p");
  p.innerText = questionsArr[count].q;

  console.log(questionsArr[0]);

  const btn1 = document.createElement("button");
  btn1.innerText = questionsArr[0].a[0];
  const btn2 = document.createElement("button");
  btn2.innerText = questionsArr[0].a[1];
  const btn3 = document.createElement("button");
  btn3.innerText = questionsArr[0].a[2];
  const btn4 = document.createElement("button");
  btn4.innerText = questionsArr[0].a[3];

  btn1.addEventListener("click", () => {
    // body.innerHTML = "";
    count++;
    printQuestions();
  });

  body.appendChild(p);
  body.appendChild(btn1);
  body.appendChild(btn2);
  body.appendChild(btn3);
  body.appendChild(btn4);
};

btn.addEventListener("click", () => {
  btn.remove();
  printQuestions();
});
