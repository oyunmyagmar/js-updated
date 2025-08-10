let s = "A man, a plan, a canal: Panama";
/**
 * @param {string} s
 * @return {boolean}
 */

const isPalindrome = function (s) {
  let palindrome = "";
  for (let i = 0; i < s.length; i++) {
    if (65 <= s[i].charCodeAt() <= 90 && 97 <= s[i].charCodeAt() <= 122) {
      palindrome = palindrome + s[i];
    }
  }
  return palindrome;
};
const result = isPalindrome(s);
console.log(result);
