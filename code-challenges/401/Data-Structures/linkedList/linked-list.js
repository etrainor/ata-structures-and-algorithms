'use strict';

/**
 * The element holds the data of a node while next holds the pointer to the next node, which when a linked list is first created is initialized as the null value.
 */

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;

  }
}


/**
 * // In a linked list, the first node in the the head. Size designates the number of nodes in the list.
 */

class LinkedList {
  
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////

  /**
   * Insert a new node at the beginning of a linked list
   * @param {*} valueToInsert 
   */

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

  
  /**
   * Check if a linked list contains a specific value
   * @param {*} value 
   */

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

  /**
   * A method that takes in no arguments and returns a collection of all the current Node values in the list
   */
  
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
      return outputString;

      // Catch the errors and return something useful
    } catch (error) {
      if(error.stack) {
        console.error('There was an error inserting a a new node', error, error.stack);
      } else return error;
    }
  }

  /**
   * A method that takes in a value and inserts it as the value of a new node at the end of the linked list.
   */

  append(value) {

    try {
      //Check if the function contains any nodes

      if(this.head === null) {
        return;
      }
      
      // Tell the function to start at the beginning(head) of the list.
      let currentNode = this.head;
      
      // Iterate through the nodes to the end of the list
      while(currentNode.next !== null) {
        currentNode = currentNode.next;
      }

      //Once the end of the list is reached add a new node and assign the new a value.
      let newNode = new Node(value);
      currentNode.next = newNode;

    } catch (error) {
      if(error.stack) {
        console.error('There was an error inserting a a new node', error, error.stack);
      } else return error;
    }
  }
  
  /**
  * A method that takes in a newValue and an oldValue and assigns the newValue to a newNode before the node containing the oldValue.
  * @param {*} oldValue 
  * @param {*} newValue 
  */

  insertBefore(oldValue, newValue) {
    
    try {

      //Check if the linked list contains the old value using the includes method.
      if(! new LinkedList.includes(oldValue)) {
        return;
      }

      // Tell the function to start at the beginning(head) of the list.
      let currentNode = this.head.next;

      // Store the value of the head so we know the value of the previous node.
      let previousNode = this.head;

      // Check if the value of the first node in the linked list matches the value we are looking for. If so use the insert method to add a new node to the beginning of the linked list.
      if(this.head.element === oldValue) {
        LinkedList.insert(newValue);
      }

      // Iterate through the linked list and look for .next value that matches the oldValue(value being looked for). While iterating continue to reassign the previousNode value so when we find what we are looking for we know what node was previous 
      while(currentNode !== oldValue){
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      // Once the oldValue is found, create a new Node between the previous node and the current node.
      let newNode = new Node;
      previousNode.next = newNode;
      newNode.next = currentNode;

    } catch (error) {
      if(error.stack) {
        console.error('There was an error inserting a a new node', error, error.stack);
      } else return error;
    }
  }

  /**
   * A method that takes in a newValue and an oldValue and assigns the newValue to a newNode after the node containing the oldValue.
   * @param {*} oldValue 
   * @param {*} newValue 
   */

  insertAfter(oldValue, newValue) {
    
    try {

      //Check if the linked list contains the old value using the includes method.
      if(! new LinkedList.includes(oldValue)) {
        return;
      }

      // Check if the value of the first node in the linked list matches the value we are looking for. If so use the append method to add a new node to the beginning of the linked list.
      if(this.head.element === oldValue) {
        LinkedList.append(newValue);
      }

      let currentNode = this.head.next;

      // Iterate through the linked list and look for .next value that matches the oldValue(value being looked for).
      while(currentNode !== oldValue){
        currentNode = currentNode.next;
      }

      // Once the oldValue is found, create a new Node after the current node and assign it the newValue..
      let newNode = new Node;
      newNode.next = currentNode.next;
      currentNode.next = newNode;

    } catch (error) {
      if(error.stack) {
        console.error('There was an error inserting a a new node', error, error.stack);
      } else return error;
    }
  }
} 

module.exports = {Node, LinkedList};
