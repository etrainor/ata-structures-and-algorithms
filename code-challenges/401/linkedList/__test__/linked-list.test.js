'use strict';

const {Node, LinkedList} = require('../linked-list.js');

describe('LinkedList Class', () => {
  it('Can successfully instantiate an empty linked list', () => {
    const newList = new LinkedList();
    expect(newList).toBeDefined();
    expect(newList.head).toBeNull();
    expect(newList.size).toEqual(0);
  });
  describe('insert method', () => {
    it('Can properly insert into the linked list', () => {
      const newList = new LinkedList();
      newList.insert('unicorn');
      expect(newList.head.element).toContain('unicorn');
      expect(newList.head).toBeInstanceOf(Node);
    });
    it('The head property will properly point to the first node in the linked list', () => {
      const newList = new LinkedList();
      newList.insert('jackalope');
      expect(newList.head.element).toContain('jackalope');
      expect(newList.head.next).toBe(null);
    });
    it('Can properly insert multiple nodes into the linked list', () => {
      const newList = new LinkedList();
      newList.insert('unicorn');
      newList.insert('jackalope');
      newList.insert('dragon');
      expect(newList.head.element).toContain('dragon');
      expect(newList.head.next.element).toContain('jackalope')
      expect(newList.head.next.next.element).toContain('unicorn');
    });
  });
  describe('includes method', () => {
    it('Will return true when finding a value in the linked list that exists', () => {
      const newList = new LinkedList();
      newList.insert('unicorn');
      newList.insert('jackalope');
      newList.insert('dragon');
      expect(newList.includes('dragon')).toEqual(true);
    });
    it('Will return false when searching for a value in the linked list that does not exist', () => {
      const newList = new LinkedList();
      newList.insert('unicorn');
      newList.insert('jackalope');
      newList.insert('dragon');
      expect(newList.includes('griffon')).toEqual(false);
    });
  });
  describe('print method', () => {
    it('Can properly return a collection of all the values that exist in the linked list', () => {
      const newList = new LinkedList();
      newList.insert('unicorn');
      newList.insert('jackalope');
      newList.insert('dragon');
      const outputString = newList.print();
      expect(outputString).toContain('dragon jackalope unicorn');
    });
  });
});
