/*
Given a string that consists of some words and an assortment of non-alphabetic characters,
write a function that returns that string with all of the non-alphabetic characters replaced by spaces.
If one or more non-alphabetic characters occur in a row, you should only have one space in the result
(i.e., the result string should never have consecutive spaces).

Example:

cleanUp("---what's my +*& line?");    // " what s my line "
*/

function cleanUp(str) {
  let cleanedStr = '';
  let space = true;

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/i)) {
      cleanedStr += str[i];
      space = true;
    } else {
      if (space === true) cleanedStr += ' ';
      space = false;
    }
  }
  return console.log(cleanedStr);
}

cleanUp("---what's my +*& line?");    // " what s my line "