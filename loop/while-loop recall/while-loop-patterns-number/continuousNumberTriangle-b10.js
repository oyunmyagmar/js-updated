// 10. Continuous Number Triangle
//  0 1 2 3
//0 1
//1 2 3
//2 4 5 6
//3 7 8 9 10

let size = 4;
let row = 0;
let continuous = 0;

while (row < size) {
  let column = 0;
  let numbers = "";

  while (column <= row) {
    numbers = numbers + 1 * (continuous + 1);
    continuous = continuous + 1;
    column = column + 1;
  }
  console.log(numbers);
  row = row + 1;
}
