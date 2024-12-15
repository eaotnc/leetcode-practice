function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  }
  if (strs.length === 1) {
    return strs[0];
  }

  let commonPrefix = "";
  let temp = "";

  for (let i = 0; i <= strs[0].length; i++) {
    if (
      strs.every((item) => item.substring(0, i) === strs[0].substring(0, i))
    ) {
      commonPrefix = strs[0].substring(0, i);
    }
    // for (let j = 0; j < strs.length; j++) {
    //   if (strs[i].includes(strs[0].slice(0, i))) {

    //   }
    // }
  }
  return commonPrefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // fl
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix(["flower", "flow"])); // flow
console.log(longestCommonPrefix(["a"])); // a
console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"])); //flower
console.log(longestCommonPrefix(["a", "b"])); // a
console.log(longestCommonPrefix(["c", "acc", "ccc"])); // c
