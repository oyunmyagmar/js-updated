let products = [
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
// bodlogo 17
// davhtsagui suppliers -uudaa olohiin tuld
// ehleed suppliers name -iig avah yostoi
// suppliers name -uudiig array dotor hurvuuleh hregtei
// array.map() ni array -iig butsaadag
// array.map() ni array -iin elementuudiig butsaana gehdee:
// array.map() ni array -iin element tus buriig todorhoi hemjeger uurchluh, ustgah, nemeh tohioldold ashiglana
// jishelbel busad field -iig ustgaad zuvhun supplier uldeh heregtei bol hereglene
//  array.map() return deer array -iin yamar element ustgah ve? nemeh ve? gedgee bichne

const suppliers = products.map((product) => {
  return product.supplier; //array -iin 1 element product -iin zuvhun category -iig avmar bn gej ugnu
});
const uniqueSuppliers = []; // shine array uusgene
// oilgomjtoi bhin tuld ehled for loop -eer bichle, suppliers -aa davtana
for (let i = 0; i < suppliers.length; i++) {
  if (!uniqueSuppliers.includes(suppliers[i])) {
    uniqueSuppliers.push(suppliers[i]);
  }
}
// element tus buriig uniqueSuppliers array -ruu push hiine
// push hiihes umnu suppliers[i] buyu suppliers -iin i -dahi element maani uniqueSuppliers array -d bnu? -g shalgana
// teriig shalgadag array method -iin belen function bga boolean butsdag
// array.includes() <- (dotroo shalgah yostoi utgaa ugnu)
// uniqueSuppliers.includes(suppliers[i]) -> suppliers[i] bval true butsana bhgui bol false butsana
// if boolean utga avdag uchir true bval ajillana false bval ajillahgui
// tgvel false bh ued buyu suppliers[i] bhgui bh ued push -lmaar bn, bval push -leh shardlagagui
// !uniqueSuppliers.includes(suppliers[i]) -> urd ni ! temdeg taviad
// esregeeree false bol true bolgood true bol false bolgono
// false -iig esregeer bolgohoor true bolgod ter ued code maani ajillana
// ter ued uniqueSuppliers -ruu push hiine suppliers[i] buyu tuhain element -iig pushlene
// uniqueSuppliers.push(suppliers[i])
console.log(uniqueSuppliers);
console.log(suppliers); // <- odoo eniig davhardagui Unique bolgoh gd bn
// array.sort ni erembledeg zuil -> sort hereglehgui

// ymarch element orj irsen, heden ch element -tei bsn hamaagui
// ajilladag code bichih ni chuhal
// olon dahih ashiglagdah bolomjtoi generic code bolno
// generic code bichih ni sain chadvar/engineer/
// deerh code ni beginner level tuvshind

// array.includes() function ni suppliers[i] -iig bga esehiig shalgaj bn gdeg ni
// uniqueSuppliers array dotroo bga buh element -eer guij bga gsen ug
// tgeher udan ajillaj bga gsen ug
// iim ued objects gedgiig sain ashiglaj surah heregtei
// object -ruu element hiih or field nemeh

const data = {}; // data gsen hooson object uusgeed yaj field nemeh ve?
data.category = "food";
console.log(data);

// object ni array-aas yamar davuu taltai?
// dotroo heden field -tei bh ni hamagui shuud direct nereer ni barij avah haih bolomjtoi
// object ni array.includes shig buh element -eer haij guih shardlagagui shuud uuruu olj avch chadna

data.test1 = 1;
console.log(data);
data.test2 = 2;
console.log(data);

data["category"];
// objectiin araas array [] haalt taviad dotor ni string -eer haih utgaa ugnu
// ingevel food gsen utgiig nadad butsaj ugnu
console.log(data["category"]);
// ene food-iig gargaj irehed test1, test2 -iig davtahgui bga gsen ug

// herev object bish array bsan bol ["food", "test1", "test2"] zaaval 3 -uulangaar davtaj 3 element 3 -uulang ni shalgaj bj meddeg
// object bol tegdeggui, shud hussen element -ee barij avdag
// code -nd yaj ashiglagdah ve?

const categories = products.map((product) => {
  return product.category;
});
const uniqueCategories = {}; // map -lsnii daraa 1 object uusged nemed bj chadna
categories.forEach((category) => {
  uniqueCategories[category] = true;
});
// categories.map esvel categories.forEach hiivel zgr
// uchir ni categories -iig uurchluh shardlaga bhgui uchir
// .forEach syntax ni .map -tai ijilhen gehde return hiigeegui tohioldold ashiglaval zgr
// yu ch butsagagui, yu ch uurchluugui tohioldol
// uniqueCategories[category] = true -> uniqueCategories -ruu category -iig zgr true ged nemne

console.log(uniqueCategories);
// ene garch irsen object -iig array bolgoj hurvuldeg zuil function bdg
// Object gsen keyword bdag -> object -iin method -iig ashiglahad zoriulsan
// Object.key bolon Object.value 2 songolttoi
Object.values(uniqueCategories);
console.log(Object.values(uniqueCategories));
Object.keys(uniqueCategories);
console.log(Object.keys(uniqueCategories)); // manai bodlogo der zuvhun keys -iig avahad bolno

// ene ni categories.length -eer buyu 5 udaa l ajillaj bga
// hamaagui hurdan, iluu efficient

// object bodlogo

let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
];

