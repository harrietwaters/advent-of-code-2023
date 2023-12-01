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

function getNums(line) {
  const nums = [];
  for (const strNum of Object.keys(strToNum)) {
    let idx = -1;
    let offset = 0;
    while ((idx = line.indexOf(strNum, offset)) >= 0) {
      if (idx >= 0) {
        nums.push({
          idx,
          num: strToNum[strNum],
        });
        // We don't do the full length because one number might end with the final letter of another, e.g. eighthree
        offset = idx + 1;
      }
    }
  }

  for (const [idx, val] of line.split("").entries()) {
    const num = +val;
    if (!Number.isNaN(num)) {
      nums.push({
        line,
        idx,
        num: num,
      });
    }
  }

  return nums.sort((a, b) => a.idx - b.idx);
}

function solveIt() {
  const input = loadFile("./day-1/day-1-input.txt");

  const lines = input.split("\n");

  let sum = 0;
  for (const line of lines) {
    const nums = getNums(line);
    const first = nums[0].num;
    const last = nums[nums.length - 1].num;
    const value = +`${first}${last}`;
    sum += value;
  }
  console.log(sum);
}

solveIt();
