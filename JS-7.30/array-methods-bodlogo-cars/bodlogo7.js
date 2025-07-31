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

// 7. Машины түлш зарцуулалтаар fuelEfficiency талбарт `efficient: true/false` нэмдэг функц бич (5.0-аас бага бол efficient).

// option 1
function addEfficiencyFlag(cars) {
  cars.map((car) => {
    if (car.fuelEfficiency < 5) {
      car.efficient = true;
    } else {
      car.efficient = false;
    }
  });
  return cars;
}
const resultCarsWithEfficiencyFlag = addEfficiencyFlag(cars);
console.log(
  "7. Cars With Efficiency Flag Added: ",
  resultCarsWithEfficiencyFlag
);

// fuelEfficiency talbart toonii orond `efficient: true/false` gj nemeh geheer umnuh utgaa darah blohoor deerh argar bodohod bolno

// option 2 -> ???carsWithEfficiencyFlagAdded ged huvisagch zarlad return hiiiher undefined gj garch irj bga???
function addEfficiencyFlag1(cars) {
  let carsWithEfficiencyFlagAdded = cars.map((car) => {
    if (car.fuelEfficiency < 5) {
      car.efficient = true;
    } else {
      car.efficient = false;
    }
  });
  return carsWithEfficiencyFlagAdded;
}
const resultCarsWithEfficiencyFlag1 = addEfficiencyFlag1(cars);
console.log(
  "7. Cars With Efficiency Flag Added1: ",
  resultCarsWithEfficiencyFlag1
);

// option 3 -> ???carsWithEfficiencyFlagAdded huvisagch avaad return hiiher nolj bga???
function addEfficiencyFlag2(cars) {
  let carsWithEfficiencyFlagAdded = cars.map((car) => {
    if (car.fuelEfficiency < 5) {
      car.efficient = true;
    } else {
      car.efficient = false;
    }
    return car;
  });
  return carsWithEfficiencyFlagAdded;
}
const resultCarsWithEfficiencyFlag2 = addEfficiencyFlag2(cars);
console.log("7. Car Efficiency Flag Added2: ", resultCarsWithEfficiencyFlag2);
