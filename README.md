JASS-FOSS - Just another Sloppy StyleScript   

JASS-FOSS - Just another Sloppy StyleScript
===========================================

JASS-FOSS is a FOSS CSS preprocessor written in JavaScript. It allows users to write CSS like JavaScript objects, and provides a number of features to make styling more convenient and efficient.

 [![GitHub Stars](https://img.shields.io/github/stars/Judeadeniji/JASS-FOSS.svg?style=social)](https://github.com/Judeadeniji/JASS-FOSS)[![GitHub Forks](https://img.shields.io/github/forks/Judeadeniji/JASS-FOSS.svg?style=social) ](https://github.com/Judeadeniji/JASS-FOSS/fork)[![GitHub Issues](https://img.shields.io/github/issues/Judeadeniji/JASS-FOSS.svg) ](https://github.com/Judeadeniji/JASS-FOSS/issues)[![GitHub License](https://img.shields.io/github/license/Judeadeniji/JASS-FOSS.svg)](https://github.com/Judeadeniji/JASS-FOSS/blob/master/LICENSE)

Features:
---------

*   Deep nesting of CSS rules
*   Object extension using "@extends" key
*   CSS shorthand as JavaScript objects
*   Parsing of images to base64
*   CLI tool for easy usage
*   Built-in support for CSS variables
*   Ability to define media queries in JavaScript
*   Inline code evaluation for dynamic styles

Usage:
------

To start using JASS-FOSS, you can run the following command:

 `JASS-FOSS start` 

To compile your JASS-FOSS code to CSS, you can use the following command:

 `JASS-FOSS build -i [input file path] -o [output file path]` 

Replace \[input file path\] and \[output file path\] with the appropriate file paths.

Example:
--------

To illustrate the power of JASS-FOSS, consider the following example of a button:

 `const button = {   color: "white",   background: "blue",   padding: "10px",   borderRadius: "5px",   "&:hover": {     background: "darkblue"   },   "@media (max-width: 600px)": {     width: "100%"   } };`
     

This JASS-FOSS code defines a button with the specified styles, and also includes a hover effect and a media query for small screens. With JASS-FOSS, you can use JavaScript to easily define complex styles and responsive design.

GitHub
------

JASS-FOSS is an open-source project and is available on [GitHub](https://github.com/Judeadeniji/JASS-FOSS). You can find the source code, documentation, and issue tracker there. Feel free to submit pull requests or issues if you find any bugs or have any suggestions for new features.

You can also use the package manager of your choice to add JASS-FOSS to your project. Example:

 `npm install JASS-FOSS`
     

or

 `yarn add JASS-FOSS`
     

Once you have JASS-FOSS installed, you can import it into your project and start using it right away.

 `import JASS-FOSS from 'JASS-FOSS';  const button = {   color: "white",   background: "blue",   padding: "10px",   borderRadius: "5px",   "&:hover": {     background: "darkblue"   },   "@media (max-width: 600px)": {     width: "100%"   } };  const css = JASS-FOSS.compile(button);`

     

This will take the JavaScript object and compile it into valid CSS, which you can then insert into your HTML file or use in a stylesheet.

JASS-FOSS also provides a plugin system which allows you to extend its functionality. You can find many useful plugins in the JASS-FOSS community or create your own.

In summary, JASS-FOSS is a powerful CSS preprocessor that allows you to write CSS in a more convenient and efficient way. With its deep nesting, object extension, shorthand, and parsing capabilities, JASS-FOSS makes styling your web projects a breeze. And being FOSS, it's available on GitHub for you to use, contribute, or even create your own plugins.