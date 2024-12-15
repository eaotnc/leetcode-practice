export function square(n: number) {
  console.log("\n");
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      process.stdout.write("*  ");
    }
    console.log("\n");
  }
}

console.log(square(5));

function box(n: number) {
  console.log("\n");
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
        process.stdout.write(`${i}${j} `);
      } else {
        process.stdout.write("-- ");
      }
    }
    console.log("\n");
  }
}

console.log(box(6));
