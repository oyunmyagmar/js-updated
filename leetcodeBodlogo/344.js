let s = ["h", "e", "l", "l", "o"];

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  for (let i = s.length - 1; i >= 0; i--) {
    s[i];
    console.log(s[i]);
  }
};
let result = reverseString(s);
console.log(result);
