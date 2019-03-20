'use strict'

const evenArray = [1,2,3,4];
const oddArray = [1,2,3,4,5,6,7];
const empty = [];
const testValue = 'unicorn';

const findTheMidpoint = (array) => {
    let midpoint = Math.floor(array.length/2);
    return midpoint;
}

const insertShiftArray = (array, value) => {
    let length = array.length;
    array[length] = 0;
    let mp = array[findTheMidpoint(array)];
    for(let i = length ; i >= mp ; i--){
        array[i] = array[i-1];
    }
    array[findTheMidpoint(array)] = value;
    console.log(array, 'output array');
}
insertShiftArray(evenArray, testValue);
insertShiftArray(oddArray, testValue);
insertShiftArray(empty, testValue);

