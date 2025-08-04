// 1. Rectangle Number Pattern
// 12345
// 12345
// 12345
// 12345
// 12345

let size = 5;
let row = 1;

while (row <= size) {
  let column = 1;
  let numbers = "";

  while (column <= size) {
    numbers = numbers + column;
    column = column + 1;
  }
  console.log(numbers);
  row = row + 1;
}
