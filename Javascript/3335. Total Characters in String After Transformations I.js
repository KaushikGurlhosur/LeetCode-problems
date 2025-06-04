// const CharTransformation = (s, t) => {
//   const MOD = 1e9 + 7;
//   let current = s;

//   for (let i = 0; i < t; i++) {
//     let next = "";
//     for (const char of current) {
//       if (char === "z") {
//         next += "ab";
//       } else {
//         next += String.fromCharCode(char.charCodeAt(0) + 1);
//       }
//     }
//     current = next;
//   }
//   return current.length % MOD;
// };

// console.log(CharTransformation("abcyy", 2));
