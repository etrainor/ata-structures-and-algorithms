'use strict';

let sortedArray = [1,2,3,4,5,6,9];
let searchKey = 5;

function binarySearch(sortedArray, searchKey) {
  let length = sortedArray.length;
  let start = 0;
  let result = -1;
  for(let i = start ; i < length ; i++) {
    while(sortedArray[i] !== searchKey) {
      if(sortedArray[i] === searchKey) {
        result = sortedArray[i];
      }
    }
    return result;
  }
}

binarySearch(sortedArray, searchKey);
console.log(binarySearch(sortedArray, searchKey));
