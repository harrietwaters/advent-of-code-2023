import { loadFile } from "../helpers/loadFile.mjs";

function solveIt() {
  const input = loadFile("./day-1/day-1-input.txt");
  const lines = input.split("\n").map((line) =>
    line
      .split("")
      .map((str) => +str)
      .filter((num) => !Number.isNaN(num))
  );

  let sum = 0;
  for (const nums of lines) {
    const first = nums[0];
    const last = nums[nums.length - 1];
    const value = +`${first}${last}`;
    console.log(
      `First is ${first} and last is ${last} so value is ${first}${last}`
    );
    sum += value;
  }

  console.log(sum);
}

solveIt();
