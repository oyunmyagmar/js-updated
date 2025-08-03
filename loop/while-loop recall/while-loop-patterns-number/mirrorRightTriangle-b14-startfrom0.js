// 14. Mirror Right Triangle
//  12345
//1 ----1
//2 ---12
//3 --123
//4 -1234
//5 12345

let size = 5;
let row = 1;

while (row < size) {
  let stars = "";
  let column = 1;

  while (column < size) {
    stars = stars + "*";
    column = column + 1;
  }
  console.log(stars);
  row = row + 1;
}
