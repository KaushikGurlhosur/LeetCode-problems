function strStr(haystack, needle) {
  //   return haystack.indexOf(needle);

  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return i;
    }
  }
  return -1;
}

let haystack = "sadbutsad",
  needle = "sad";

console.log(strStr(haystack, needle));
