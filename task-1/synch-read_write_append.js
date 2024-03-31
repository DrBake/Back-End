// Reading and writing to a file synchronously
const fs = require("fs");

// Reading a file
let dataIn = fs.readFileSync("./Files/data-synch.txt", "utf-8");

let message = "Hi there, my name is Lenox 👋";
let messageAppend = "\nMy name is Lenox 👋";

// check if there is data in the file
if (!dataIn) {
  // Writing a file
  fs.writeFileSync("./Files/data-synch.txt", message);
} else {
  // Appending a message to the file
  fs.appendFileSync("./Files/data-synch.txt", messageAppend, "utf-8");
}
