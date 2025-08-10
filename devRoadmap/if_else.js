let x = 10;
let y = 20;

// You should almost never have an if...else with an assignment like x = y as a condition:
if ((x = y)) {
  console.log("x ni y -tei tentsuu"); // blohgui
}
// Because unlike while loops,
// the condition is only evaluated once,
// so the assignment is only performed once.

if (x == y) {
  console.log("x ni y -tei tentsuu");
}

// Conditional branching: if, '?'
// Sometimes, we need to perform different actions based on different conditions.

// To do that, we can use the if statement and
// the conditional operator ?, that’s also called a “question mark” operator.

let year = 2025;
if (year == 2025) {
  console.log("That's correct");
  console.log("Happy New Year");
}

let newYear = "2025";
let cond = newYear == 2026;

if (cond) {
  console.log("Y0u guessed it right");
} else {
  console.log("How can you be so wrong?");
}

let birthday = 20;
if (birthday < 18) {
  console.log("too early for celebration");
} else if (birthday > 18) {
  console.log("too late for celebration");
} else {
  console.log("exactly!");
}
// In the code above,
// js first checks birthday < 18.
// If that is falsy, it goes to the next condition birthday > 18.
// If that is also falsy, it shows the last log.

// There can be more else if blocks. The final else is optional.

// Sometimes, we need to assign a variable depending on a condition.
// The so-called “conditional” or “question mark” operator
// lets us do that in a shorter and simpler way.
// The operator is represented by a question mark ?.
// Sometimes it’s called “ternary”, because the operator has three operands.
// It is actually the one and only operator in js which has that many.

let age = 10;
// let result = condition ? value1 : value 2;
// The condition is evaluated:
// if it’s truthy then value1 is returned,
// otherwise – value2.

let accessAllowed = age > 18 ? true : false;
console.log(accessAllowed);

let accessDenied = age < 18;
console.log(accessDenied);

let js = "ECMAScript";
if (js == "ECMAScript") {
  console.log("right");
} else {
  console.log("You don't know? “ECMAScript”");
}

let value = 450;
if (value > 0) {
  console.log("value is greater than zero");
} else if (value < 0) {
  console.log("less than zero");
} else if (value == 0) {
  console.log("equals zero");
}
let a = 0;
let b = 1;
let result = a + b < 4 ? "below" : "over";
console.log(result);

let text;
if (Math.random() < 0.5) {
  text = "https://www.w3schools.com/js/default.asp";
} else {
  text = "https://roadmap.sh/javascript";
}
console.log(text);
