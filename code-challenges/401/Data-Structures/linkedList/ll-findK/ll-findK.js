'use strict';

const {Node, LinkedList} = require('../linked-list.js');

const list = new LinkedList();
list.insert(1);
list.insert(6);
list.insert(3);
list.insert(22);

function kFromEnd(k) {
  let counter = 0;
  while(list.head.element !== null) {
    counter++;
    if(this.current.next !== k) {
      this.current = this.current.next;
    } else {
      return this.current.element;
    }
  }
}

kFromEnd(2);
console.log(kFromEnd(2));
