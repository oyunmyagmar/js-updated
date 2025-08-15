// odoo component gj nerledeg 1 jijig hseg hiie
// unegui -giin 1 mashinii card hiie
// html -eer urj chadna odoo js -eer uryu

// deed tald ni 1 zurag
// dood tald ni bold text h5 esvel h6 // hoid tald ni 1 icon
// dor ni mashinii ner title bn
// door ni description

// card -aa hisnii daraa ner uguud function bichij bolno
// tuhain function ni div -uud uusged body -ruu ene uildliig nemdeg
// ene createCard gsn function -aa 2 dudval 2 card -tai bolno
// const createCard = () => {
// ged dotor tald ni js der ursun card -aa higed
// }
// door ni function -ga 2 udaa dudval 2 container -tai bolson bn
// createCard()
// createCard()

// tegvel ogoo yaj olon card gargaj ireh ve?
// ene data -nudiig yaj avah ve?
// array hereg bolno
// array -iin 1 utga ni l 1 card derh mdelel agulna gsen ug
// mnai card ni dotroo uniin dun, discount, ner zereg olon mdeleltei
// bid iim shinj chanar zasan datag array der orulahdaa object ashiglna
// const data = [{}, {}, {}]

// Cannot access 'createCard' before initialization gej bn
// createCard function usged umnu ni map -lah gej uzsen blohor chdahgui bn
// arrow-function ingej chdahgui
// arrow-function -g uurchlud zgr funciton bolgovol deeree duudaj chadna

// arrow function vs zgr function 2-iin yalgaa garch irne
// data -gaa husseneeree uurchlunguut data -nii too nemegdene

// unegui site dotot yu bga ve gvel zgr 1 array dotor object -uud irj bga
// tgd 1 card zurdag function bichsen
// teriigee map -lad butsadag code bichsen

// data =g haanaas avdag ve?
// dataBase gdeg yumnas avna
// db dotor iim data hadgalagdsan bn
// data -gaa bd -eesee avlaa
// map -ldag frontend code bichne gsen ug

// ene data-g haanaas yaj avch bn gdgiig harj bolno
// db -ruu huselt yavulj bj avdag
// liveServer -> inspect -> network -> Fetch/XHR gsen hesgees Fetch -iig songovol
// avtomat -aar code bichsenii daguu tsaash huselt yavulahiig Fetch -leh gdeg
// Fetch -iin datag harj bolno
// ireduid react uzeher server-side-render, front-end-render buyu client-side-render gedg zuil uzne
// yaj data -gaa nuuh ve? uzne

// iimerguu data -g backend der usgej hadgalad
// frontend dere ene data -g map -lad haruldag yum hiine
// odohondoo backend uzegui blohor frontend der huramchar data uusged
// frontend der urdug code biched bn gsen ug
// bodlogo der ashigladag map ni ene data -aaraa damjaad card -uuda zurdag zuil der ashiglagdana

// tgvel unegui site der uniin dunger filter -lne geve

// 1. create elements:
// img tag,
// h6 tag,
// p-title,
// p-descrtiption,
// div,
// svg-algasah-div higed toirog gargah
// 2. innerText bolon style class -iig uurchlud,
// 3. neg negniih ni araas appendChild higed card -aa gargaj irne
// svg - innerHTML der shud <svg> tag-iig copy -dod ugvul zgr

const data = [
  {
    title: "Nissan Murano, 2004/2011",
    price: "8.8",
    description: "190000 км * Автомат * 3.5 л * Бензин",
    image:
      "https://cdn1.unegui.mn/media/cache1/f1/1f/f11f3e5185a20abab5238512c64847c7.webp",
  },
  {
    title: "Toyota Prius 50, 2016/2025",
    price: "29",
    description: "200000 км * Автомат * 1.8 л * Хайбрид",
    image:
      "https://cdn1.unegui.mn/media/cache1/28/ad/28ad4614c77242ac3f456a6ec4b97bd0.webp",
  },
  {
    title: "Porsche Cayenne, 2015/2025",
    price: "95",
    description: "48000 км * Автомат * 3.6 л * Бензин",
    image:
      "https://cdn1.unegui.mn/media/cache1/86/68/866869b4233c84176ac3419aca7b62dc.webp",
  },
  {
    title: "Chevrolet Colorado, 2021/2025",
    price: "125",
    description: "130000 км * Автомат * 3.6 л *  Бензин",
    image:
      "https://cdn1.unegui.mn/media/cache1/ab/43/ab4379cf02434092c2e522fde7a23608.webp",
  },
  {
    title: "Toyota Prius 50, 2016/2025",
    price: "29",
    description: "200000 км * Автомат * 1.8 л * Хайбрид",
    image:
      "https://cdn1.unegui.mn/media/cache1/28/ad/28ad4614c77242ac3f456a6ec4b97bd0.webp",
  },
];

data.map((cardData) => {
  createCard(cardData);
});

function createCard(cardData) {
  const img = document.createElement("img");
  const h6 = document.createElement("h6");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const imgContainer = document.createElement("div");
  const textContainer = document.createElement("div");
  const container = document.createElement("div");
  const body = document.getElementsByTagName("body")[0];

  // zurag orulahad <img> tag uusgej bga
  // <img> tag der attribute zoj ugch chdaj bga
  // usgesen img.src ged link -iig ni ugnu
  // src -eer <img> tag ugch bga bol html der <img> tag uguhud yadg bile gedgee sanana
  // src attribute ugnu
  // alt attribute -aa ugnu
  // width bolon height ugnu <- bhgui bol zurag garch irehgui

  img.classList.add("imgStyle");
  h6.classList.add("price");
  p1.classList.add("title");
  p2.classList.add("description");
  container.classList.add("outerBox");
  textContainer.classList.add("textBox");
  imgContainer.classList.add("imgBox");

  img.src = cardData.image;
  img.alt = "image";
  //   img.height = "360"; <- px bichihgui

  h6.innerText = cardData.price;
  p1.innerText = cardData.title;
  p2.innerText = cardData.description;

  imgContainer.appendChild(img);
  textContainer.appendChild(h6);
  textContainer.appendChild(p1);
  textContainer.appendChild(p2);
  container.appendChild(imgContainer);
  container.appendChild(textContainer);
  body.appendChild(container);
}
