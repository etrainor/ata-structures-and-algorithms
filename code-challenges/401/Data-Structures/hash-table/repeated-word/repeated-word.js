'use strict';

let findDuplicateWord = (string) => {
  let wordArray = string.toLowerCase().split(' ');
  console.log(wordArray);
  for(let i = 0 ; i <= wordArray.length ; i++) {
    for(let j = i ; j <= wordArray.length ; j++) {
      if(i!==j && wordArray[i] === wordArray[j]) {
        return wordArray[i];
      } 
    }
  }
  return 'no duplicates found';
}; 
// findDuplicateWord(string);

//edge cases
// string is empty
// how to handle punctuation

module.exports = { findDuplicateWord };