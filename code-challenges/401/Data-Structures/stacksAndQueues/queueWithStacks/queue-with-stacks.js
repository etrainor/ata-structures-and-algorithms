'use strict';

const {Stack} = require('../../Data-Structures/stacksAndQueues/stacks-and-queues.js');

//Make Stacks
const stackOne = new Stack();
stackOne.push(1);
stackOne.push(2);
stackOne.push(3);

const stackTwo = new Stack();

function enqueueNodes(stack, value){
  stack.push(value);
}

function dequeueNode() {
  while(stackOne.next !== null) {
    stackOne.pop(stackOne.top.element);
    enqueueNodes(stackTwo, stackOne.top.element);
  }
  let tempVar = stackOne.peek();
  stackOne.pop(stackOne.top);
  while(stackTwo.next !== null) {
    stackTwo.pop(stackTwo.top);
    enqueueNodes(stackOne, stackTwo.top.element);
  }
  console.log(stackOne);
  console.log(tempVar);
  return tempVar;
}
enqueueNodes(stackOne, 4);
dequeueNode();