// Reading and writing to a file asynchronously
const fs = require("node:fs");

let message = "Hi there, my name is Lenox 👋 \nA back-end software developer";
let messageAppend = ", proficient in node.js";

// Reading a file
fs.readFile("./Files/data-asynch.txt", "utf-8", (err, data) => {
  console.log(data);

  //writing a message on a file.
  fs.writeFile("./Files/new-asynch.txt", message, () => {
    console.log("\nwriting a file ... ... file successfully written");

    //reading a file after being written.
    fs.readFile("./Files/new-asynch.txt", "utf-8", (err1, data1) => {
      console.log(data1);

      //appending a message to file.
      fs.appendFile(
        "./Files/new-asynch.txt",
        messageAppend,
        "utf-8",
        (err2) => {
          console.log(
            "\nappending a message ... ... message successfully appended"
          );

          //reading the file with the appended message.
          fs.readFile("./Files/new-asynch.txt", "utf-8", (err3, data3) => {
            console.log(data3);
          });
        }
      );
    });
  });
});
