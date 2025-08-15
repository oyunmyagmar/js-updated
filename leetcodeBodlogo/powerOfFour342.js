let n = 16;

// let isPowerOfFour = (n) => {
//   n = n / 4;
//   if (n !== 1) return false;
//   isPowerOfFour(n - 1);

let isPowerOfFour = (n) => {
  n = n / 4;
  if (n < 1) {
    return false;
  } else {
    isPowerOfFour(n - 1);
  }
};
console.log(isPowerOfFour(n));

// let isPowerOfFour = (n) => {
//   for (let i = n; i > 1; i--) {
//     if (n % 4 == 0 && n / 4 == 1) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// };
// isPowerOfFour(n);
