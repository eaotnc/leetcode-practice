console.log("test 1");
console.log("xxxxxxxxxxx");
const lengthOfLongestSubstring = (s: string): number => {
  let tempC = "";
  let max = 0;
  let localMax = 0;
  let char = "";

  if (s.length === 1) {
    return 1;
  }

  for (let i = 0; i < s.length; i++) {
    char = s[i];
    if (tempC.includes(char) === false) {
      tempC = tempC.concat("", char);
      localMax = tempC.length;
    } else {
      tempC = char;
      localMax = 0;
    }
    if (localMax > max) max = localMax;
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb")); //3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("au")); //2
