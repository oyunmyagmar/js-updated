let a = 10;
let b = 20;

// hervee
// if dotor boolean bh yostoi
// 1 bol unen, 1 bol hudlaa gsen utga bh yostoi
// () haaltand conditon bichdeg
// if() {} ged ehnii {} haaltad hervee ter nuhtsul unen bval garah uildliig hiine
// else buyu hudlaa bval else -iin ariin haaltad {} hudlaa ued garah uildliig hiine
if (a > b) {
  console.log("a ni b-ees ih");
} else {
  console.log("a ni b-ees baga");
}

// define age variable then check if s/he is allowed to drink beer or not
// console.log "She is allowed to drink beer" or "She is not allowed to drink beer"
let agelimit = 21;
let herAge = 22;

if (herAge >= agelimit) {
  console.log("She is allowed to drink beer");
} else {
  console.log("She is not allowed to drink beer");
}

// 1. define num1, num2 variables and console.log biggest number
let num1 = 200;
let num2 = 43;

if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}

// 2. num3 gsen huvisagch zarlaad utga ug,
// num3 eyreg esvel sorog bolhiig helsen console.log bich
let num3 = -100;

if (num3 < 0) {
  console.log("surug");
} else {
  console.log("eyreg");
}

// 18 nastai esehiig todorhoildog console.log bich
// = -> bval uildel myAge huvisagchiig 18 bolgoj bga uildel
// == -> bval asult bolno <- minii nas 18-tai tentsu yu?
// if (dotor uildel bish asuult bh yostoi)
let myAge = 20;
if (myAge == 18) {
  console.log("yes, I am 18 years old");
} else {
  console.log("no, I am not 18 years old");
}

// neg huvisagch zarlana, utga ogno
// tuhain huvisagch dahi utga tegsh esvel sondgoi bolhiig todorhoilson console.log hevleh code bich
let num4 = 7;
if (num4 % 2 == 1) {
  console.log("sondgoi");
} else {
  console.log("tegsh");
}

// neg huvisagch zarlaad tuhain huvisagch 7d huvaagddag esehiig oloh code bich
let num5 = 14;
if (num5 % 7 == 0) {
  console.log("7-d huvagddag");
} else {
  console.log("7-d huvagddaggui");
}
