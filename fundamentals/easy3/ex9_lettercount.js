/*
Write a function that takes a string consisting of one or more space separated words and 
returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
*/

function wordSizes(str) {
  return str.split(/\s/g).reduce((hsh, word) => { 
    let length = word.length;
    if (length > 0) { hsh[length] ? hsh[length] += 1 : hsh[length] = 1 }
    return hsh;
  }, {});
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}