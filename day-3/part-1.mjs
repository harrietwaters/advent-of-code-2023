import { loadFile } from "../helpers/loadFile.mjs";

function isPeriod(maybePeriod) {
  return maybePeriod === ".";
}

function isNum(maybeNum) {
  return Number.isInteger(+maybeNum);
}

function isSymbol(maybeSymbol) {
  const notPeriod = !isPeriod(maybeSymbol);
  const notNum = !isNum(maybeSymbol);
  return notPeriod && notNum;
}

function searchSymbol(y, x, grid) {
  const mods = [-1, 0, 1];
  for (const modY of mods) {
    if (grid[y + modY] == null) continue;

    for (const modX of mods) {
      const value = grid[y + modY][x + modX];
      if (value == null) continue;
      if (isSymbol(value)) return true;
    }
  }
  return false;
}

function solveIt() {
  const input = loadFile("./day-3/day-3-input.txt");
  const grid = input.split("\n").map((line) => line.split(""));
  const validPartNums = [];
  const invalidPartNums = [];
  let sum = 0;

  for (let y = 0; y < grid.length; y++) {
    let partNum = 0;
    let hasSymbol = false;
    for (let x = 0; x < grid[y].length; x++) {
      const value = +grid[y][x];
      if (isNum(value)) {
        partNum = partNum * 10 + value;
        if (!hasSymbol) hasSymbol = searchSymbol(y, x, grid);
      }
      if ((!isNum(value) && partNum > 0) || x === grid[y].length - 1) {
        if (hasSymbol) {
          validPartNums.push(partNum);
          sum += partNum;
        } else {
          invalidPartNums.push(partNum);
        }
        partNum = 0;
        hasSymbol = false;
      }
    }
  }

  //   console.dir(validPartNums);
  //   const result = Array.from(new Set(validPartNums)).reduce(
  //     (acc, curr) => acc + curr,
  //     0
  //   );
  //   const result = validPartNums.reduce((acc, curr) => acc + curr, 0);
  const result = Array.from(new Set(validPartNums)).reduce(
    (acc, curr) => acc + curr,
    0
  );
  console.log(`With set -\t${result}`);
  console.log(`Without set -\t${sum}`);
}

solveIt();
