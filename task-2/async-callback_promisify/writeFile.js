import fs from "node:fs";
import util from "node:util";

//promisify a writeFile function
const writeFile = util.promisify(fs.writeFile);

//function to write to a file.
export default async function fileWriting(filePath, data) {
  console.log("=== writing data ===");
  await writeFile(filePath, data);
  console.log("=== data successfully written");
}
