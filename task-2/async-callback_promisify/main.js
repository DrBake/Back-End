import path from "node:path";
import fileReading from "./readFile.js";
import fileAppending from "./appendFile.js";
// import fileWriting from "./writeFile.js";

import { fileURLToPath } from "url";
import { dirname } from "path";
import fileWriting from "./writeFile.js";

//obtain directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//data to append or write
const dataToAppend =
  "\nI am Lenox👋, \nYou can challenge me to a game of chess.♟️";
const dataToWrite =
  "Hey there.👋 \nI am Lenox. \nI am a backend software dev 👨‍💻 who also likes playing chess.♟️";

// file paths to read, append and write files
const filePathRead = path.resolve(__dirname, "Files", "readThis.txt");
const filePathAppend = path.resolve(__dirname, "Files", "appendThis.txt");
const filePathWrite = path.resolve(__dirname, "Files", "writeThis.txt");

//read append write async function
async function readAppendWrite() {
  try {
    const fileRead = await fileReading(filePathRead);
    console.log(fileRead);

    const fileAppend = await fileAppending(filePathAppend, dataToAppend);
    console.log(fileAppend);

    const fileWrite = await fileWriting(filePathWrite, dataToWrite);
    console.log(fileWrite);
  } catch (err) {
    console.log("Error: ", err);
  }
}

readAppendWrite();
