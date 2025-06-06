// Converting to string and reversing

function Palindrome1(num) {
  const str = num.toString();
  return str === str.split("").reverse().join("");
}

console.log(Palindrome1(121));

// To Pointer String Comparision

function Palindrome2(num) {
  const str = num.toString();
  let left = 0,
    right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    console.log(left, right);
    console.log(str[left], str[right]);
    left++;
    right--;
  }
  return true;
}

console.log(Palindrome2(1231));
