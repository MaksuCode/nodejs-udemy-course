const fs = require("fs");

// Read and write files syncronously --> Blocking code
const textInput = fs.readFileSync("./txt/input.txt", "utf8");

const textOutput = `This is info about avocado : ${textInput}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOutput);

console.log(`Reading file synchronously : ${textInput}`);

console.log("-------------------------------------------------------");

// Read and write files asynchronously --> Non-blocking code

// ! Callback Hell : Do not use many callbaacks in a row. Instead use promises or Async/Await
fs.readFile("./txt/start.txt", "utf8", (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, "utf8", (err, data2) => {
    console.log(data2);
    fs.readFile("./txt/append.txt", "utf8", (err, data3) => {
      const textOutput = `${data2}\n${data3}`;
      fs.writeFile("./txt/final.txt", textOutput, (err) => {
        console.log("Your file has been written");
      });
    });
  });
});
