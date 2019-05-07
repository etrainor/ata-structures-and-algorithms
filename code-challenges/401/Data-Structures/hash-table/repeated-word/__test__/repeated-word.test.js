'use strict';

const { findDuplicateWord } = require('../repeated-word.js');

let stringToSearch = 'The name is Bond James Bond';
let stringWithPunctuation = 'The name is Bond, James Bond';
let noDuplicates = 'The fork ran away with a spoon';
let caseInsensitive = 'The fork ran away with the spoon';

describe('repeated-word.js', () => {
  it('can identify the first duplicate word', () => {
    let result = findDuplicateWord(stringToSearch);
    expect(result).toEqual('bond');
  });
  it('will return a string of \'no duplicates found\' if there are no duplicate words', () => {
    let result = findDuplicateWord(noDuplicates);
    expect(result).toEqual('no duplicates found');
  });
  xit('can handle other punctuation that is part of a word that would normally be a duplicate', () => {
    let result = findDuplicateWord(stringWithPunctuation);
    expect(result).toEqual('bond');
  });
  it('can handle duplicate words that contain uppercase and lowercase letters.', () => {
    let result = findDuplicateWord(caseInsensitive);
    expect(result).toEqual('the');
  });
});
