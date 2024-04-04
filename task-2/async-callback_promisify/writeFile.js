import fs from "node:fs";
import util from "node:util";

const writeFile = util.promisify(fs.writeFile);

export default async function fileWriting(filePath, data) {
  console.log("=== writing data ===");
  await writeFile(filePath, data);
  console.log("=== data successfully written");
}
