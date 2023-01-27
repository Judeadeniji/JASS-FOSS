#!/usr/bin/env node

const readline = require("readline");
const fs = require("fs");
const Jass = require("../src/jass");
const figlet = require("figlet");
const path = require("path");
const args = process.argv.slice(2);
const minimist = require("minimist")(args);
const build = (input, out) => {
  import("ora").then((ora) => {
    var start = performance.now();

    // code to start the application

    const inputFile = path.resolve(process.cwd(), input);

    const spinner = ora.default("Compiling").start();
    // code to start the application
    Jass.createCss(input, out);

    spinner.succeed(`Packing and saving to ${out}`);

    // when the processing is done
    var end = performance.now();
    spinner.succeed(`Compiled in ${(end - start) / 1000}s`);

    spinner.stop();
  });
};

// check for help option
if (minimist.h || minimist.help) {
  console.log("Welcome to Jass, the CSS preprocessor written in JavaScript");
  console.log("To start the CLI, run 'jass start' in your terminal");
  console.log("Available commands:");
  console.log("-i [file input]: specify the input file path");
  console.log("-o [file output]: specify the output file path");
  console.log("-h or --help: show this help message");
  console.log(
    "For more information and examples, please visit the Jass GitHub repository at https://github.com/Judeadeniji/jass-foss"
  );
  console.log("Thank you for using Jass!");

  process.exit(1);
}

// print the version
if (minimist.v || minimist.version) {
  console.log("v1.1.0");
}

if (args[0] === "start") {
  // code to start the application
  figlet.text("Jass", { font: "Banner3" }, function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
  console.log(
    "\n\nWelcome to Jass! The ultimate CSS preprocessor written in JavaScript. Let's get started by compiling your stylesheets.\n\n"
  );

  console.log("Enter the input file path or 'q' to exit:\n");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("", (inputFile) => {
    if (inputFile === "q") {
      console.log("Exiting the application...");
      process.exit(1);
    } else {
      const i = path.resolve(process.cwd(), inputFile);
      console.log("Enter the output file path or 'q' to exit:\n");
      rl.question("", (outputFile) => {
        if (outputFile === "q") {
          console.log("Exiting the application...");
          process.exit(1);
        } else {
          build(i, outputFile);
          console.log(
            `Your input file has been converted and saved to ${outputFile}`
          );
          console.log("Exiting the application...");
          rl.close();
        }
      });
    }
  });
} else if (minimist._[0] === "build") {
  if (!minimist.i || !minimist.o) {
    console.log("usage: jass build -i [file input] -o [file output]");
    process.exit(1);
  }

  const input = path.resolve(process.cwd(), minimist.i);
  build(input, minimist.o);
} else if (minimist._[0] === "stop") {
  process.exit(1);
} else {
  console.log("Invalid command. Usage: jass [start|build|help]");
  process.exit(1);
}
