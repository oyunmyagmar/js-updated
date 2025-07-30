// Map method
// array-g uuriig ni uurchluhgui
// map neg function avna, tuhain function bas neg utga avna
// // // map method = for loop gj oilgoj bolno <- alban yosnii tod bish
// map method shine array uusgej ugnu, shine array ni huuchin array-tei length ijil bn
// yamar array uusgehee map-iin return -eer shidne
// shine array usgej ugne shine huuchin array length ijil bna

// arr.map((tuhain function avah utga) => {});
// ages.map(()=>{}) function -iig zaaval bichne

console.log("ARRAY-MAP-METHOD");

let ages = [10, 203, 43, 30, 50];

for (i = 0; i < ages.length; i++) {
  console.log("ages[i]", ages[i]);
}
// deerh bichiglel doorh bichigleltei adil
// door orj irj bga a element maani ages[i] buyu array -iin element 1, 1 -eeree orj irj bn
ages.map((a) => {
  console.log(a);
});
// ingej element bolgon deer guij bgag iteration gdeg
// guisen element -ee a gej nerlej bga gehdee uuruur nerlej bolno
// uchir ni function der orj irj bga utgiig function uuruu yu gj nerlej avmaar bn duraaraa nerlej avna

// shine array uusgej bgag let duu -eer barina
let duu = ages.map((a) => {
  console.log(a);
});
console.log(duu); // ene function yu butsana tsuglullad array usged butsagad ugdug

let duu1 = ages.map((a) => {
  return 10; // yamar array uusgehee map-iin return -eer shidne
});
console.log(duu1); // return yu ugnu tuuniig tsuglulad array bolgoj ugnu

let duu2 = ages.map((b) => {
  return 10 * b;
});
console.log(duu2);
// degur ni for loop irged element bolgoniig nadaa gantshan function -ii utga bolgood ugsun
// teruger yaj l bol yaj boloh ged bn

let duu3 = ages.map((b) => {
  return {
    value: 10 * b,
  };
});
console.log(duu3);
// ingej bas bolno

let datas = [
  { name: "boldo", age: 20, grade: 11, balance: 1500, gender: "male" },
  { name: "boldo", age: 40, grade: 11, balance: 150000, gender: "male" },
  { name: "dorjo", age: 15, grade: 11, balance: 1000, gender: "male" },
  { name: "zulaa", age: 28, grade: 11, balance: 35000, gender: "female" },
  { name: "tsetsgee", age: 30, grade: 11, balance: 27700, gender: "female" },
  { name: "bata", age: 10, grade: 11, balance: 17000, gender: "male" },
  { name: "zulaa", age: 18, grade: 11, balance: 3500, gender: "female" },
  { name: "zulaa", age: 38, grade: 11, balance: 103500, gender: "female" },
];

let newStudents = datas.map((student) => {
  return {
    name: student.name,
    age: student.age,
    grade: student.grade + 1,
  };
});
console.log("grades-original", datas);
console.log("grades-year after", newStudents);

// filter method
// filter uuriig ni uuurchluhgui
// shine array uusgene ugnu
// filter method neg function avna, tuhain function neg utga avna
// return deer true bh buh element -iig tsugluulaad array butsana

console.log("ARRAY-FILTER-METHOD");

const filteredByEven = ages.filter((age) => {
  return age % 2 === 0;
});
console.log("ages-original", ages);
console.log("ages-filtered even", filteredByEven);

// map ontslog ni yug l butsana tedgeeriig bugdiig ni tsugluulaad array uusged butsaana
// filter arai uur bn
// return ni 1 bol true avna 1 bol false avna
// filter ni age yamar tohioldold true avch bg yum, ter bolgoniig ni tsuglulad butsana
let duu4 = ages.map((age) => {
  return age % 2 === 0;
});
console.log(duu4);

// sort method
// sort method function avna
// avj bga function ni 2 utga orj irne
// return deer + esvel - too butsaana
// sort method ni array -iig uuriig ni uurchilnu
// map bolon filter ni array -iig uuriig ni uurchluhgui

console.log("ARRAY SORT METHOD");

console.log("ages-original", ages);

