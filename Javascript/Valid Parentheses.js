function validParentheses(s) {
  const parentheses = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.pop() !== parentheses[char]) {
        return false;
      }
    }
  }

  return true;
}

let str = "()";
console.log(validParentheses(str));
