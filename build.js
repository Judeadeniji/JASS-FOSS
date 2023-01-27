const readline = require("readline");
const fs = require("fs");
const Jass = require("./src/jass");
const figlet = require("figlet");

figlet.text(
  "\nJass\n",
  {
    font: "Banner3",
    horizontalLayout: "default",
    verticalLayout: "default",
  },
  function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  }
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to Just another StyleSheet\n");

console.log("\n v1.1.0");
/*
const linter = (path) => {
  const { spawn } = require("child_process");

  const lint = spawn(``, []);

  lint.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  lint.stderr.on("data", (data) => {
    console.log(`stderr: ${data}`);
  });

  lint.on("error", (error) => {
    console.log(`error: ${error.message}`);
  });

  lint.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
};
*/
rl.question("Enter the input file path: ", (inputFile) => {
   // linter(inputFile);
  rl.question("Enter the output file path: ", (outputFile) => {
    Jass.createCss(inputFile, outputFile);
    rl.close();
  });
});
