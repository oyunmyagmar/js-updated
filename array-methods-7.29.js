let ages = [10, 203, 40, 30, 50];

console.log("array.length");
console.log(ages.length);

console.log("array.toString()");
console.log(ages);
console.log(ages.toString()); // array dotorh element-iig string bolgod ,-aar tusgarlaj gargasan
const stringArr = ages.toString(); // array.toString() ni string huvilbariig avch stringArr gsen huvisagch -ruu hiij bn, uuriig ni uurchluhgui bn
console.log(stringArr);
console.log(ages); // ages maani array heveeree bn, uurchlugduugui

console.log("array.pop()");
console.log(ages.pop()); // hamgiin suuliin element -iig gargadag, gargasan element -ee haruulna
console.log(ages); // array.pop() ni array -g uuriig ni uurchildug
const poppedElement = ages.pop();
console.log(poppedElement); // suuliin element-iig gargasan
console.log(ages); // array of ages -iin element uurchlugdsun

console.log("array.push()");
ages.push(poppedElement); // array.pop() element gargaj bsn bol array.push() ni tugsguld element nemj hiine
ages.push(poppedElement); // push dotroo yug push gej nemehee hiij ugnu
console.log(ages); // 2 udaa bichsen uchraas 2 udaa nemj avch bga, tugsguld ni nemj bn
ages.push(500); // array.push() ni array -g uuriig ni uurchildug
console.log(ages); // array of ages -iin element uurchlugdsun
// zarim array method array-g uurchluhgui, zgr uur huvilbariig ni ugnu, tuuniig ashiglana
// zarim array method array uuriig ni uurchlunu

console.log("array.shift()");
console.log(ages.shift()); // urd talaas ni 1 element -iig ni avsan, gargasan element -ee haruulna
console.log(ages); //array.shift() ni array -g uuriig ni uurchildug

console.log("array.unshift()");
ages.unshift(100); // urd tald ni 1 element nemne, nemeh element -ee bichij oruulna
console.log(ages); //array.unshift() ni array -g uuriig ni uurchildug

console.log("array.length-eer element nemeh");
ages[ages.length] = 3000;
console.log(ages);
console.log("array.splice");
ages.splice(0, 1);
console.log(ages);
console.log("array.slice");
ages.slice(0, 2);
console.log(ages);

//array-iin araas . taviad function bichij bgaa, zarim function utga avdag bga
