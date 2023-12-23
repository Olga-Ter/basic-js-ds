const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  getUnderlyingList() {
    return this.first
    // remove line with error and write your code here
  }

  enqueue(value) {
    const newItem = new ListNode(value);
    if (this.size === 0) {
      this.first = newItem;
      this.last = newItem;
    } 
    else {
      this.last.next = newItem;
      this.last = newItem;
    }
    this.size += 1;
    // remove line with error and write your code here
  }

  dequeue() {
    if (this.size === 0) return null;
    const removeItem = this.first;
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next;
    this.size -= 1;
    return removeItem.value;
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue
};
