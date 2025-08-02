// 4. Rhombus Star Pattern
//  54321
//5 ----*****
//4 ---*****
//3 --*****
//2 -*****
//1 *****

let size = 5;
let row = size;

while (row > 0) {
  let column = size;
  let stars = "";

  //   while (column > 0) {
  //     if (column > size - row + 1) {
  //       stars = stars + "-";
  //     }
  //     column = column - 1;
  //   }
  while (column > 0) {
    stars = stars + "*";
    column = column - 1;
  }
  console.log(stars);
  row = row - 1;
}
