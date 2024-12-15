function simplePyramid(line: number) {
  for (let i = 0; i < line; i++) {
    for (let j = 0; j < i + 1; j++) {
      process.stdout.write(`* `);
    }
    console.log("\n");
  }
}

function filppedInvertedPyramid(line: number) {
  for (let i = 0; i < line; i++) {
    for (let j = 0; j < line; j++) {
      if (j >= i) {
        process.stdout.write(`* `);
      } else {
        process.stdout.write(`  `);
      }
    }
    console.log("\n");
  }
}

function triangle(line: number) {
  console.log("\n");
  for (let i = 0; i < line; i++) {
    for (let j = 0; j < line + i; j++) {
      if (line - 1 - i <= j) {
        process.stdout.write(`* `);
      } else {
        process.stdout.write(`  `);
      }
    }
    console.log("\n");
  }
}
console.log(triangle(4));

function invertPyramid(line: number) {
  for (let i = 0; i < line; i++) {
    for (let j = 0; j < line; j++) {
      if (line - i > j) {
        process.stdout.write(`* `);
      } else {
        process.stdout.write(`  `);
      }
    }
    console.log("\n");
  }
}
// console.log(invertPyramid(3));

function FlippedPyramid(line: number) {
  for (let i = 0; i < line; i++) {
    for (let j = 0; j < line; j++) {
      if (line - 1 - i <= j) {
        process.stdout.write(`* `);
      } else {
        process.stdout.write(`  `);
      }
    }
    console.log("\n");
  }
}
// console.log(FlippedPyramid(4));
