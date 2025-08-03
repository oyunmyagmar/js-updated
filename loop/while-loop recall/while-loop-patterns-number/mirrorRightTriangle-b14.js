// 14. Mirror Right Triangle
//  12345
//1 ----1
//2 ---12
//3 --123
//4 -1234
//5 12345

let size = 5;
let row = 1;

while (row <= size) {
  let numbers = "";
  let emptyAddedBefore = size - row;

  while (emptyAddedBefore > 0) {
    numbers = numbers + " ";
    emptyAddedBefore = emptyAddedBefore - 1;
  }
  let column = 1;

  while (column <= size) {
    if (column <= row) {
      numbers = numbers + column;
    }
    column = column + 1;
  }
  console.log(numbers);
  row = row + 1;
}
