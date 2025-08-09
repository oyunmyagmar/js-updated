// herhen keyboard -nii event -iig barij avah ve, js -iin gj google -deed
// keyboard -iin tovchlur -iig herhen barij avah ve gdgiig google -dene
// 1 tovchluur darangut ulan esvel tsenher nemegddeg bolgono gsen ug

const body = document.querySelector("body");
const boxRed = document.createElement("div");
const boxBlue = document.createElement("div");

boxRed.classList.add("boxRed");
boxBlue.classList.add("boxBlue");

boxRed.style.width = "50%";
boxBlue.style.width = "50%";

document.addEventListener("keydown", function (event) {
  // console.log(event);
  // console.log("key value of the pressed key: ", event.key);
  if (event.key == "Enter") {
    boxRed.style.width = parseInt(boxRed.style.width) + 1 + "%";
    boxBlue.style.width = parseInt(boxBlue.style.width) - 1 + "%";

    boxRed.innerText = boxRed.style.width;
    boxBlue.innerText = boxBlue.style.width;
  } else if (event.key == " ") {
    boxBlue.style.width = parseInt(boxBlue.style.width) + 1 + "%";
    boxRed.style.width = parseInt(boxRed.style.width) - 1 + "%";

    boxBlue.innerText = boxBlue.style.width;
    boxRed.innerText = boxRed.style.width;
  }
});

body.appendChild(boxRed);
body.appendChild(boxBlue);

// "keydown" -> keyboard der darah action -> keyboard -nii yun der ch darsan ajillana
// keyboard barij avah ni yamar ch element -tei holbogui uchir document. gj bichne
// syntax der event gdeg zuil avdag
// event ?
// console.log(event);
// 1 keyboard darahad -> KeyboardEvent gdeg zuil garj irj bn
// keyboard -nii ymar tochlur der darsan be gdeg medelel garch bn

// if short syntax -> event.key == "a" ? x++ : y++;
// short syntax der 1 l uildel hideg
// if short syntax -> event.key == "a" ? x++ : y--; <- 2 zereg uildel hij blohgui
// iim tohioldold if else -ee hereglene

// !!!bichleg uzehgui documentation unshih!!!
// " " -> hooson string

// !!!documentation unshij surah!!!
// bichleg bitgii uz
// QDD approach to learning programming -> turshij uzeh - decomposition <- surah arga baril

// javascript 30 days
// javascript documentation
// beginner problems in javascript
// beginner exercises in javascript
