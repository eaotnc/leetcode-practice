function isPalindrome(x: number): boolean {
  const originalChar = x.toString();
  let reverseChar = "";

  for (let i = originalChar.length - 1; i >= 0; i--) {
    reverseChar = reverseChar.concat(originalChar[i]);
  }

  return originalChar === reverseChar;
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
