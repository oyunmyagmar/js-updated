const body = document.querySelector("body");
const boxRed = document.createElement("div");
const boxBlue = document.createElement("div");

boxRed.classList.add("boxRed");
boxBlue.classList.add("boxBlue");

boxRed.addEventListener("click", () => {
  //   boxRed.style.backgroundColor = "black";
  const currentWidthRed = parseInt(getComputedStyle(boxRed).width);
  boxRed.style.width = currentWidthRed + 10 + "px";
  const currentWidthBlue = parseInt(getComputedStyle(boxBlue).width);
  boxBlue.style.width = currentWidthBlue - 10 + "px";

  console.log(currentWidthRed, "currentWidthRed");
  console.log(boxRed.style.width, "boxRed.style.width");
  console.log(currentWidthBlue, "currentWidthBlue");
  console.log(boxBlue.style.width, " boxBlue.style.width");
});

boxBlue.addEventListener("click", () => {
  const currentWidthBlue = parseInt(getComputedStyle(boxBlue).width);
  boxBlue.style.width = currentWidthBlue + 10 + "px";
  const currentWidthRed = parseInt(getComputedStyle(boxRed).width);
  boxRed.style.width = currentWidthRed - 10 + "px";
});

body.appendChild(boxRed);
body.appendChild(boxBlue);

// px -eer ugsun sul tal ni
// delgetsee duuren bolgoh yostoi bsn
// 2 ungu ni 50% 50% bh yostoi bsn
// gtel px -eer uur hemjeetei blod bn

// px vw tulhur ugtei string der math uildel hij chdahgui
// tgehr parseInt higed number bolgod too nemeed
// aras ni px tulhuur ugee ugud bn

// js ni DOM gdeg zuileer html -d l handdag

// .css file uusgeed style der width: 50% ged ugvul js uuniig barij avch chdahgui
// tgeher width ni null hooson string garj ired parseInt hiher NaN garj irj bn
// js deeree element -ee usged hemjeeg ni js deeree 50% ged ugvul asudalgui
// liveServer Elements harval bichsen style ni
// js der bichvel shud inline style -eer garj bn

// inline css der bichseniig l barij avch chadna
// css file ni tusdaa file bga uchir barij avch chdahgui

// tgher hemjeeg husseneeree customize esvel modify hih yostoi bsan bol
// js esvel inline style -eer zaaval uguh yostoi
