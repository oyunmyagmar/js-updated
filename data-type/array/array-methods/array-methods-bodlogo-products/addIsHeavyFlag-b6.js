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

// 6. Бүх бүтээгдэхүүн дээр `isHeavy: true/false` гэсэн талбар нэмдэг функц бич (жин 1 кг-аас их бол). OK

// option 1 -> uuriig ni uurchluud bga, products -aa butsaj bga <- forEach bsn ch bolno
function addIsHeavyFlag(products) {
  products.map((product) => {
    if (product.weight > 1) {
      product.isHeavy = true;
    } else if (product.weight < 1) {
      product.isHeavy = false;
    }
  });
  return products;
}
const resultProductsAddedIsHeavyFlag = addIsHeavyFlag(data);
console.log("Products Added Is Heavy Flag: ", resultProductsAddedIsHeavyFlag);

// option 2 -> shine array uusgeed bga, shine array -gaa butsaj bga
function addIsHeavyFlag2(products) {
  let productsAddedIsHeavyFlag = products.map((product) => {
    if (product.weight >= 1) {
      return {
        ...product,
        isHeavy: true,
      };
    } else if (product.weight < 1) {
      return {
        ...product,
        isHeavy: false,
      };
    }
  });
  return productsAddedIsHeavyFlag;
}
const resultProductsAddedIsHeavyFlag2 = addIsHeavyFlag2(data);
console.log("Products Added Is Heavy Flag2: ", resultProductsAddedIsHeavyFlag2);
