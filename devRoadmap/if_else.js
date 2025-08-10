let x = 10;
let y = 20;

// You should almost never have an if...else with an assignment like x = y as a condition:
if ((x = y)) {
  console.log("x ni y -tei tentsuu");
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
