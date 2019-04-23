// A randomly generated unsorted array returns the array sorted
// A sorted array returns the same sorted array
// A backwards-sorted array returns the array sorted
// An empty array returns the same empty array
// An array of one element returns the same single-element array

'use strict';

//Arrays to test with
let randomArray = [76, 3, 54398, 22, -1, 0.38493, -43];
let sortedArray = [1,2,3,4,5,6,7,8,9];
let backwardsArray = [9,8,7,6,5,4,3,2,1];
let emptyArray = [];
let oneElementArray = [7];

describe('insertion-sort.js', () => {
  it('can sort a randomly generated unsorted array', () => {
    let result = insertionSort(randomArray);
    expect(result).toEqual([-43, -1, 0.38493, 3, 22, 76, 54398]);
  });
  it('will return a sorted array if given a sorted array', () => {
    let result = insertionSort(sortedArray);
    expect(result).toEqual(sortedArray);
  });
  it('will return a sorted array when given a backwards sorted array', () => {
    let result = insertionSort(backwardsArray);
    expect(result).toEqual(sortedArray);
  });
  it('will return an empty array if asked to sort an empty array', () => {
    let result = insertionSort(emptyArray);
    expect(result).toEqual(emptyArray);
  });
  it('will return an array of one element if given an array of only one element', () => {
    let result = insertionSort(oneElementArray);
    expect(result).toEqual(oneElementArray);
  });
});

