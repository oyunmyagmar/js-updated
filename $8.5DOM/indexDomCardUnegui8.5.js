// function bichij bolno.
// div uusged body -ruu ene uildliig nemdeg function
// createCard function -aa 2 udaa dudval 2 card -rai bolno
// yaj olon hevleh ve?
// utgiig ni parameter -eer avdag bolgolo
// data -gaa ihesged
// data -gaara map -ldag code biched dotor ni createCard function -aa duudna
// arrow-function bish function gej bichsen tohioldold
// map dotorh code -iig ajilluulahaas umnu function uuruu ajillaj chaddag

const data = [
  {
    title: "Toyota Camry, 2013/2022",
    price: "24.5 сая ₮",
    discount: "15%",
    image:
      "https://cdn1.unegui.mn/media/cache1/2d/ff/2dff7360f27550a1b578eb73d5564bfc.webp",
    description: "1002000 км *  Автомат * 2.4 л * Хайбрид",
  },
  {
    title: "Toyota Camry, 2013/2022",
    price: "24.5 сая ₮",
    discount: "15%",
    image:
      "https://cdn1.unegui.mn/media/cache1/2d/ff/2dff7360f27550a1b578eb73d5564bfc.webp",
    description: "1002000 км *  Автомат * 2.4 л * Хайбрид",
  },
  {
    title: "Toyota Camry, 2013/2022",
    price: "24.5 сая ₮",
    discount: "15%",
    image:
      "https://cdn1.unegui.mn/media/cache1/2d/ff/2dff7360f27550a1b578eb73d5564bfc.webp",
    description: "1002000 км *  Автомат * 2.4 л * Хайбрид",
  },
  {
    title: "Toyota Camry, 2013/2022",
    price: "24.5 сая ₮",
    discount: "15%",
    image:
      "https://cdn1.unegui.mn/media/cache1/2d/ff/2dff7360f27550a1b578eb73d5564bfc.webp",
    description: "1002000 км *  Автомат * 2.4 л * Хайбрид",
  },
];

data.map((cardData) => {
  createCard(cardData);
});
// const createCard = (cardData) => {...} ged arrow function -> zgr function bolgono
function createCard(cardData) {
  const body = document.querySelector("body"); // hamgin turund body barij avna // querySelector("hussenee bichij bolno") bol zgr // (".class") ("#id") ("tag") // array haalt [0] hiih shardlagagui // querySelector ni 1 l zuil barij avdag
  const container = document.createElement("div"); // tuunii daraa div hergtei // huvisagchaa hadgalahdaa class -iinh ni nereer nerlevel zgr
  const image = document.createElement("img"); // tgd div dotor bh busad element -ee des daratai usgene
  const priceContainer = document.createElement("div");
  const price = document.createElement("h6");
  const title = document.createElement("p");
  const description = document.createElement("span");

  container.classList.add("container"); // className esvel classList ashiglaj bolno
  image.classList.add("image");
  priceContainer.classList.add("priceContainer");
  price.classList.add("price");
  title.classList.add("title");
  description.classList.add("description");

  image.src = cardData.image;
  image.alt = "image"; // zurag garj irehgui bga tohioldold garj ireh text

  price.innerText = cardData.price;
  title.innerText = cardData.title;
  description.innerText = cardData.description;

  priceContainer.appendChild(price);
  priceContainer.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><script xmlns=""/>
<path d="M12.694 18.7472L12.694 18.7472L12.6907 18.7501C12.3086 19.0844 11.7057 19.0839 11.3241 18.7452L11.3241 18.7451L11.3192 18.7409L11.2093 18.6445L11.2075 18.643C8.56194 16.3363 6.46223 14.5002 5.027 12.7857C3.60527 11.0873 2.95048 9.64011 3.00293 8.12279C3.05138 6.80791 3.75402 5.53662 4.89126 4.79043L4.89181 4.79007C7.06151 3.36441 9.77692 4.01416 11.2514 5.6774C11.4412 5.89148 11.7136 6.01401 11.9997 6.01401C12.2858 6.01401 12.5582 5.89148 12.748 5.6774C14.2245 4.01189 16.9389 3.35712 19.1055 4.78867L19.1082 4.79043C20.2457 5.53679 20.9484 6.80848 20.9966 8.12367L20.9966 8.12449C21.0533 9.64027 20.3998 11.0866 18.976 12.7883C17.5394 14.5054 15.4377 16.3457 12.7921 18.6621C12.792 18.6622 12.792 18.6622 12.7919 18.6623L12.7904 18.6636L12.694 18.7472Z" fill="white" stroke="#777777" stroke-width="2" stroke-linejoin="round"/>
</svg>`;
  container.appendChild(image);
  container.appendChild(priceContainer);
  container.appendChild(title);
  container.appendChild(description);
  body.appendChild(container);
}
// createCard();
// createCard();

// js der ursun card
// const body = document.querySelector("body"); // hamgin turund body barij avna // querySelector("hussenee bichij bolno") bol zgr // (".class") ("#id") ("tag") // array haalt [0] hiih shardlagagui // querySelector ni 1 l zuil barij avdag
// const container = document.createElement("div"); // tuunii daraa div hergtei // huvisagchaa hadgalahdaa class -iinh ni nereer nerlevel zgr
// const image = document.createElement("img"); // tgd div dotor bh busad element -ee des daratai usgene
// const priceContainer = document.createElement("div");
// const price = document.createElement("h6");
// const title = document.createElement("p");
// const description = document.createElement("span");

// image.src =
//   "https://cdn1.unegui.mn/media/cache1/2d/ff/2dff7360f27550a1b578eb73d5564bfc.webp";
// image.alt = "image"; // zurag garj irehgui bga tohioldold garj ireh text
// price.innerText = "24.5 сая ₮";
// title.innerText = "Toyota Camry, 2013/2022";
// description.innerText = "1002000 км *  Автомат * 2.4 л * Хайбрид";

// container.classList.add("container"); // className esvel classList ashiglaj bolno
// image.classList.add("image");
// priceContainer.classList.add("priceContainer");
// price.classList.add("price");
// title.classList.add("title");
// description.classList.add("description");

// priceContainer.appendChild(price);
// priceContainer.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><script xmlns=""/>
// <path d="M12.694 18.7472L12.694 18.7472L12.6907 18.7501C12.3086 19.0844 11.7057 19.0839 11.3241 18.7452L11.3241 18.7451L11.3192 18.7409L11.2093 18.6445L11.2075 18.643C8.56194 16.3363 6.46223 14.5002 5.027 12.7857C3.60527 11.0873 2.95048 9.64011 3.00293 8.12279C3.05138 6.80791 3.75402 5.53662 4.89126 4.79043L4.89181 4.79007C7.06151 3.36441 9.77692 4.01416 11.2514 5.6774C11.4412 5.89148 11.7136 6.01401 11.9997 6.01401C12.2858 6.01401 12.5582 5.89148 12.748 5.6774C14.2245 4.01189 16.9389 3.35712 19.1055 4.78867L19.1082 4.79043C20.2457 5.53679 20.9484 6.80848 20.9966 8.12367L20.9966 8.12449C21.0533 9.64027 20.3998 11.0866 18.976 12.7883C17.5394 14.5054 15.4377 16.3457 12.7921 18.6621C12.792 18.6622 12.792 18.6622 12.7919 18.6623L12.7904 18.6636L12.694 18.7472Z" fill="white" stroke="#777777" stroke-width="2" stroke-linejoin="round"/>
// </svg>`;
// container.appendChild(image);
// container.appendChild(priceContainer);
// container.appendChild(title);
// container.appendChild(description);
// body.appendChild(container);
