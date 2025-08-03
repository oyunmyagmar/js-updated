// 13. Descending Number Triangle
//  54321
//5 5
//4 54
//3 543
//2 5432
//1 54321

let size = 5;
let row = size;
while (row > 0) {
  let column = size;
  let stars = "";

  while (column > 0) {
    if (column >= row) {
      stars = stars + column;
    }
    column = column - 1;
  }
  console.log(stars);
  row = row - 1;
}
