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