ages.sort((a, b) => {
  return 1; // heveeree
});
console.log("ages return +1 ued", ages);

ages.sort((a, b) => {
  return -1; // reverse hiisen
});
console.log("ages return -1 ued", ages);

ages.sort((a, b) => {
  console.log("a = ", a);
  console.log("b = ", b);
  return 1;
});
console.log("a bolon b -g hevlehed", ages);

// age 1 -> b age 2 -> a bgad bn
ages.sort((age2, age1) => {
  return age2 - age1;
});
console.log("bagas ni ihruu sortloh", ages);

// Jishee bodlogo angid
// Suragchdiig nasnii erembeer ni sortloh
datas.sort((student2, student1) => {
  return student2.age - student1.age;
});
console.log("Students sorted by age order", datas);

// Suragchdiig eregtei emegtei -eer sortloh
datas.sort((student2, student1) => {
  if (student1.gender > student2.gender) {
    return -1;
  } else {
    return 1;
  }
});
console.log("Student sorted by gender", datas);

// Suragchdiig ner -eer sortloh
datas.sort((student2, student1) => {
  if (student1.name > student2.name) {
    return -1;
  } else {
    return 1;
  }
});
console.log("Student sorted by name", datas);

console.log("BODLOGO");

// Bodlogo #1
// nasand hursen suragchdiig filterlej oloh function bich
function findAdultStudents(students) {
  let filtered = students.filter((student) => {
    return student.age >= 18;
  });
  return filtered;
}
const resultAdultStudents = findAdultStudents(datas);
console.log("Students filtered by an age of 18 and plus", resultAdultStudents);

// Bodlogo #2
// // gender ugunguut tuhain gendereer filterlej uguh function bich
// // eg: filterByGender("male") => zuvhun erchudiig yalgaj ugnu

function filterByGender(students, gender) {
  let filtered = students.filter((student) => {
    return student.gender === gender;
  });
  return filtered;
}
const resultStudentsFilteredByGender = filterByGender(datas, "female");
console.log("Students filtered by gender", resultStudentsFilteredByGender);

// Bodlogo #3
// nasaar ni sortloh function bich

function sortByAge(students) {
  let sortedByAge = students.sort((student2, student1) => {
    return student2.age - student1.age;
  });
  return sortedByAge;
}
const resultStudentsSortedByAge = sortByAge(datas);
console.log("Students sorted by age", resultStudentsSortedByAge);

// Bodlogo #4
// neg too ugunguut tuhain toonoos ih balance-tai suragchdiig yalgaj uguh function bich
function filterByBalance(students, balance) {
  let filteredByBalance = students.filter((student) => {
    return student.balance > balance;
  });
  return filteredByBalance;
}
const resultStudentsFilteredByBalance = filterByBalance(datas, 20000);
console.log("Students filtered by balance", resultStudentsFilteredByBalance);

// Bodlogo #5
// classCode gesen field nemeh function bich
// eg: addClassCodeToStudents(students, "3A") => [{name: "boldo, age: 3, grade: 11, gender: "male", balance: 1231, classCode: "3A"},...]

// option 1
// function addClassCodeToStudents(students, classCode) {
//   let classCodeFieldadded = data.map((student) => {
//     return {
//       name: student.name,
//       age: student.age,
//       grade: student.grade,
//       balance: student.balance,
//       gender: student.gender,
//       classCode,
//     };
//   });
//   return classCodeFieldadded;
// }
// const resultClassCodeAdded = addClassCodeToStudents(datas, "3A");
// console.log("classCode added", resultClassCodeAdded);

// option 2
// function addClassCodeToStudents(students, classCode) {
//   for (i = 0; i < students.length; i++) {
//     students[i].classCode = classCode;
//   }
//   return students;
// }
// const resultClassCodeAdded = addClassCodeToStudents(datas, "3A");
// console.log("classCode added", resultClassCodeAdded);

// option 3
function addClassCodeToStudents(students, classCode) {
  let classCodeFieldadded = datas.map((student) => {
    return {
      ...student,
      classCode: classCode,
    };
  });
  return classCodeFieldadded;
}
const resultClassCodeAdded = addClassCodeToStudents(datas, "3A");
console.log("classCode added", resultClassCodeAdded);

