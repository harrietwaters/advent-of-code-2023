import { loadFile } from "../helpers/loadFile.mjs";

function solveIt() {
  const input = loadFile("./day-2/day-2-input.txt");

  const max = {
    red: 12,
    green: 13,
    blue: 14,
  };

  const counts = input.split("\n").map((line) =>
    line.split(" ").reduce(
      (acc, curr, i, arr) => {
        switch (curr.replace(/:|;|,/g, "")) {
          case "Game":
            acc.id = +arr[i + 1].replace(":", "");
            break;
          case "blue":
            acc.blue = Math.max(acc.blue, +arr[i - 1]);
            break;
          case "red":
            acc.red = Math.max(acc.red, +arr[i - 1]);
            break;
          case "green":
            acc.green = Math.max(acc.green, +arr[i - 1]);
            break;
        }
        acc.power = acc.red * acc.blue * acc.green;
        return acc;
      },
      { id: -1, red: 1, green: 1, blue: 1, power: -1 }
    )
  );

  const result = counts.reduce((acc, curr) => acc + curr.power, 0);

  console.dir(result);
}

solveIt();
