'use strict';

const insertionSort = (array) => {
//start i at 1 because we need to subtract from i to define j
  for(let i = 1 ; i < array.length ; i++) {
    //define tempVar as the value of the current element
    let tempVar = array[i];
    //loop backwards while index >= 0 and current element > 0
    for(var j = i - 1 ; j >= 0 && array[j] > tempVar; j--) {
      //redefine the next element equal to the current element
      array[j+1] = array[j];
    }
    //set next element equal to temp
    array[j+1] = tempVar;
  }
  return array;
};

module.exports = insertionSort;