// bodlogo #6
// removeGenders from student array function bich

// option 1
// function removeGendersFromStudents(students) {
//   let genderFieldRemoved = students.map((student) => {
//     return {
//       name: student.name,
//       age: student.age,
//       grade: student.grade,
//       balance: student.balance,
//       classCode: student.classCode,
//     };
//   });
//   return genderFieldRemoved;
// }
// let resultGenderRemoved = removeGendersFromStudents(datas);
// console.log("gender removed", resultGenderRemoved);

// option 2
function removeGendersFromStudents(students) {
  let genderFieldRemoved = students.map((student) => {
    const newStudent = { ...student };
    delete newStudent.gender;
    return newStudent;
  });
  return genderFieldRemoved;
}
const resultGenderRemoved = removeGendersFromStudents(datas);
console.log("gender removed", resultGenderRemoved);

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

// 1. Хямдралтай бүтээгдэхүүнүүдийг шүүж буцаадаг функц бич. OK
function getDiscountedProducts(products) {
  let discountedProducts = products.filter((product) => {
    return product.isDiscounted === true;
  });
  return discountedProducts;
}
const resultDiscountedProducts = getDiscountedProducts(data);
console.log("Discounted Products: ", resultDiscountedProducts);

// 2. Нөөц дууссан (stock === 0) бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getOutOfStockProducts(products) {
  let productsOutOfStock = products.filter((product) => {
    return product.stock === 0;
  });
  return productsOutOfStock;
}
let resultProductsOutOfStock = getDiscountedProducts(data);
console.log("Products Out Of Stock: ", resultProductsOutOfStock);

// 3. Үнэ нь 1 сая төгрөгөөс дээш бүтээгдэхүүнүүдийг буцаадаг функц бич. OK
function getExpensiveProducts(products) {
  let expensiveProducts = products.filter((product) => {
    return product.price > 1000000;
  });
  return expensiveProducts;
}
const resultExpensiveProducts = getExpensiveProducts(data);
console.log("Expensive Products: ", resultExpensiveProducts);

// 4. "Computers" категорийн бүтээгдэхүүнүүдийг буцаадаг функц бич. OK
function getComputers(products) {
  let categoryComputers = products.filter((product) => {
    return product.category === "Computers";
  });
  return categoryComputers;
}
const resultCategoryComputers = getComputers(data);
console.log("Category: Computers ", resultCategoryComputers);

// 5. Тухайн брэндийн нэрээр бүтээгдэхүүнүүдийг шүүдэг функц бич. OK
function filterByBrand(products, brandName) {
  let productsFilteredByBrandName = products.filter((product) => {
    return product.brand === brandName;
  });
  return productsFilteredByBrandName;
}
const resultProductsFilteredByBrandName = filterByBrand(data, "Apple");
console.log(
  "Products Filtered By Brand Name",
  resultProductsFilteredByBrandName
);

