'use strict';

const mergeSort = require('./merge-sort.js');

//Arrays to test with
let randomArray = [76, 3, 54398, 22, -1, 0.38493, -43];
let sortedArray = [1,2,3,4,5,6,7,8,9];
let backwardsArray = [9,8,7,6,5,4,3,2,1];
let emptyArray = [];
let oneElementArray = [7];

describe('merge-sort.js', () => {
  it('can sort a randomly generated unsorted array', () => {
    let result = mergeSort(randomArray);
    expect(result).toEqual([-43, -1, 0.38493, 3, 22, 76, 54398]);
  });
  it('will return a sorted array if given a sorted array', () => {
    let result = mergeSort(sortedArray);
    expect(result).toEqual(sortedArray);
  });
  it('will return a sorted array when given a backwards sorted array', () => {
    let result = mergeSort(backwardsArray);
    expect(result).toEqual(sortedArray);
  });
  it('will return an empty array if asked to sort an empty array', () => {
    let result = mergeSort(emptyArray);
    expect(result).toEqual(emptyArray);
  });
  it('will return an array of one element if given an array of only one element', () => {
    let result = mergeSort(oneElementArray);
    expect(result).toEqual(oneElementArray);
  });
});

