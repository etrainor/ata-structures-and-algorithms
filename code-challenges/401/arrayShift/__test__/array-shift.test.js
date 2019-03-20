'use strict';

const shift = require("../array-shift.js");

const oddArray = [1,2,3,4,5,6,7];
const value = 'unicorn';

xdescribe('Array-Shift Code Challenge', () => {
    // let shiftArray = shift.insertShiftArray;
    it('Should insert value into the middle of the array', () => {
        expect(shift.insertShiftArray(oddArray, value)).toEqual([ 1, 2, 3, 4, 'unicorn', 5, 6, 7 ]);
        
    })
});
