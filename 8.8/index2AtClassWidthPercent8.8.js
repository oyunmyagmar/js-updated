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
  boxBlue.style.width = parseInt(boxBlue.style.width) - 1 + "%";

  boxRed.innerText = boxRed.style.width;
  boxBlue.innerText = boxBlue.style.width;
});

boxBlue.addEventListener("click", () => {
  boxBlue.style.width = parseInt(boxBlue.style.width) + 1 + "%";
  boxRed.style.width = parseInt(boxRed.style.width) - 1 + "%";

  boxBlue.innerText = boxBlue.style.width;
  boxRed.innerText = boxRed.style.width;
});

// debugging skill heregtei
// boxRed.style.width = boxRed.style.width + 10%";
// console.log() -oor harah
// parseInt -eer shiljuljed too bolgod,
// toon der toogoo nemed,
// aras ni "%" nemj bolno
// 50 + 1 + "%" => 51%

// herhen keyboard -nii event -iig barij avah ve, js -iin gj google -deed
// keyboard -iin tovchlur -iig herhen barij avah ve gdgiig google -dene
// 1 tovchluur darangut ulan esvel tsenher nemegddeg bolgono gsen ug

document.addEventListener("keydown", function (event) {
  // console.log("key pressed: " + event.key);
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

// html der height uguhgui bol garj irdeggui, width bhgui bsn ch height bval gardag
// liveServer element der harval width bn height bhgui, orj iregui bn
