'use strict';

class Node {

  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class Stack {

  constructor() {
    this.top = null;
    // this.items = [];
    // this.length = 0;
  }

  // This method adds an element at the top of the stack. It is a time performance of O(1) because it takes the same amount of time to complete the addition every time as only one value can be added each time.

  push(value) {
    try {
      //make a new node
      let newNode = new Node(value);
      //check if there is anything in the stack
      if(this.top !== null) {
        //reassign the top as the next to the node being added
        newNode.next = this.top;
        //reassign the top of the stack to the new node
        this.top = newNode;

      } else {
        //assign the node being added as the top of the stack
        this.top = newNode;

      }

    } catch (error) {
      if(error.stack) {
        console.error('There was an error adding a new top node', error, error.stack);
      } else return error;
    }
  }
  // This method removes the node from the top of the stack, and returns the node’s value.

  pop() {
    try {
      if(this.top !== null) {
        //Store the value of the node that is being removed
        let removedNode = this.top.element;
        //reassign the next node as the new top of the stack
        this.top = this.top.next;
        // return the stored value
        return removedNode;
      }
      return null;

    } catch (error) {
      if(error.stack) {
        console.error('There was an error removing the top node', error, error.stack);
      } else return error;
    }
  }
  // A method that looks at the top node of a stack and returns its value
  peek() {
    try {

      return this.top.element;

    } catch (error) {
      if(error.stack) {
        console.error('There was an error peeking at the first node', error, error.stack);
      } else return error;
    }
  }
}

class Queue {

  constructor() {
    this.frontOfQueue = null;
  }

  // This method adds an element at the back of the queue like getting in line at a theater. It is a time performance of O(1) because it takes the same amount of time to complete the addition every time as only one value can be added each time.

  enqueue(value) {
    try {
      //make a new node
      let newNode = new Node(value);
      //check if there is anything in the stack
      if(this.frontOfQueue !== null) {
        //reassign the front of the queue as the next to the node being added
        newNode.next = this.frontOfQueue;
        //reassign the top of the stack to the new node
        this.frontOfQueue = newNode;

      } else {
        //assign the node being added as the top of the stack
        this.frontOfQueue = newNode;

      }

    } catch (error) {
      if(error.stack) {
        console.error('There was an error adding a new top node', error, error.stack);
      } else return error;
    }
  }
  // This method removes the node from the front of the queue like completing the purchasing of your ticket at the theater and leaving the line, and returns the node’s value.

  dequeue() {
    try {
      if(this.frontOfQueue !== null) {
        //store the value of the node at the front of the queue
        let removedNode = this.frontOfQueue;
        //reassign the front of the queue to the next node
        this.frontOfQueue = this.frontOfQueue.next;
        //return the value of the node that was removed
        return removedNode; 
      }

    } catch (error) {
      if(error.stack) {
        console.error('There was an error removing the top node', error, error.stack);
      } else return error;
    }
  }
  // A method that looks at the front node of a queue and returns its value
  peek() {
    try {

      return this.frontOfQueue.element;

    } catch (error) {
      if(error.stack) {
        console.error('There was an error peeking at the first node', error, error.stack);
      } else return error;
    }
  }

}

module.exports = {Stack, Queue};

// Can successfully dequeue off of a queue the expected value
// Can successfully peek into a queue, seeing the expected value
// Can successfully empty a queue after multiple dequeues
