import fs from "node:fs";
import util from "node:util";

//promisify appendFile function
const appendFile = util.promisify(fs.appendFile);

//function to append data to a file.
export default async function fileAppending(filePath, data) {
  console.log("=== appending data ===\n");
  await appendFile(filePath, data);
  console.log("=== data is successfully appended ===");
}
