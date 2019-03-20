'use strict'

const reverseArray = (array) => {
    let newArray = [];
    for(let i = array.length-1 ; i >= 0 ; i--){
        newArray.push(array[i]);
    }
    return newArray;
}

reverseArray([1,2,3,4,5]);
