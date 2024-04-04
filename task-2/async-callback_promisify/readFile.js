import fs from "node:fs";
import util from "node:util";

const readFile = util.promisify(fs.readFile);

async function fileReading(filePath) {
  console.log("=== Reading data ===");
  await readFile(filePath, "utf-8");
  console.log("=== data successfully read ===");
}

export default fileReading;
