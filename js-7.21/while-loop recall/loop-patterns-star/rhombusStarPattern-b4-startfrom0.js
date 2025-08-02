// 4. Rhombus Star Pattern
//  01234
//0 ----*****
//1 ---*****
//2 --*****
//3 -*****
//4 *****

let size = 5;
let row = 0;

while (row < 5) {
  let column = 0;
  let stars = "";
  while (column < 5) {
    stars = stars + "*";
    column = column + 1;
  }
  console.log(stars);
  row = row + 1;
}
