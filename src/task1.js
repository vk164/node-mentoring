import { EOL } from "os";

const reverseInput = (input) => {
  process.stdout.write(`${input.reverse()}${EOL}`);
};

process.stdin.on("data", reverseInput);