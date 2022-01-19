// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

class Queue {
  constructor(val) {
    if (val) {
      this.head = new Queue.Node(val);
      this.length = 1;
    } else {
      this.head = null;
      this.length = 0;
    }
    this.tail = this.head;
  }

  static Node = class {
    constructor(val = null) {
      this.val = val;
      this.next = null;
    }
  };

  enqueue(val) {
    if (this.tail) {
      this.tail.next = new Queue.Node(val);
      this.tail = this.tail.next;
    } else {
      this.head = new Queue.Node(val);
      this.tail = this.head;
    }
    this.length++;
  }

  dequeue() {
    if (this.head) {
      const node = this.head;
      this.head = this.head.next;
      if (this.tail === node) this.tail = null;
      this.length--;
      return node.val;
    }
    return null;
  }
}

// Using a custom queue class
const breadthFirstValues = (root) => {
  if (root === null) return [];

  const queue = new Queue(root);
  const vals = [];

  while (queue.length > 0) {
    const node = queue.dequeue();

    vals.push(node.val);
    if (node.left) queue.enqueue(node.left);
    if (node.right) queue.enqueue(node.right);
  }

  return vals;
};

// Using js arrays with shift()
// const breadthFirstValues = (root) => {
//   if (root === null) return [];

//   const queue = [root];
//   const vals = [];

//   while (queue.length > 0) {
//     const node = queue.shift();
//     vals.push(node.val);
//     if (node.left) queue.push(node.left);
//     if (node.right) queue.push(node.right);
//   }

//   return vals;
// };

module.exports = {
  breadthFirstValues,
};
