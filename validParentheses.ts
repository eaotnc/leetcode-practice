function oppositeChar(char: string): string {
  if (char === "[") return "]";
  if (char === "(") return ")";
  if (char === "{") return "}";
  return "";
}

function isValid(s: string): boolean {
  let stack: string[] = [];

  if (s.length % 2 === 1) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      stack.push(s.charAt(i));
      continue;
    }
    if (oppositeChar(stack[stack.length - 1]) === s.charAt(i)) {
      stack.pop();
    } else {
      stack.push(s.charAt(i));
    }
  }

  return stack.length === 0;
}

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); //  true
console.log(isValid("(]")); // false
console.log(isValid("([])")); // true
