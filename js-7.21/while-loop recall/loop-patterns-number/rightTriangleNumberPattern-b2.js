// 2. Right Triangle Number Pattern
//1 1
//2 12
//3 123
//4 1234
//5 12345

let size = 5;
let row = 1;

while (row <= size) {
  let column = 1;
  let numbers = "";

  while (column <= row) {
    numbers = numbers + column;
    column = column + 1;
  }
  console.log(numbers);
  row = row + 1;
}
