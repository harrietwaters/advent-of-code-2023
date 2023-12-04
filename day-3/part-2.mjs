import { loadFile } from "../helpers/loadFile.mjs";

function isGear(maybeGear) {
  return maybeGear === "*";
}

function isPeriod(maybePeriod) {
  return maybePeriod === ".";
}

function isNum(maybeNum) {
  return Number.isInteger(+maybeNum);
}

function getNumber(x, row) {
  let ptr = x;
  for (; ptr > 0; ptr--) {
    if (!isNum(row[ptr - 1])) break;
  }

  let num = "";
  for (; ptr < row.length; ptr++) {
    if (!isNum(row[ptr])) break;
    num += row[ptr];
  }
  return [+num, ptr];
}

function getGearRatio(y, x, grid) {
  const mods = [-1, 0, 1];
  const numbersAndEnds = new Set();
  for (const modY of mods) {
    if (grid[y + modY] == null) continue;

    for (const modX of mods) {
      const value = grid[y + modY][x + modX];
      if (value == null) {
        continue;
      }
      if (isNum(value)) {
        const [number, end] = getNumber(x + modX, grid[y + modY]);
        numbersAndEnds.add(`${number},${end}`);
      }
    }
  }
  if (numbersAndEnds.size < 2) return 0;
  const [a, b] = Array.from(numbersAndEnds, (x) => x.split(",")[0]);
  return +a * +b;
}

function solveIt() {
  const input = loadFile("./day-3/day-3-input.txt");
  const grid = input.split("\n").map((line) => line.split(""));
  let sum = 0;

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      const value = grid[y][x];
      if (isGear(value)) {
        const gearRatio = getGearRatio(y, x, grid);
        sum += gearRatio;
      }
    }
  }

  console.log(`Sum -\t${sum}`);
}

solveIt();
