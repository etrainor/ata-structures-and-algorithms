'use strict';

const Node = require('./node');

class LinkedList{
    constructor(){
        this.head = null;
    }

    insertAtHead(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAtTail(value){
        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;

        while(current.next) {
            current = current.next;
        }

        current.next = newNode;
    }



    find(value) {
        if(!this.head) {
            throw new Error('__ERROR__ The list is empty');
        }
        if(this.head.value === value) {
            return this.head;
        }


        let current = this.head;
        while(current.next) {

            if(current.next.value === value) {
                return current.next;
            }

            current = current.next;
        }

        return null;
    }

    insertAfter(anchor, insert){
        let current = this.head;
        while(!current.value === anchor) {
            current = current.next;
        }
        let newNode = new Node(insert);
        newNode.next = current.next;
        current.next = newNode;
    };

    insertBefore(anchor, insert){
        let current = this.head;
        while(current.next.value !== anchor) {
            current = current.next;
        }
        let newNode = new Node(insert);
        newNode.next = current.next;
        current.next = newNode;
    };
}

let list = new LinkedList();
list.insertAtHead(8);
list.insertAtHead(6);
list.insertAtHead(4);

list.insertAfter(4, 5);
list.insertBefore(8, 7);

let start = list.head;
console.log(start.value)
while(start.next){
    console.log(start.next.value);
    start = start.next;
}

module.exports = LinkedList;