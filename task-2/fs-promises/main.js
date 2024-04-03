import path from "node:path";
import fileReading from "./readFile.js";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.resolve(__dirname, "Files", "readThis.txt");

fileReading(filePath)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
