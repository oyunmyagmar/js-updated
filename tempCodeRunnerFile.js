
let sp9size = 5;
let sp9row = 1;
while (sp9row <= sp9size) {
  let sp9column = 1;
  let sp9Result = "";
  while (sp9column <= sp9size - sp9row) {
    sp9Result = sp9Result + " ";
    sp9column = sp9column + 1;
  }
  let starCount = sp9row;
  while (starCount > 0) {
    sp9Result = sp9Result + "*";
    starCount = starCount + 1;
  }
  console.log(sp9Result);
  sp9row = sp9row + 1;
}