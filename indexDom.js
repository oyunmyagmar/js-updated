// 1. create elements img tag, h6, p-title, p-descrtiption, div
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

  img.src = cardData.image;
  img.alt = "image";
  //   img.height = "360";

  h6.innerText = cardData.price;
  p1.innerText = cardData.title;
  p2.innerText = cardData.description;

  img.classList.add("imgStyle");
  h6.classList.add("price");
  p1.classList.add("title");
  p2.classList.add("description");
  container.classList.add("outerBox");
  textContainer.classList.add("textBox");
  imgContainer.classList.add("imgBox");

  imgContainer.appendChild(img);
  textContainer.appendChild(h6);
  textContainer.appendChild(p1);
  textContainer.appendChild(p2);
  container.appendChild(imgContainer);
  container.appendChild(textContainer);
  body.appendChild(container);
}

// const h1 = document.createElement("h1");
// const body = document.getElementsByTagName("body")[0];
// h1.innerText = "hello world";
// // h1.className = "title";
// // h1.className = h1.className + "red";
// h1.classList.add("title");
// h1.classList.add("red");

// body.appendChild(h1);
// console.log(body, "body");
// console.log(h1, "h1");

//<svg
//   xmlns="http://www.w3.org/2000/svg"
//   xmlns:xlink="http://www.w3.org/1999/xlink"
//   fill="#000000"
//   version="1.1"
//   id="Capa_1"
//   width="800px"
//   height="800px"
//   viewBox="0 0 378.94 378.94"
//   xml:space="preserve"
//>
//  <g>
//    <path d="M348.151,54.514c-19.883-19.884-46.315-30.826-74.435-30.826c-28.124,0-54.559,10.942-74.449,30.826l-9.798,9.8l-9.798-9.8   c-19.884-19.884-46.325-30.826-74.443-30.826c-28.117,0-54.56,10.942-74.442,30.826c-41.049,41.053-41.049,107.848,0,148.885   l147.09,147.091c2.405,2.414,5.399,3.892,8.527,4.461c1.049,0.207,2.104,0.303,3.161,0.303c4.161,0,8.329-1.587,11.498-4.764   l147.09-147.091C389.203,162.362,389.203,95.567,348.151,54.514z M325.155,180.404L189.47,316.091L53.782,180.404   c-28.368-28.364-28.368-74.514,0-102.893c13.741-13.739,32.017-21.296,51.446-21.296c19.431,0,37.702,7.557,51.438,21.296   l21.305,21.312c6.107,6.098,16.897,6.098,23.003,0l21.297-21.312c13.737-13.739,32.009-21.296,51.446-21.296   c19.431,0,37.701,7.557,51.438,21.296C353.526,105.89,353.526,152.039,325.155,180.404z" />
//  </g>
//</svg>;
