'use strict'

const reverseArray = (array) => {
    let newArray = [];
    for(let i = array.length ; i >= 0 ; i--){
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(reverseArray);