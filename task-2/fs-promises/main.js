const path = require("node:path");
const fileReading = require("./readFile.js");
const fileAppending = require("./appendFile.js");
const fileWriting = require("./writeFile.js");

//data to append or write
const dataToAppend =
  "\nI am Lenox, \nYou can challenge me to a game of chess.♟️";
const dataToWrite =
  "Hey there.👋 \nI am Lenox. \nI am a backend software dev 👨‍💻 who also likes playing chess.♟️";

// file paths to read, append and write files
const filePathRead = path.resolve(__dirname, "Files", "readThis.txt");
const filePathAppend = path.resolve(__dirname, "Files", "appendThis.txt");
const filePathWrite = path.resolve(__dirname, "Files", "writeThis.txt");

//function to read, write and append data to a file
async function readWriteAppend() {
  try {
    const read = await fileReading(filePathRead);
    console.log(read);

    const write = await fileWriting(filePathWrite, dataToWrite);
    console.log(write);

    const append = await fileAppending(filePathAppend, dataToAppend);
    console.log(append);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("PROCESS COMPLETED");
  }
}

readWriteAppend();
