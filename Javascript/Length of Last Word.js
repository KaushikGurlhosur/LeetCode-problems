const lengthOfLastWord = () => {
  //   let strArr = s.trim(" ").split(" ");
  //   return strArr[strArr.length - 1].length;

  // Another way

  let length = 0;
  let i = s.length - 1;

  while (i >= 0 && s[i] === " ") i--;

  while (i >= 0 && s[i] !== " ") {
    length++;
    i--;
  }
  return length;
};

let s = " Hello World ";

console.log(lengthOfLastWord(s));
