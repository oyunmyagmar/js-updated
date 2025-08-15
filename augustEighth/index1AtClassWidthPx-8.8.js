const body = document.querySelector("body");
const redBox = document.createElement("div");
const blueBox = document.createElement("div");

redBox.classList.add("redBox");
blueBox.classList.add("blueBox");

redBox.addEventListener("click", () => {
  //   redBox.style.backgroundColor = "black";
  const currentWidthRed = parseInt(getComputedStyle(redBox).width);
  redBox.style.width = currentWidthRed + 10 + "px";
  const currentWidthBlue = parseInt(getComputedStyle(blueBox).width);
  blueBox.style.width = currentWidthBlue - 10 + "px";

  redBox.innerText = redBox.style.width;
  blueBox.innerText = blueBox.style.width;
});

blueBox.addEventListener("click", () => {
  const currentWidthBlue = parseInt(getComputedStyle(blueBox).width);
  blueBox.style.width = currentWidthBlue + 10 + "px";
  const currentWidthRed = parseInt(getComputedStyle(redBox).width);
  redBox.style.width = currentWidthRed - 10 + "px";

  blueBox.innerText = blueBox.style.width;
  redBox.innerText = redBox.style.width;
});

body.appendChild(redBox);
body.appendChild(blueBox);

// px -eer ugsun sul tal ni
// delgetsee duuren bolgoh yostoi bsn
// 2 ungu ni 50% 50% bh yostoi bsn
// gtel px -eer uur hemjeetei blod bn

// px vw gh met tulhuur ugtei string der math uildel hij chdahgui
// tgehr parseInt higed number bolgon hurvuuleed too nemeed
// aras ni px tulhuur ugee ugud bn

// js ni DOM gdeg zuileer html -d l handdag

// .css file uusgeed style der width: 50% ged ugvul js uuniig barij avch chdahgui
// tgeher width ni null hooson string garj ired parseInt hiher NaN garj irj bn NotaNumber
// js deeree element -ee usged hemjeeg ni js deeree 50% ged ugvul asudalgui

// js ni html -tei haritsah bolomjtoi
// js ni css -tei haritsah bolomj bhgui

// liveServer Elements harval minii bichsen style ni
// shud js der bichehed
// inline style -eer garj irj bn
// inline css der bichseniig l barij avch chadna
// ?
// css file ni tusdaa file bga uchir barij avch chdahgui

// tgher hemjeeg husseneeree customize esvel modify hih yostoi bsan bol
// js der esvel inline style -eer zaaval uguh yostoi
