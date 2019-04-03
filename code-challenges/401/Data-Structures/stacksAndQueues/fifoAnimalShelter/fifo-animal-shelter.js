'user strict';

const {Queue} = require('../../stacksAndQueues/stacks-and-queues.js');

const queue1 = new Queue();
const queue2 = new Queue();

queue1.enqueue('dog');
queue1.enqueue('cat');
queue1.enqueue('dog');
queue1.enqueue('dog');

// class AnimalShelter extends Queue {

//   constructor(){
//     this.dog = 'dog';
//     this.cat = 'cat';
//   }
// }

let animalShelter = () => {
  let tempNode = 0;
  let tempNode2 = 0;

  //enqueue into the animal shelter
  queue1.enqueue('cat');

  let dequeueShelter = (preferredPet) => {

    //peek at front node
    let checkNode = queue1.peek();

    if(checkNode === preferredPet) {
      return checkNode;
    }
    console.log(queue1.dequeue()); //why does having this here make tempNode return a value below?
    while(queue1.frontOfQueue.next !== null) {
      if(queue1.frontOfQueue.element === preferredPet){
        tempNode = queue1.frontOfQueue;
        console.log(preferredPet);

      } else {
        queue1.dequeue();
        tempNode2 = queue1.frontOfQueue.next;
        queue2.enqueue(tempNode2);
      }
      // console.log('queue1: ', queue1);
      // console.log('queue2: ', queue2);
      console.log(tempNode, 'I am the node you are looking for');
      return tempNode.element;
    }
  };  
  dequeueShelter('cat');

};

animalShelter();
