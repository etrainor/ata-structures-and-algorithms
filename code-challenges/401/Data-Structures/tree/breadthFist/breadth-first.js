'use strict';

//Note this will not work until the Binary Tree Class is completed.

// const BinaryTree = require('../tree.js');

// class BreadthFirst extends BinaryTree {
//   constructor() {

//   }

  

// }

//The code without using a class...

function breadthFirst(binaryTree) {
  let counter = 0;
  let outputArray = [];

  if(binaryTree.root){
    outputArray.push(binaryTree.root);
  }
  
  while( counter <= outputArray.length ) {
    if(outputArray[counter].left) {
      outputArray.push(outputArray[counter].left);
    }
    if(outputArray[counter].right) {
      outputArray.push(outputArray[counter].right);
    }
    counter++;
  }
  return outputArray;
}

breadthFirst(binaryTree);

