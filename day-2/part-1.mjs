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
        return acc;
      },
      { id: -1, red: 0, green: 0, blue: 0 }
    )
  );

  const valid = counts.filter((count) => {
    return (
      count.red <= max.red && count.blue <= max.blue && count.green <= max.green
    );
  });

  const result = valid.reduce((acc, curr) => acc + curr.id, 0);

  console.dir(result);
}

solveIt();
