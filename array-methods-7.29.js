let ages = [10, 203, 40, 30, 50];
console.log(ages.length);

console.log(ages);
console.log(ages.toString()); // array dotorh element-iig string bolgoh
const stringArr = ages.toString();
console.log(stringArr);
console.log(ages);

const poppedElement = ages.pop();
console.log(poppedElement); // suuliin element-iig gargaj hassan
console.log(ages);

ages.push(poppedElement); // push dotroo yug push gej nemehee hiij ugnu
ages.push(poppedElement);
console.log(ages); // 2 udaa bichsen uchraas 2 udaa garch irj bga, tugsguld ni nemj bn

ages.push(500);
console.log(ages);
// zarim array method array-iig uurchluhgui, zgr uur huvilbariig ni ugnu, tuuniig ashiglana
// zarim array method array uuriig ni uurchlunu

ages.shift(); // urd talaas ni 1-iig ni avch hassan
console.log(ages);

//array-iin araas . taviad function bichij bgaa, zarim function utga avdag bga
