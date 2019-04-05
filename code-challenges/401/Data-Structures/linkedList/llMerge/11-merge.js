'use strict';

const {Node, LinkedList} = require('../linked-list.js');
const listOne = new LinkedList();
listOne.insert(1);
listOne.insert(3);
listOne.insert(5);

const listTwo = new LinkedList();
listTwo.insert(2);
listTwo.insert(4);
listTwo.insert(6);



function mergeList(list1, list2) {
  let tempVar = 0;
  while(listOne.current !== null) {
    if(listTwo.head === null) {
      return listOne;
    }
    tempVar = listOne.head.next;
    listTwo.head = listOne.current.next;
    if (tempVar === null) {
      return listOne;
    } else {
      listTwo.head = listTwo.head.next;
      tempVar = listOne.current.next.next;
    }
    return listOne.head;
  }
}

mergeList(listOne, listTwo);
console.log(listOne);