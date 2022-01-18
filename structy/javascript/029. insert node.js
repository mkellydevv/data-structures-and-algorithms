class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const insertNode = (head, value, index) => {
  if (index === 0) {
    const tmp = head;
    head = new Node(value);
    head.next = tmp;
  } else {
    head.next = insertNode(head.next, value, index - 1);
  }
  return head;
};

module.exports = {
  insertNode,
};
