Jass - Just another Sassy StyleScript

# Jass - Just another Sassy StyleScript

Jass is a FOSS CSS preprocessor written in JavaScript. It allows users to write CSS like JavaScript objects, and provides a number of features to make styling more convenient and efficient.

[![GitHub Stars](https://img.shields.io/github/stars/Judeadeniji/JASS-FOSS.svg?style=social)](https://github.com/Judeadeniji/JASS-FOSS)[![GitHub Forks](https://img.shields.io/github/forks/Judeadeniji/JASS-FOSS.svg?style=social) ](https://github.com/Judeadeniji/JASS-FOSS/fork)[![GitHub Issues](https://img.shields.io/github/issues/Judeadeniji/JASS-FOSS.svg) ](https://github.com/Judeadeniji/JASS-FOSS/issues)[![GitHub License](https://img.shields.io/github/license/Judeadeniji/JASS-FOSS.svg)](https://github.com/Judeadeniji/JASS-FOSS/blob/master/LICENSE)

## Features:

- Deep nesting of CSS rules
- Object extension using "@extends" key
- CSS shorthand as JavaScript objects
- Parsing of images to base64
- CLI tool for easy usage
- Built-in support for CSS variables
- Ability to define media queries in JavaScript
- Inline code evaluation for dynamic styles

## Usage:

To start using jass, you can run the following command:

`jass start`

To compile your jass code to CSS, you can use the following command:

`jass build -i [input file path] -o [output file path]`

Replace \[input file path\] and \[output file path\] with the appropriate file paths.

## Example:

To illustrate the power of jass, consider the following example of a button:

`const button = { color: "white", background: "blue", padding: "10px", borderRadius: "5px", "&:hover": { background: "darkblue" }, "@media (max-width: 600px)": { width: "100%" } };`

This jass code defines a button with the specified styles, and also includes a hover effect and a media query for small screens. With jass, you can use JavaScript to easily define complex styles and responsive design.

## GitHub

jass is an open-source project and is available on [GitHub](https://github.com/Judeadeniji/JASS-FOSS). You can find the source code, documentation, and issue tracker there. Feel free to submit pull requests or issues if you find any bugs or have any suggestions for new features.

You can also use the package manager of your choice to add jass to your project. Example:

`npm install jass`

or

`yarn add jass`

Once you have jass installed, you can import it into your project and start using it right away.

`import jass from 'jass'; const button = { color: "white", background: "blue", padding: "10px", borderRadius: "5px", "&:hover": { background: "darkblue" }, "@media (max-width: 600px)": { width: "100%" } }; const css = jass.createCss(button);`

This will take the JavaScript object and compile it into valid CSS, which you can then insert into your HTML file or use in a stylesheet.

jass also provides a plugin system which allows you to extend its functionality. You can find many useful plugins in the jass community or create your own.

In summary, jass is a powerful CSS preprocessor that allows you to write CSS in a more convenient and efficient way. With its deep nesting, object extension, shorthand, and parsing capabilities, jass makes styling your web projects a breeze. And being FOSS, it's available on GitHub for you to use, contribute, or even create your own plugins.
