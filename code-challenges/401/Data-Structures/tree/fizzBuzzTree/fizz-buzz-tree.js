'use strict';

function inOrder(_walk());

function _walk(root) {
  if(root = null) {
    return null;
  }
  if(root.left !== null) {
    _walk(left);
  }
  if(root.value % 3 === 0 && root.value % 5 === 0) {
    root.value === 'fizzbuzz';
  }
  if(root.value % 3 === 0) {
    root.value = 'fizz';
  }
  if(root.value % 5 === 0) {
    root.value = 'buzz';
  }
  if(root.right !== null) {
    _walk(right);
  }
}

inOrder();

