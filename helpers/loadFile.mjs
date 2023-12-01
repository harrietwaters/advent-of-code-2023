import { readFile, readFileSync } from "fs";
export function loadFile(path) {
  const buff = readFileSync(path);
  return buff.toString();
}
