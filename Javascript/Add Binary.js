const addBinary = (a, b) => {
  let i = a.length - 1,
    j = b.length - 1;
  let carry = 0;
  let res = "";

  while (i >= 0 || j >= 0 || carry) {
    let sum = carry;
    if (i >= 0) sum += parseInt(a[i]);
    if (j >= 0) sum += parseInt(b[j]);

    res = (sum % 2) + res;
    carry = Math.floor(sum / 2);

    i--;
    j--;
  }

  return res;
};

let a = "11",
  b = "1";
console.log(addBinary(a, b));
