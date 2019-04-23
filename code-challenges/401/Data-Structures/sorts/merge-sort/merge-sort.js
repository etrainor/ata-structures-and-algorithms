'use strict';

const mergeSort = (array) => {
  let length = array.length;
    
  //check if the array is not empty
  if(length > 1) {

    //find the middle and round down
    let midpoint = Math.floor(length/2);

    //divide and conquer the array. Splitting at the midpoint.
    let leftArray = array.slice(0,midpoint);
    let rightArray = array.slice(midpoint, length);
  
    //break the arrays into little arrays
    mergeSort(leftArray);
    mergeSort(rightArray);
  
    //put the arrays back together
    merge(leftArray, rightArray, array);
  }
  return array;
};
  
let merge = (leftArray, rightArray, array) => {
  let i = 0; //left side
  let j = 0; //right side
  let k = 0; // will become sorted array
  
  while(i < leftArray.length && j < rightArray.length){
    if (leftArray[i] <= rightArray[j]){
      array[k] = leftArray[i];
      i++;
    }
    else {
      array[k] = rightArray[j];
      j++;
    }
    k++;
  }

  //push any remaining values onto the end of the array
  if(i === leftArray.length){
  
    rightArray.forEach(item => {
      array[k] = item;
      k++;
    });
  }
  else {
    leftArray.forEach(item => {
      array[k] = item;
      k++;
    });
  }
  return array;
  
};

module.exports = mergeSort;
