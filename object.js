// string
// number
// boolean
// undefined
// null
// object {curly bracket}

let student = {
  surname: "",
  givenName: "Miga",
  age: 16,
  grade: 90,
  gender: "male",
  class: "3a",
};
student.age = 17;
student["age"] = 20;
student.status = "Active";

console.log(student.age);
console.log(student.status);
console.log(student);

let building = {
  name: "",
  floor: 6,
  color: "black",
};
