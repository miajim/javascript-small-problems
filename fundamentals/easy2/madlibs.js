/*
Madlibs is a simple game where you create a story template with "blanks" for words. 
You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

Example: 
Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
*/

let rlSync = require('readline-sync');

console.log('Enter a noun: ');
let noun = rlSync.prompt();
console.log('Enter a verb: ');
let verb = rlSync.prompt();
console.log('Enter an adjective: ');
let adjective = rlSync.prompt();
console.log('Enter an adverb: ');
let adverb = rlSync.prompt();

console.log();
console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