// 7. Машины түлш зарцуулалтаар fuelEfficiency талбарт `efficient: true/false` нэмдэг функц бич (5.0-аас бага бол efficient).
function addEfficiencyFlag(cars) {
  cars.map((car) => {
    if (car.fuelEfficiency < 5) {
      car.efficient = true;
    } else {
      car.efficient = false;
    }
    return car;
  });
  return cars;
}
const resultCarsWithEfficiencyFlag = addEfficiencyFlag(cars);
console.log("7. Car Efficiency Flag Added: ", resultCarsWithEfficiencyFlag);

// 8. Бүх машины үнийг 15% нэмдэг функц бич.
function increaseCarPrices(cars) {
  let carsWithIncreasedPrices = cars.map((car) => {
    return {
      ...car,
      price: Math.floor(car.price * 1.15),
    };
  });
  return carsWithIncreasedPrices;
}
const resultCarsWithIncreasedPrices = increaseCarPrices(cars);
console.log("8. Cars With Increased Prices: ", resultCarsWithIncreasedPrices);

// 9. Шинэ талдаа (50,000 км-ээс бага явсан) машинуудыг буцаадаг функц бич.
function getLowMileageCars(cars) {
  let carsWithLowMileage = cars.filter((car) => {
    return car.mileage < 50000;
  });
  return carsWithLowMileage;
}
const resultCarsWithLowMileage = getLowMileageCars(cars);
console.log("9. Cars With Low Mileage: ", resultCarsWithLowMileage);

// 10. Хамгийн бага түлш зарцуулалттай машиныг буцаадаг функц бич.
function getMostEfficientCar(cars) {
  let mostEfficientCar = cars[0];
  cars.forEach((car) => {
    if (mostEfficientCar.fuelEfficiency > car.fuelEfficiency) {
      mostEfficientCar = car;
    }
  });
  return mostEfficientCar;
}
const resultMostEfficientCar = getMostEfficientCar(cars);
console.log("10. Most Efficient Car: ", resultMostEfficientCar);

// 11. Хамгийн өндөр үнэтэй машиныг буцаадаг функц бич.
function getMostExpensiveCar(cars) {
  let mostExpensiveCar = cars[0];
  cars.forEach((car) => {
    if (mostExpensiveCar.price < car.price) {
      mostExpensiveCar = car;
    }
  });
  return mostExpensiveCar;
}
const resultMostExpensiveCar = getMostExpensiveCar(cars);
console.log("11. Most Expensive Car: ", resultMostExpensiveCar);

// 12. Бүх машины нийлбэр mileage-г буцаадаг функц бич.
function getTotalMileage(cars) {
  let sumMileage = 0;
  cars.map((car) => {
    sumMileage += car.mileage;
  });
  return sumMileage;
}
const resultSumMileageOfAllCars = getTotalMileage(cars);
console.log("12. Total Mileage Of All Cars: ", resultSumMileageOfAllCars);

// 13. Supplier нэрээр машинуудыг шүүж буцаадаг функц бич.
function filterBySupplier(cars, supplierName) {
  let carsFilteredBySupplier = cars.filter((car) => {
    return car.supplier.toLowerCase() === supplierName.toLowerCase();
  });
  return carsFilteredBySupplier;
}
const resultCarsFilteredBySupplier = filterBySupplier(cars, "autojapan");
console.log(
  "13. Cars Filtered By Supplier Name: ",
  resultCarsFilteredBySupplier
);

