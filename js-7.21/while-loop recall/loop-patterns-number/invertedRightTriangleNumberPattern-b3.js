// 3. Inverted Right Triangle Number Pattern

//1 12345
//2 1234
//3 123
//4 12
//5 1

let size = 5;
let row = 1;

while (row <= size) {
  let column = 1;
  let numbers = "";

  while (column <= size - row + 1) {
    numbers = numbers + column;
    column = column + 1;
  }
  console.log(numbers);
  row = row + 1;
}
