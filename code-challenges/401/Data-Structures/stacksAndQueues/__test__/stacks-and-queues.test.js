'use strict';

const {Stack, Queue} = require('../stacks-and-queues.js');

xdescribe('Stack Class', () => {
  it('Can successfully instantiate an empty stack', () => {
    const newStack = new Stack();
    expect(newStack.top).toBeNull;
  });
  describe('push method', () => {
    it('Can successfully push onto a stack', () => {
      const newStack = new Stack();
      newStack.push('banana');
      expect(newStack.top.element).toEqual('banana');
      expect(newStack.top.next).toBeNull;
    });
    it('Can successfully push multiple nodes onto a stack', () => {
      const newStack = new Stack();
      newStack.push('banana');
      newStack.push('apple');
      newStack.push('orange');
      newStack.push('pineapple');
      expect(newStack.top.element).toEqual('pineapple');
      expect(newStack.top.next.element).toEqual('orange');
      expect(newStack.top.next.next.element).toEqual('apple');
      expect(newStack.top.next.next.next.element).toEqual('banana');
    });
  });
  describe('pop method', () => {
    it('Can successfully pop off the stack', () => {
      const newStack = new Stack();
      newStack.push('banana');
      newStack.push('apple');
      newStack.pop();
      expect(newStack.top.element).toEqual('banana');
    });
    it('Can successfully empty a stack after multiple pops.', () => {
      const newStack = new Stack();
      newStack.push('banana');
      newStack.push('apple');
      newStack.pop();
      newStack.pop();
      expect(newStack.top).toBeNull;
    });
    describe('peek method', () => {
      it('Can successfully peek the next item on the stack.', () => {
        const newStack = new Stack();
        newStack.push('banana');
        newStack.push('apple');
        let nextValue = newStack.peek();
        expect(nextValue).toEqual('apple');
      });
    });
  });
});

xdescribe('Queue Class', () => {
  it('Can successfully instantiate an empty queue', () => {
    const newQueue = new Queue();
    expect(newQueue.top).toBeNull;
  });
  describe('enqueue method', () => {
    it('Can successfully enqueue onto a queue', () => {
      const newQueue = new Queue();
      newQueue.enqueue('banana');
      expect(newQueue.frontOfQueue.element).toEqual('banana');
      expect(newQueue.frontOfQueue.next).toBeNull;
    });
    xit('Can successfully enqueue multiple items into a queue', () => {
      const newQueue = new Queue();
      newQueue.enqueue('banana');
      newQueue.enqueue('apple');
      newQueue.enqueue('orange');
      newQueue.enqueue('pineapple');
      expect(newQueue.frontOfQueue.element).toEqual('pineapple');
      expect(newQueue.frontOfQueue.next.element).toEqual('orange');
      expect(newQueue.frontOfQueue.next.next.element).toEqual('apple');
      expect(newQueue.frontOfQueue.next.next.next.element).toEqual('banana');
    });
  });
  xdescribe('dequeue method', () => {
    it('Can successfully dequeue off of a queue the expected value', () => {
      const newQueue = new Queue();
      newQueue.enqueue('banana');
      newQueue.enqueue('apple');
      newQueue.enqueue('orange');
      newQueue.enqueue('pineapple');
      newQueue.dequeu();
      expect(newQueue.frontOfQueue.element).toEqual('apple');
    });
    it('Can successfully empty a stack after multiple pops.', () => {
      const newQueue = new Queue();
      newQueue.push('banana');
      newQueue.push('apple');
      newQueue.pop();
      newQueue.pop();
      expect(newQueue.top).toBeNull;
    });
    xdescribe('peek method', () => {
      it('Can successfully peek the next item on the stack.', () => {
        const newQueue = new Queue();
        newQueue.push('banana');
        newQueue.push('apple');
        let nextValue = newQueue.peek();
        expect(nextValue).toEqual('apple');
      });
    });
  });
});