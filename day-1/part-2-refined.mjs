import { loadFile } from "../helpers/loadFile.mjs";

const numbersThatCanTouch = {
  oneight: "18",
  twone: "21",
  threeight: "38",
  fiveight: "58",
  sevenine: "79",
  eightwo: "82",
  eighthree: "83",
  nineight: "98",
};

const strToNum = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

function solveIt() {
  let input = loadFile("./day-1/day-1-input.txt");

  // Fix any string numbers that overlap
  for (const [search, replace] of Object.entries(numbersThatCanTouch)) {
    input = input.replace(new RegExp(search, "g"), replace);
  }

  // Turn all string numbers into number numbers
  for (const [search, replace] of Object.entries(strToNum)) {
    input = input.replace(new RegExp(search, "g"), replace);
  }

  // Get rid of the remaining strings
  input = input.replace(/[a-z]/g, "");

  const lines = input
    .split("\n")
    .map((line) => line.split("").map((str) => +str));

  let sum = 0;
  for (const nums of lines) {
    const first = nums[0];
    const last = nums[nums.length - 1];
    const value = +`${first}${last}`;
    sum += value;
  }
  console.log(sum);
}

solveIt();
