let size12 = 5;
for (let i = 0; i < size12; i++) {
  let star = "";
  for (let j = 0; j >= i; j++) {
    star += "*";
  }
  console.log(star);
}