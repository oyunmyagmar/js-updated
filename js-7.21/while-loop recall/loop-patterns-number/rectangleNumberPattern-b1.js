// 1. Rectangle Number Pattern
// 12345
// 12345
// 12345
// 12345
// 12345

let size = 5;
let row = 1;

while (row <= size) {
  let column = 1;
  let stars = "";
  while (column <= size) {
    stars = stars + column;
    column = column + 1;
  }
  console.log(stars);
  row = row + 1;
}
