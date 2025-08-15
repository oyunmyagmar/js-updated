const data = [
  {
    question: "What is the keyword used to declare a variable in JavaScript?",
    answers: ["var", "int", "let", "define"],
    correctAnswer: "var",
  },
  {
    question: "Which of the following is a string in JavaScript?",
    answers: ["42", "'42'", "true", "null"],
    correctAnswer: "'42'",
  },
  {
    question: "What is the output of '2' + 2?",
    answers: ["4", "22", "NaN", "undefined"],
    correctAnswer: "22",
  },
  {
    question: "How do you write a comment in JavaScript?",
    answers: ["<!-- comment -->", "# comment", "// comment", "/* comment */"],
    correctAnswer: "// comment",
  },
  {
    question: "Which symbol is used for strict equality comparison?",
    answers: ["=", "==", "===", "!="],
    correctAnswer: "===",
  },
  {
    question: "What will `typeof undefined` return?",
    answers: ["null", "undefined", "object", "string"],
    correctAnswer: "undefined",
  },
  {
    question: "Which method adds an element to the end of an array?",
    answers: ["push()", "pop()", "shift()", "concat()"],
    correctAnswer: "push()",
  },
  {
    question: "What is the correct way to declare a function in JavaScript?",
    answers: [
      "function myFunc()",
      "def myFunc()",
      "func myFunc()",
      "function:myFunc()",
    ],
    correctAnswer: "function myFunc()",
  },
  {
    question: "What is the output of typeof NaN?",
    answers: ["NaN", "undefined", "number", "object"],
    correctAnswer: "number",
  },
  {
    question: "What is used to store multiple values in a single variable?",
    answers: ["object", "string", "array", "number"],
    correctAnswer: "array",
  },
  {
    question: "Which loop is guaranteed to run at least once?",
    answers: ["for", "while", "do...while", "foreach"],
    correctAnswer: "do...while",
  },
  {
    question: "What is the result of '5' - 2?",
    answers: ["3", "52", "NaN", "undefined"],
    correctAnswer: "3",
  },
  {
    question: "Which function converts a string to an integer?",
    answers: ["Number()", "parseInt()", "toString()", "parseFloat()"],
    correctAnswer: "parseInt()",
  },
  {
    question: "What does `this` keyword refer to in a regular function?",
    answers: ["Global object", "Parent object", "Function itself", "Undefined"],
    correctAnswer: "Global object",
  },
  {
    question: "How can you add a comment that spans multiple lines?",
    answers: ["//", "<!-- -->", "/* */", "#"],
    correctAnswer: "/* */",
  },
  {
    question: "Which method removes the last item from an array?",
    answers: ["pop()", "shift()", "slice()", "splice()"],
    correctAnswer: "pop()",
  },
  {
    question: "What does `===` compare?",
    answers: ["Value only", "Type only", "Value and type", "Nothing"],
    correctAnswer: "Value and type",
  },
  {
    question: "Which operator is used to assign a value?",
    answers: ["==", "=", "===", "!="],
    correctAnswer: "=",
  },
  {
    question: "Which method turns an object into a JSON string?",
    answers: [
      "JSON.stringify()",
      "JSON.parse()",
      "toString()",
      "stringify.JSON()",
    ],
    correctAnswer: "JSON.stringify()",
  },
  {
    question: "How do you call a function named `myFunction`?",
    answers: [
      "call myFunction",
      "myFunction()",
      "call.myFunction()",
      "myFunction",
    ],
    correctAnswer: "myFunction()",
  },
  {
    question: "Which of these is a falsy value in JavaScript?",
    answers: ["0", "'0'", "[]", "1"],
    correctAnswer: "0",
  },
  {
    question: "What does the `setTimeout` function do?",
    answers: [
      "Repeats code forever",
      "Delays execution",
      "Stops code",
      "Clears timer",
    ],
    correctAnswer: "Delays execution",
  },
  {
    question: "Which of these is not a JavaScript data type?",
    answers: ["Number", "Boolean", "Float", "Undefined"],
    correctAnswer: "Float",
  },
  {
    question: "What will `Boolean('')` return?",
    answers: ["true", "false", "null", "undefined"],
    correctAnswer: "false",
  },
  {
    question: "What is the result of `[] == false`?",
    answers: ["true", "false", "error", "NaN"],
    correctAnswer: "true",
  },
];

const body = document.querySelector("body");
const startBtn = document.querySelector("button");
let currentIndex = 0;

const quizStart = () => {
  startBtn.remove();

  const question = document.createElement("h2");
  const currentQuestion = document.createElement("p");
  body.appendChild(question);
  currentQuestion.innerText = `${currentIndex}/${data.length}`;
  body.appendChild(currentQuestion);

  new Array(4).fill(0).forEach((el) => {
    const btn = document.createElement("button");
    body.appendChild(btn);
    btn.addEventListener("click", () => {
      currentIndex++;
      question.innerText = data[currentIndex].question;

      const answerBtns = document.querySelectorAll("button");
      //   console.log(answerBtns);
      answerBtns.forEach(
        (btn, index) => (btn.innerText = data[currentIndex].answers[index])
      );
      currentQuestion.innerText = `${currentIndex}/${data.length}`;
    });
  });

  const drawQuestion = () => {
    const answerBtns = document.querySelectorAll("button");
    answerBtns.forEach(
      (btn, index) => (btn.innerText = data[currentIndex].answers[index])
    );
    question.innerText = data[currentIndex].question;
  };
  drawQuestion();
};

startBtn.addEventListener("click", quizStart);
