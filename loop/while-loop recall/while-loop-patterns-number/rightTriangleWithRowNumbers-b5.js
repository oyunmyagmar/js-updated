// 5. Right Triangle with Row Numbers
//5 1
//4 21
//3 321
//2 4321
//1 54321

let size = 5;
let row = size;

while (row > 0) {
  let column = size - row + 1;
  let numbers = "";

  while (column > 0) {
    numbers = numbers + column;
    column = column - 1;
  }
  console.log(numbers);
  row = row - 1;
}
