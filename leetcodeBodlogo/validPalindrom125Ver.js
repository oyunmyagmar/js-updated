// leetcode 125 Valid Palindrome

let s = "A man, a plan, a canal: Panama";
let s1 = "race a car";
let s2 = " ";

// 2-r arga

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  let p = 0;
  for (let i = 0; i < s.length; i++) {
    p = s[i];
  }
  return p;
  //   let reversedWord = "";

  //   for (let i = s.length - 1; i >= 0; i--) {

  //     let reversedChar = s[i];
  //     reversedWord += reversedChar;
  //   }
  //   if (s !== reversedWord) {
  //     return false;
  //   } else {
  //     return true;
  //   }

  //   // 90 > s[i].charAtCode(0) > 65;
  //   // 122 > s[i].charAtCode(0) > 97
};
let result = isPalindrome(s);
console.log(result);
