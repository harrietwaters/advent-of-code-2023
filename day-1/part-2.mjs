import { loadFile } from "../helpers/loadFile.mjs";

const strToNum = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function getFirstNum(line) {
  let firstIdx = Number.MAX_SAFE_INTEGER;
  let firstNum = -1;
  for (const strNum of Object.keys(strToNum)) {
    const idx = line.indexOf(strNum);
    if (idx >= 0 && idx < firstIdx) {
      firstIdx = idx;
      firstNum = strToNum[strNum];
    }
  }

  for (const [idx, val] of line.split("").entries()) {
    const num = +val;
    if (!Number.isNaN(num)) {
      if (idx < firstIdx) {
        firstIdx = idx;
        firstNum = num;
      }
    }
  }
  return firstNum;
}

function getLastNum(line) {
  let lastIdx = -1;
  let lastNum = -1;
  for (const strNum of Object.keys(strToNum)) {
    const idx = line.lastIndexOf(strNum);
    if (idx > lastIdx) {
      lastIdx = idx;
      lastNum = strToNum[strNum];
    }
  }

  for (const [idx, val] of line.split("").entries()) {
    const num = +val;
    if (!Number.isNaN(num)) {
      if (idx > lastIdx) {
        lastIdx = idx;
        lastNum = num;
      }
    }
  }
  return lastNum;
}

function solveIt() {
  const input = loadFile("./day-1/day-1-input.txt");

  const lines = input.split("\n");

  let sum = 0;
  let debug = [];
  for (const line of lines) {
    const first = getFirstNum(line);
    const last = getLastNum(line);
    const value = +`${first}${last}`;
    debug.push({
      line,
      first,
      last,
      value,
    });
    sum += value;
  }
  console.table(debug);

  console.log(sum);
}

solveIt();
