/*
Write a function that will take a short line of text, and write it to the console log within a box.

logInBox('To boldly go where no one has gone before.');

will log on the console: 

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+

You may assume that the output will always fit in your browser window.

*/

function logInBox(str) {
let width = str.length + 2;
let height = 3;

let topAndBottomBorder = `+${'-'.padEnd(width, '-')}+`;
let leftAndRightBorder = `|${' '.padEnd(width)}|`;
let formatMessage = `| ${str} |`;

console.log(topAndBottomBorder);
console.log(leftAndRightBorder);
console.log(formatMessage);
console.log(leftAndRightBorder);
console.log(topAndBottomBorder);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');

/*
Further Exploration
Modify this function so that it truncates the message if it doesn't fit inside a maximum width provided as a second argument
(the width is the width of the box itself). You may assume no maximum if the second argument is omitted. For a real challenge, 
try word wrapping messages that are too long to fit, so that they appear on multiple lines but are still contained within the box.
*/