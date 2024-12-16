function strStr(haystack: string, needle: string): number {
  let windowSize = needle.length;
  let foundIndex = -1;

  if (haystack.length === 1 && needle.length === 1) {
    return haystack === needle ? 0 : -1;
  }

  for (let i = 0; i <= haystack.length - windowSize; i++) {
    if (needle === haystack.slice(i, i + windowSize)) {
      foundIndex = i;
      break;
    }
  }
  return foundIndex;
}

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("sadbutsad", "dbut"));
console.log(strStr("a", "a"));
console.log(strStr("abc", "c"));
