import fs from "node:fs";
import util from "node:util";

//promisify readfile function
const readFile = util.promisify(fs.readFile);

//function to read from a file.
async function fileReading(filePath) {
  console.log("=== Reading data ===");
  await readFile(filePath, "utf-8");
  console.log("=== data successfully read ===");
}

export default fileReading;