// 14. Машины model нэрсийг массив болгож буцаадаг функц бич.
function getCarModels(cars) {
  let arrCarModels = cars.map((car) => {
    return car.model;
  });
  return arrCarModels;
}
const resultArrCarModels = getCarModels(cars);
console.log("14. Array Of Car Models: ", resultArrCarModels);

// 15. Машинуудыг үнийн өсөхөөр эрэмбэлж буцаадаг функц бич.
function sortByPriceAscending(cars) {
  let carsSortedByPriceAscending = cars.sort((car2, car1) => {
    return car2.price - car1.price;
  });
  return carsSortedByPriceAscending;
}
const resultCarsSortedByPriceAscending = sortByPriceAscending(cars);
console.log(
  "15. Cars Sorted By Price Ascending: ",
  resultCarsSortedByPriceAscending
);

// 16. Engine size нь 2.0-аас их машинуудыг буцаадаг функц бич.
function getLargeEngineCars(cars) {
  let carsWithLargeEngine = cars.filter((car) => {
    return car.engineSize > 2;
  });
  return carsWithLargeEngine;
}
const resultCarsWithLargeEngine = getLargeEngineCars(cars);
console.log("17. Cars With Large Engine: ", resultCarsWithLargeEngine);

// 17. Давхардалгүй брэндийн нэрсийг массив болгон буцаадаг функц бич.

// option 2 at class
function getUniqueBrands(cars) {
  let arrCarBrands = cars.map((car) => {
    return car.brand;
  });
  let uniqueBrands = {};
  arrCarBrands.forEach((brand) => {
    uniqueBrands[brand] = true;
  });
  return Object.keys(uniqueBrands);
}
const resultUniqueBrands = getUniqueBrands(cars);
console.log("17. Unique Brands: ", resultUniqueBrands);

// option 1 at home
// function getUniqueBrands(cars) {
//   let arrCarBrands = cars.map((car) => {
//     return car.brand;
//   });
//   let uniqueBrands = [];
//   arrCarBrands.forEach((brand) => {
//     if (uniqueBrands.includes(brand)) {
//     } else {
//       uniqueBrands.push(brand);
//     }
//   });
//   return uniqueBrands;
// }
// const resultUniqueBrands = getUniqueBrands(cars);
// console.log("Array Of Unique Brands: ", resultUniqueBrands);

// 18. Зөвхөн model ба year талбартай шинэ массив үүсгэдэг функц бич.
function getModelAndYearList(cars) {
  let arrCarsWithModelAndYear = cars.map((car) => {
    return {
      model: car.model,
      year: car.year,
    };
  });
  return arrCarsWithModelAndYear;
}
const resultArrCarsWithModelAndYear = getModelAndYearList(cars);
console.log(
  "18. Array Of Cars With Model And Year: ",
  resultArrCarsWithModelAndYear
);

// 19. 4.0-с бага fuel efficiency-тай машинуудыг "super efficient" гэж тэмдэглэдэг функц бич.

// option 2
function tagSuperEfficientCars(cars) {
  let carsFilteredByEfficiency = cars
    .filter((car) => car.fuelEfficiency < 4)
    .map((car) => {
      return { ...car, tag: "super efficient" };
    });
  return carsFilteredByEfficiency;
}
const resultCarsTaggedWithSuperEfficient = tagSuperEfficientCars(cars);
console.log(
  "19. Cars Tagged With Super Efficient: ",
  resultCarsTaggedWithSuperEfficient
);

// option 1 at class
// function tagSuperEfficientCars(cars) {
//   let filteredCars = cars.filter((car) => {
//     return car.fuelEfficiency < 4;
//   });
//   filteredCars.map((superEfficientCar) => {
//     return {
//       ...superEfficientCar,
//       superEfficient: true,
//     };
//   });
//   return filteredCars;
// }
// const resultCarsTaggedWithSuperEfficient = tagSuperEfficientCars(cars);
// console.log(
//   "19. Cars Tagged With Super Efficient: ",
//   resultCarsTaggedWithSuperEfficient
// );

// 20. Бүх машинд `id` талбар нэмдэг функц бич (1-с эхэлнэ).
function addIdToCars(cars) {
  let carsWithAddedId = cars.map((car, i) => {
    return {
      ...car,
      id: i,
    };
  });
  return carsWithAddedId;
}
const resultCarsWithAddedId = addIdToCars(cars);
console.log("20. Cars With Added Id: ", resultCarsWithAddedId);
