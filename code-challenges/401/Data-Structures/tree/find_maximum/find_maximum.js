'use strict';

//Note this will not work until the Binary Tree Class is completed.

//The code without using a class...

function maxValue(binaryTree) {
  let temp = binaryTree.root.value;

  binaryTree.breadthFirst(binaryTree) {
    if(binaryTree.current.value > temp) {
      temp = current.value;
    }
  }
  return temp;
}

maxValue(binaryTree);

