// ugugdliin turul:
// string ""
// number
// boolean
// undefined
// null
// NaN
// object {}
// array []

let grades = [-20, -10, 50, 25, 45, -35, 100, -98, 90];
let grades2 = [-20, -10, 5, 100, 0];

// let shalgalt1 = -20; // geed 1 burchilen bichij bolno
// let shalgalt2 = -10; // gehdee 200 shalgalt ugvul yah ve?
// let shalgalt3 = 50;
// let shalgalt4 = 25;
// let shalgalt5 = 45;

// [] -aar heddeh element-ruu nevtermeer bgaga ilerhilne
console.log("grades[3]: ", grades[3]);
// computer 0 -ees ehelj tooldog uchir 4 deh too ni console.log der garna

// avg -iig yaj oloh ve?
// let sum = grades[0] + grades[1] + grades[2] + grades[3];
// let average = sum / 4;
// deed hesgiig niiluulj bichvel doorh bolno
let avg = (grades[0] + grades[1] + grades[2] + grades[3]) / 4;
// !Ankhaar! ( ) ene haaltnii umnu ner ugvul function bolno
console.log("average of grades = ", avg);

// 100 shalgalt bol yah ve?
// davtalt yavagdaj bn
// neg toond ni nuguu toog nemed yavad bgaga davtaltar hiie

let sum = 0; // for loop dotor zarlaval loop irgeed let sum = 0 bolno
console.log("grades.length = ", grades.length); // array dotor ni heden element bgag toolj ugdug
for (i = 0; i < grades.length; i++) {
  sum = sum + grades[i];
}
console.log("sum = ", sum);
let average = sum / grades.length;
console.log("average = ", average);

// odoo findAvg function bichvel

function findAvg(arr) {
  // grades -iig dotor ni orj irenguut arr nertei huvisagch bolgood avch bn
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  let average = sum / arr.length;
  return average; // tootsoolson zuilee butsaana
}
// butsahdaa huvisagch zarlaj barij avna
let resultAverageGrade = findAvg(grades); // function -g duudahgui bol ajillahgui // grades huvisagchaa function -ruu ugch yavulsan
console.log("Average Grade =", resultAverageGrade); // barij avsan zuilee harahiin tuld console.log hevlene

// grades2 -iin avgGrade yaj oloh ve?
let result2AverageGrade = findAvg(grades2);
console.log("Average Grade Of Student2 = ", result2AverageGrade);

// function -nd ner uguhduu yug hiij chdah ve gedgeer ner ugvul daraa ni ashiglahad amar
