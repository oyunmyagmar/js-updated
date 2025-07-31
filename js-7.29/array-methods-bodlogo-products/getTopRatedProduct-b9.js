// Нэг л products массив дээр ажиллана
let data = [
  {
    name: "iPhone 13",
    category: "Electronics",
    price: 1200000,
    stock: 10,
    brand: "Apple",
    rating: 4.8,
    isDiscounted: true,
    discountPercent: 10,
    supplier: "MobiCom",
    weight: 0.3,
  },
  {
    name: "Samsung Galaxy S22",
    category: "Electronics",
    price: 950000,
    stock: 5,
    brand: "Samsung",
    rating: 4.5,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "Unitel",
    weight: 0.28,
  },
  {
    name: "Dell XPS 13",
    category: "Computers",
    price: 2800000,
    stock: 3,
    brand: "Dell",
    rating: 4.7,
    isDiscounted: true,
    discountPercent: 15,
    supplier: "PCMall",
    weight: 1.2,
  },
  {
    name: "Mouse Logitech M590",
    category: "Accessories",
    price: 85000,
    stock: 20,
    brand: "Logitech",
    rating: 4.3,
    isDiscounted: true,
    discountPercent: 5,
    supplier: "PCMall",
    weight: 0.1,
  },
  {
    name: "MacBook Air M2",
    category: "Computers",
    price: 3200000,
    stock: 0,
    brand: "Apple",
    rating: 4.9,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "MobiCom",
    weight: 1.1,
  },
];

// 9. Үнэлгээ хамгийн өндөртэй бүтээгдэхүүнийг буцаадаг функц бич. OK

// option 3
function getTopRatedProduct(products) {
  let topRatedProduct = products[0];
  products.forEach((product) => {
    if (topRatedProduct.rating < product.rating) {
      topRatedProduct = product;
    }
  });
  return topRatedProduct;
}
const resultTopRatedProduct = getTopRatedProduct(data);
console.log("9. Top Rated Product: ", resultTopRatedProduct);

// at class by bagsh
// function getTopRatedProduct(products) {
//   let maxProduct = products[0];
//   products.forEach((el) => {
//     if (maxProduct.price < el.price) {
//       maxProduct = el;
//     }
//   });
//   return maxProduct;
// }
// const resultTopRatedProduct = getTopRatedProduct(data);
// console.log(resultTopRatedProduct);

// option 2
function getTopRatedProduct2(products) {
  let topRatedProduct = products[0];
  for (let i = 0; i < products.length; i++) {
    if (products[0].rating < products[i].rating) {
      topRatedProduct = products[i];
    }
  }
  return topRatedProduct;
}
const resultTopRatedProduct2 = getTopRatedProduct2(data);
console.log("9. Top Rated Product2: ", resultTopRatedProduct2);
