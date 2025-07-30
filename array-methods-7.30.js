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
];

// 1. Нөөцөд байгаа (isAvailable === true) машинуудыг буцаадаг функц бич.
function getAvailableCars(cars) {
  let availableCars = cars.filter((car) => {
    return car.isAvailable === true;
  });
  return availableCars;
}
const resultAvailableCars = getAvailableCars(cars);
console.log("Available Cars: ", resultAvailableCars);

// 2. 2018 оноос хойш үйлдвэрлэгдсэн машинуудыг буцаадаг функц бич.
function getRecentCars(cars) {
  let recentCars = cars.filter((car) => {
    return car.year >= 2018;
  });
  return recentCars;
}
const resultRecentCars = getRecentCars(cars);
console.log("Recent Cars: ", resultRecentCars);
// 3. 5 саяас дээш үнэтэй машинуудыг буцаадаг функц бич.
function getExpensiveCars(cars) {
  // ...
}

// 4. "Sedan" төрөлтэй машинуудыг буцаадаг функц бич.
function getSedans(cars) {
  let sedanTypeCars = cars.filter((car) => {
    return car.type === "Sedan";
  });
  return sedanTypeCars;
}
const resultSedanTypeCars = getSedans(cars);
console.log("Sedan Type Cars: ", resultSedanTypeCars);

// 5. Брэндээр шүүж буцаадаг функц бич.
function filterByBrand(cars, brandName) {
  let carsFilteredByBrand = cars.filter((car) => {
    return car.brand === brandName;
  });
  return carsFilteredByBrand;
}
const resultCarsFilteredByBrand = filterByBrand(cars, "Toyota");
console.log("Cars Filtered By Brand: ", resultCarsFilteredByBrand);

// 6. 100,000 км-ээс их явсан машинуудыг буцаадаг функц бич.
function getHighMileageCars(cars) {
  let carsWithHighMileage = cars.filter((car) => {
    return car.mileage > 100000;
  });
  return carsWithHighMileage;
}
const resultCarsWithHighMileage = getHighMileageCars(cars);
console.log("Cars With High Mileage:", resultCarsWithHighMileage);

// 7. Машины түлш зарцуулалтаар fuelEfficiency талбарт `efficient: true/false` нэмдэг функц бич (5.0-аас бага бол efficient).
function addEfficiencyFlag(cars) {
  let carEfficiencyFlag = cars.map((car) => {
    if (car.fuelEfficiency < 5) {
      return {
        ...car,
        efficient: true,
      };
    } else if (car.fuelEfficiency > 5) {
      return {
        ...car,
        efficient: false,
      };
    }
  });
  return carEfficiencyFlag;
}
const resultCarEfficiencyFlag = addEfficiencyFlag(cars);
console.log("Car Efficiency Flag Added: ", resultCarEfficiencyFlag);

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
console.log("Cars With Increased Prices: ", resultCarsWithIncreasedPrices);

// 9. Шинэ талдаа (50,000 км-ээс бага явсан) машинуудыг буцаадаг функц бич.
function getLowMileageCars(cars) {
  let carsWithLowMileage = cars.filter((car) => {
    return car.mileage < 50000;
  });
  return carsWithLowMileage;
}
const resultCarsWithLowMileage = getLowMileageCars(cars);
console.log("Cars With Low Mileage: ", resultCarsWithLowMileage);

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
console.log("Most Efficient Car: ", resultMostEfficientCar);

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
console.log("Most Expensive Car: ", resultMostExpensiveCar);

// 12. Бүх машины нийлбэр mileage-г буцаадаг функц бич.
function getTotalMileage(cars) {
  let sumMileage = 0;
  cars.map((car) => {
    sumMileage += car.mileage;
  });
  return sumMileage;
}
const resultSumMileageOfAllCars = getTotalMileage(cars);
console.log("Total Mileage Of All Cars: ", resultSumMileageOfAllCars);

// 13. Supplier нэрээр машинуудыг шүүж буцаадаг функц бич.
function filterBySupplier(cars, supplierName) {
  // ...
}

// 14. Машины model нэрсийг массив болгож буцаадаг функц бич.
function getCarModels(cars) {
  // ...
}

// 15. Машинуудыг үнийн өсөхөөр эрэмбэлж буцаадаг функц бич.
function sortByPriceAscending(cars) {
  // ...
}

// 16. Engine size нь 2.0-аас их машинуудыг буцаадаг функц бич.
function getLargeEngineCars(cars) {
  // ...
}

// 17. Давхардалгүй брэндийн нэрсийг массив болгон буцаадаг функц бич.
function getUniqueBrands(cars) {
  // ...
}

// 18. Зөвхөн model ба year талбартай шинэ массив үүсгэдэг функц бич.
function getModelAndYearList(cars) {
  // ...
}

// 19. 4.0-с бага fuel efficiency-тай машинуудыг "super efficient" гэж тэмдэглэдэг функц бич.
function tagSuperEfficientCars(cars) {
  // ...
}

// 20. Бүх машинд `id` талбар нэмдэг функц бич (1-с эхэлнэ).
function addIdToCars(cars) {
  // ...
}
