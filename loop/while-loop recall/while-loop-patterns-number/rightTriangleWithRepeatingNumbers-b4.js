// 4. Right Triangle with Repeating Numbers
// 12345
// 1
// 22
// 333
// 4444
// 55555

let size = 5;
let row = 1;

while (row <= size) {
  let column = 1;
  let numbers = "";

  while (column <= row) {
    numbers = numbers + row;
    column = column + 1;
  }
  console.log(numbers);
  row = row + 1;
}
