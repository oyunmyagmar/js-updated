let size9 = 5;
for (let i = 0; i < size9; i++) {
  let star = "";
  for (let j = 0; (j = size9 - i); j++) {
    star += "*";
  }
  console.log(star);
}