// 6. Floyd’s Triangle
//  1 2 3  4  5
//1 1
//2 2 3
//3 4 5 6
//4 7 8 9 10
//5 11 12 13 14 15

let size = 5;
let row = 0;
let floyd = 0;

while (row < size) {
  let column = 0;
  let numbers = "";

  while (column < size) {
    if (column <= row) {
      numbers = numbers + 1 * (floyd + 1);
      floyd = floyd + 1;
    }
    column = column + 1;
  }
  console.log(numbers);
  row = row + 1;
}
