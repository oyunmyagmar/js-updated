const body = document.querySelector("body");
const redBox = document.createElement("div");
const blueBox = document.createElement("div");

// % bh yostoi
redBox.style.width = "50%";
blueBox.style.width = "50%";

redBox.classList.add("redBox");
blueBox.classList.add("blueBox");

redBox.addEventListener("click", () => {
  redBox.style.width = parseInt(redBox.style.width) + 1 + "%";
  blueBox.style.width = parseInt(blueBox.style.width) - 1 + "%";

  redBox.innerText = redBox.style.width;
  blueBox.innerText = blueBox.style.width;
});

blueBox.addEventListener("click", () => {
  blueBox.style.width = parseInt(blueBox.style.width) + 1 + "%";
  redBox.style.width = parseInt(redBox.style.width) - 1 + "%";

  blueBox.innerText = blueBox.style.width;
  redBox.innerText = redBox.style.width;
});

// debugging skill heregtei
// boxRed.style.width = boxRed.style.width + 10%";
// console.log() -oor harah
// parseInt -eer shiljuljed too bolgod,
// toon der toogoo nemed,
// aras ni "%" nemj bolno
// 50 + 1 + "%" => 51%

body.appendChild(redBox);
body.appendChild(blueBox);

// html der height uguhgui bol garj irdeggui, width bhgui bsn ch height bval gardag
// liveServer element der harval width bn height bhgui, orj iregui bn
