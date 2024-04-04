import fs from "node:fs";
import util from "node:util";

const appendFile = util.promisify(fs.appendFile);

export default async function fileAppending(filePath, data) {
  console.log("=== appending data ===\n");
  await appendFile(filePath, data);
  console.log("=== data is successfully appended ===");
}
