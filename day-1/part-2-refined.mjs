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

  const sum = input
    // Remove remaining character
    .replace(/[a-z]/gm, "")
    // Grab first and last digits
    .replace(/(\d).*(\d)/gm, "$1$2")
    // If there's only one digit, duplicate it
    .replace(/^(\d)$/gm, "$1$1")
    .split("\n")
    // Sum it up, baby
    .reduce((acc, curr) => acc + Number(curr), 0);

  console.log(sum);
}

solveIt();
