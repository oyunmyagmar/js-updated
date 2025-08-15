let customerAnswerArr = [];
const body = document.querySelector("body");
const btn = document.getElementById("btn");
const correctAnswer = document.createElement("p");

let questionsArr = [
  { q: "Question number1", a: ["ans1", "ans2", "ans", "ans4"], c: "ans1" },
  { q: "Question number2", a: ["ans1", "ans2", "ans3", "ans4"], c: "ans4" },
  { q: "Question number3", a: ["ans1", "ans2", "ans3", "ans4"], c: "ans2" },
  { q: "Question number4", a: ["ans1", "ans2", "ans3", "ans4"], c: "ans3" },
  { q: "Question number5", a: ["ans1", "ans2", "ans3", "ans4"], c: "ans2" },
];

let count = 0;
const printQuestions = () => {
  const question = document.createElement("h3");
  question.innerText = questionsArr[count].q;

  //   console.log(questionsArr[0]);

  const btn1 = document.createElement("button");
  btn1.innerText = questionsArr[count].a[0];
  const btn2 = document.createElement("button");
  btn2.innerText = questionsArr[count].a[1];
  const btn3 = document.createElement("button");
  btn3.innerText = questionsArr[count].a[2];
  const btn4 = document.createElement("button");
  btn4.innerText = questionsArr[count].a[3];

  changePrintQuestionValue = () => {
    count++;
    question.innerText = questionsArr[count].q;
    btn1.innerText = questionsArr[count].a[0];
    btn2.innerText = questionsArr[count].a[1];
    btn3.innerText = questionsArr[count].a[2];
    btn4.innerText = questionsArr[count].a[3];
  };

  btn1.addEventListener("click", () => {
    // body.innerHTML = "";
    // console.log(questionsArr[count]);

    // console.log(btn1.innerText);
    customerAnswerArr.push(btn1.innerText);
    // console.log(customerAnswerArr);

    if (customerAnswerArr[0] == questionsArr[count].c) {
      correctAnswer.innerText += customerAnswerArr[0];
    } else {
      correctAnswer.innerText += questionsArr[count].c;
    }
    console.log("customerAnswerArr[0]", customerAnswerArr[0]);
    console.log("questionsArr[count].c", questionsArr[count].c);
    // console.log(correctAnswer);
    changePrintQuestionValue();
  });

  body.appendChild(question);
  body.appendChild(btn1);
  body.appendChild(btn2);
  body.appendChild(btn3);
  body.appendChild(btn4);
  body.appendChild(correctAnswer);
};

btn.addEventListener("click", () => {
  btn.remove();
  printQuestions();
});
