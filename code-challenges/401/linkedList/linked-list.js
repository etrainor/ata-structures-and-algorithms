'use strict';

// Resource found here https://www.geeksforgeeks.org/implementation-linkedlist-javascript/ 

// The element holds the data of a node while next holds the pointer to the next node, which when a linked list is first created is initialized as the null value.

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;

  }
}

// In a linked list, the first node in the the head. Size designates the number of nodes in the list.

class LinkedList {
  
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////

  // Insert a new node at the beginning of a linked list
  insert(valueToInsert) {
    try {
    // Create a new node
      let newNode = new Node(valueToInsert);
    
      // Give the new node the value of head. This moves the new node before the current location of the head.
      newNode.next = this.head;
    
      // Tell the new node that it is now the head (beginning) of the linked list
      this.head = newNode;

      // Catch the errors and return something useful
    } catch (error) {
      if(error.stack) {
        console.error('There was an error inserting a a new node', error, error.stack);
      } else return error;
    }
  } 

  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////

  // Check if a linked list contains a specific value
  includes(value) {
    
    try {

      // Tell the function to start at the beginning(head) of the list.
      let currentNode = this.head;
    
      // Return a boolean value depending on whether the value exists in the linked list.
      while(currentNode !== null) {
        if(currentNode.element === value) {
          return true;
        }
        currentNode = currentNode.next;
      } 
    
      return false;

      // Catch the errors and return something useful
    } catch (error) {
      if(error.stack) {
        console.error('There was an error inserting a a new node', error, error.stack);
      } else return error;
    }
  } 
  
  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////

  // A method that takes in no arguments and returns a collection of all the current Node values in the list
  print() {
    
    try {
    // Tell the function to start at the beginning(head) of the list and create a variable that can console log the elements in the list.
      let currentNode = this.head;
      let outputString = '';

      // Iterate through the nodes and add the values found to the outputString. Continue to reassign the next node as the current value.
      while(currentNode !== null) {
        outputString += currentNode.element + ' ';
        currentNode = currentNode.next;
      }
    
      // Console log the elements in the linked list
      console.log(outputString);
      return outputString

      // Catch the errors and return something useful
    } catch (error) {
      if(error.stack) {
        console.error('There was an error inserting a a new node', error, error.stack);
      } else return error;
    }
  }
} 

module.exports = {Node, LinkedList};
