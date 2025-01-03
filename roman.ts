function romanToInt(s: string): number {
  const romanNumber = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  let previousResult = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i + 1] && romanNumber[s[i + 1]] > romanNumber[s[i]]) {
      result = result + romanNumber[s[i + 1]] - romanNumber[s[i]];
      i++;
    } else {
      result = result + romanNumber[s[i]];
    }
    previousResult = romanNumber[s[i]];
  }
  return result;
}

console.log(romanToInt("III")); // true
console.log(romanToInt("LVIII")); // 58

console.log(romanToInt("MCMXCIV")); // 1994
