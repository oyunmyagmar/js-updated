const body = document.querySelector("body");
const boxRed = document.createElement("div");
const boxBlue = document.createElement("div");

// % bh yostoi
boxRed.style.width = "50%";
boxBlue.style.width = "50%";

boxRed.classList.add("boxRed");
boxBlue.classList.add("boxBlue");

boxRed.addEventListener("click", () => {
  boxRed.style.width = parseInt(boxRed.style.width) + 1 + "%";
  // console.log(boxRed.style.width);
  boxBlue.style.width = parseInt(boxBlue.style.width) - 1 + "%";
  // console.log(boxBlue.style.width);
});

boxBlue.addEventListener("click", () => {
  boxBlue.style.width = parseInt(boxBlue.style.width) + 1 + "%";
  // console.log(boxBlue.style.width);
  boxRed.style.width = parseInt(boxRed.style.width) - 1 + "%";
  // console.log(boxRed.style.width);
});

// herhen keyboard -nii event -iig barij avah ve in js gj google -deed
// herhen keyboard -iin tovchlur -iig barij avah ve gdgiig google -dene
// 1 tovchluur darangut ulan esvel tsenher nemegddeg bolgono gsen ug

document.addEventListener("keydown", function (event) {
  // console.log("key pressed: " + event.key);
  if (event.key == "Enter") {
    boxRed.style.width = parseInt(boxRed.style.width) + 1 + "%";
    boxBlue.style.width = parseInt(boxBlue.style.width) - 1 + "%";
  } else if (event.key == " ") {
    boxBlue.style.width = parseInt(boxBlue.style.width) + 1 + "%";
    boxRed.style.width = parseInt(boxRed.style.width) - 1 + "%";
  }
});

body.appendChild(boxRed);
body.appendChild(boxBlue);

// html der height uguhgui bol garj irdeggui, width bhgui bsn ch height bval gardag
// liveServer element der harval width bn height bhgui, orj iregui bn

// debugging skill heregtei
// console.log() -oor harah
// parseInt -eer shiljuljed too bolgod,
// toon der toogoo nemed,
// aras ni "%" nemj bolno
// 50 + 1 + "%" => 51%
