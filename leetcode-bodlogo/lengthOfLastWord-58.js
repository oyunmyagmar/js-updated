// leetCode 58
let s = "Hello World";
let s1 = "   fly me   to   the moon  ";
let s2 = "luffy is still joyboy";

// 1-r arga
const lengthOfLastWord = (s) => {
  // 1. find the last word
  // 2. return last word length

  // 1. buh char log hiideg for loop bich
  // 2. if(char !== " ") console.log(char)
  // 3. if(char === " ") return
  let lastWordLength = 0;
  let isFindLastWord = false;
  for (let i = s.length - 1; i >= 0; i--) {
    let char = s[i];
    if (char !== " ") {
      isFindLastWord = true;
      lastWordLength++;
      console.log(s[i]);
    } else {
      if (isFindLastWord) {
        return lastWordLength;
      }
    }
  }
};
const resultLengthOfLastWord = lengthOfLastWord(s);
console.log(resultLengthOfLastWord);

const resultLengthOfLastWord1 = lengthOfLastWord(s1);
console.log(resultLengthOfLastWord1);

const resultLengthOfLastWord2 = lengthOfLastWord(s2);
console.log(resultLengthOfLastWord2);
