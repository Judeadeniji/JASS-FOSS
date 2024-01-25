#!/usr/bin/env node

import * as readline from "readline";
import * as path from "path";
import { performance } from "perf_hooks";
import figlet from "figlet";
import * as Jass from "../jass";

const args = process.argv.slice(2);
const minimist = require("minimist")(args);

const build = async (input, out) => {
  const ora = await import('ora');
  const spinner = ora.default("Transforming JavaScript Objects into sleek CSS styles... hold on tight! 🚀").start();

  try {
    const start = performance.now();
    const res = Jass.createCss(input, out);
    const end = performance.now();

    if (res !== "error") {
      spinner.succeed("Objects transformed into elegant CSS styles... Almost done! 🎨");
      spinner.succeed("Ahoy! CSS compilation complete, hoisting the colors! 🌈");
      spinner.succeed(`CSS is in! Check out ${path.relative(process.cwd(), out)} 🚢`);
      spinner.succeed(`CSS compilation Successful, Compiled in ${((end - start) / 1000).toFixed(2)}s ⏱️`);

    } else {
      console.log(res);
      throw new Error("CSS compilation is a failure, abandon ship! ⚓");
    }
  } catch (error: any) {
    spinner.fail(error.message);
    return;
  } finally {
    spinner.stop();
  }
};

if (minimist.h || minimist.help) {
  console.log("Welcome to Jass, the CSS preprocessor written in JavaScript");
  console.log("To start the CLI, run 'jass start' in your terminal");
  console.log("Available commands:");
  console.log("-i [file input]: specify the input file path");
  console.log("-o [file output]: specify the output file path");
  console.log("-h or --help: show this help message");
  console.log("For more information and examples, please visit the Jass GitHub repository at https://github.com/Judeadeniji/jass-foss");
  console.log("Thank you for using Jass! 👏");

  process.exit(1);
}

if (minimist.v || minimist.version) {
  console.log("v1.1.0");
}

if (args[0] === "start") {
  figlet.text("Jass", { font: "Banner3" }, (err, data) => {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });

  console.log("\n\nWelcome to Jass! The ultimate CSS preprocessor written in JavaScript. Let's get started by compiling your stylesheets. 🚀");
  console.log("Enter the input file path or 'quit()' to exit:\n");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("", (inputFile) => {
    if (["quit()", "exit", "exit()"].includes(inputFile)) {
      console.log("Exiting the application... 👋");
      process.exit(0);
    } else {
      const i = path.resolve(process.cwd(), inputFile);
      console.log("Enter the output file path or 'quit()' to exit:\n");
      rl.question("", async (outputFile) => {
        if (["quit()", "exit", "exit()"].includes(outputFile)) {
          console.log("Exiting the application... 👋");
          process.exit(0);
        } else {
          console.log("Modelling Object tree... 🌳");
          await build(i, outputFile);
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