// 6. Бүх бүтээгдэхүүн дээр `isHeavy: true/false` гэсэн талбар нэмдэг функц бич (жин 1 кг-аас их бол). OK
function addIsHeavyFlag(products) {
  let productsHeavyOrNot = products.map((product) => {
    if (product.weight > 1) {
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
  return productsHeavyOrNot;
}
const resultProductsHeavyOrNot = addIsHeavyFlag(data);
console.log("Products Weight Heavy Or Not: ", resultProductsHeavyOrNot);

// 7. Бүх бүтээгдэхүүний үнэд 10% нэмдэг функц бич. OK
function increasePriceByTenPercent(products) {
  let productsIncreasedPriceByTenPercent = products.map((product) => {
    return {
      ...product,
      price: parseInt(product.price * 1.1),
    };
  });
  return productsIncreasedPriceByTenPercent;
}
const resultProductsIncreasedPriceByTenPercent =
  increasePriceByTenPercent(data);
console.log(
  "Products Price Increased By 10%: ",
  resultProductsIncreasedPriceByTenPercent
);

// 8. Хямдралын дараах үнэтэй `finalPrice` талбарыг тооцож нэмдэг функц бич. OK
function addFinalPrice(products) {
  let productsFinalPriceAdded = products.map((product) => {
    return {
      ...product,
      finalPrice:
        product.price - (product.price * product.discountPercent) / 100,
    };
  });
  return productsFinalPriceAdded;
}
const resultProductsFinalPriceAdded = addFinalPrice(data);
console.log("Products Final Price Added: ", resultProductsFinalPriceAdded);

// 9. Үнэлгээ хамгийн өндөртэй бүтээгдэхүүнийг буцаадаг функц бич. OK

// option 3 at class
function getTopRatedProduct(products) {
  let maxRatedProduct = products[0];
  products.forEach((product) => {
    if (maxRatedProduct.rating < product.rating) {
      maxRatedProduct = product;
    }
  });
  return maxRatedProduct;
}
const resultMaxRatedProduct = getTopRatedProduct(data);
console.log("Top Rated Product: ", resultMaxRatedProduct);

// option 2 at class by bagsh
// function getTopRatedProduct(products) {
//   let maxProduct = products[0];
//   products.forEach((el) => {
//     if (maxProduct.price < el.price) {
//       maxProduct = el;
//     }
//   });
//   return;
// }
// const resultTopRatedProduct = getTopRatedProduct(products);
// console.log(resultTopRatedProduct);

// option 1 at home
// function getTopRatedProduct(products) {
//   let topRatedProduct = products[0];
//   for (i = 0; i < products.length; i++) {
//     if (products[0].rating < products[i].rating) {
//       topRatedProduct = products[i];
//     }
//   }
//   return topRatedProduct;
// }
// const resultTopRatedProduct = getTopRatedProduct(data);
// console.log("Top Rated Product: ", resultTopRatedProduct);

// 10. Үнэ хамгийн бага бүтээгдэхүүнийг буцаадаг функц бич. OK

// option 2 at class
function getCheapestProduct(products) {
  let minPriceProduct = products[0];
  products.forEach((product) => {
    if (minPriceProduct.price > product.price) {
      minPriceProduct = product;
    }
  });
  return minPriceProduct;
}
const resultMinPriceProduct = getCheapestProduct(data);
console.log("Cheapest Product: ", resultMinPriceProduct);

// option 1 at home
// function getCheapestProduct(products) {
//   let cheapestProduct = products[0];
//   for (i = 0; i < products.length; i++) {
//     if (products[0].price > products[i].price) {
//       cheapestProduct = products[i];
//     }
//   }
//   return cheapestProduct;
// }
// const resultCheapestProduct = getCheapestProduct(data);
// console.log("Cheapest Product: ", resultCheapestProduct);

// 11. Бүх бүтээгдэхүүний нийт нөөц (stock)-ийг тооцдог функц бич. OK

// option 2 at class
function getTotalStock(products) {
  let sumStock = 0;
  products.forEach((product) => {
    sumStock += product.stock;
  });
  return sumStock;
}
const resultSumStock = getTotalStock(data);
console.log("Total Stock Of All Products", resultSumStock);

// option 1 at home
// function getTotalStock(products) {
//   let totalStockAllProducts = 0;
//   for (i = 0; i < products.length; i++) {
//     totalStockAllProducts += products[i].stock;
//   }
//   return totalStockAllProducts;
// }
// const resultTotalStock = getTotalStock(data);
// console.log("Total Stock Of All Products: ", resultTotalStock);

// 12. Бүх бүтээгдэхүүний нийлбэр үнийг тооцдог функц бич. OK

// option 2 at class
function getTotalPrice(products) {
  let sumPrice = 0;
  products.forEach((product) => {
    sumPrice += product.price;
  });
  return sumPrice;
}
const resultSumPrice = getTotalPrice(data);
console.log("Total Price Of All Products", resultSumPrice);

// option 1 at home
// function getTotalPrice(products) {
//   let totalPriceAllProducts = 0;
//   for (i = 0; i < products.length; i++) {
//     totalPriceAllProducts += products[i].price;
//   }
//   return totalPriceAllProducts;
// }
// const resultTotalPriceAllProducts = getTotalPrice(data);
// console.log("Total Price Of All Products: ", resultTotalPriceAllProducts);

// 13. Тухайн supplier-аар шүүж бүтээгдэхүүнүүдийг буцаадаг функц бич. OK
function filterBySupplier(products, supplierName) {
  let productsFilteredBySupplier = products.filter((product) => {
    return product.supplier === supplierName;
  });
  return productsFilteredBySupplier;
}
const resultProductsFilteredBySupplier = filterBySupplier(data, "PCMall");
console.log(
  "Products Filtered By Supplier: ",
  resultProductsFilteredBySupplier
);

// 14. Бүх бүтээгдэхүүний нэрсийг массив болгон буцаадаг функц бич. OK
function getProductNames(products) {
  let arrOfProductNames = products.map((product) => {
    return product.name;
  });
  return arrOfProductNames;
}
const resultArrOfProductNames = getProductNames(data);
console.log("Array Of Product Names: ", resultArrOfProductNames);

// 15. Бүтээгдэхүүнүүдийг үнээр нь өсөхөөр эрэмбэлж буцаадаг функц бич. OK
function sortByPriceAscending(products) {
  let productsSortedByPriceAscending = products.sort((product2, product1) => {
    return product2.price - product1.price;
  });
  return productsSortedByPriceAscending;
}
const resultProductsSortedByPriceAscending = sortByPriceAscending(data);
console.log(
  "Products Sorted By Price Ascending: ",
  resultProductsSortedByPriceAscending
);

// 16. Нөөц багатай (≤ 5) бүтээгдэхүүнүүдийг шүүж буцаадаг функц бич. OK
function getLowStockProducts(products) {
  let productsLowInStock = products.filter((product) => {
    return product.stock <= 5;
  });
  return productsLowInStock;
}
const resultProductsLowInStock = getLowStockProducts(data);
console.log("Products Low In Stock; ", resultProductsLowInStock);

// 17. Давхардалгүй нийлүүлэгчийн нэрсийн массив буцаадаг функц бич.

// option 2 at class
function getUniqueSuppliers(products) {
  let arrSuppliers = products.map((product) => {
    return product.supplier;
  });
  let uniqueSuppliers = [];
  arrSuppliers.forEach((supplier) => {
    if (uniqueSuppliers.includes(supplier)) {
    } else {
      uniqueSuppliers.push(supplier);
    }
  });
  return uniqueSuppliers;
}
const resultUniqueSuppliers = getUniqueSuppliers(data);
console.log("Array Of Unique Suppliers", resultUniqueSuppliers);

// option 1 at class
// for (i = 0; i < arrSuppliers.length; i++) {
//   if (arrSuppliers[0] !== arrSuppliers[i]) {
//     return arrSuppliers[i];
//   }
// }
// return arrSuppliers;

// 18. Зөвхөн name ба price талбартай шинэ массив үүсгэдэг функц бич. OK
function getNameAndPriceList(products) {
  let newArrProductsWithNameAndPrice = products.map((product) => {
    return {
      name: product.name,
      price: product.price,
    };
  });
  return newArrProductsWithNameAndPrice;
}
const resultNewArrProductsWithNameAndPrice = getNameAndPriceList(data);
console.log(
  "New Array Of Products With Name And Price",
  resultNewArrProductsWithNameAndPrice
);

// 19. Үнэлгээ нь 4.5-аас их бүх бүтээгдэхүүнүүдийг буцаадаг функц бич. OK
function getHighlyRatedProducts(products) {
  let highlyRatedProducts = products.filter((product) => {
    return product.rating > 4.5;
  });
  return highlyRatedProducts;
}
const resultHighlyRatedProducts = getHighlyRatedProducts(data);
console.log("Highly Rated Products", resultHighlyRatedProducts);

// 20. Бүх бүтээгдэхүүнд `id` талбар нэмж өгдөг функц бич (жишээ нь 1, 2, 3...). OK
function addIdToProducts(products) {
  let idAddedProducts = products.map((product, i) => {
    return {
      ...product,
      id: i,
    };
  });
  return idAddedProducts;
}
const resultIdAddedProducts = addIdToProducts(data);
console.log("Id Added Products:", resultIdAddedProducts);
