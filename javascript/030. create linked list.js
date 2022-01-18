class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (vals, i = 0) => {
  if (i === vals.length) return null;
  const node = new Node(vals[i]);
  node.next = createLinkedList(vals, i + 1);
  return node;
};

module.exports = {
  createLinkedList,
};
