// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// This function does not account for the tarVal not being in the list.
const removeNode = (head, tarVal) => {
  if (head && head.val === tarVal) return head.next;
  head.next = removeNode(head.next, tarVal);
  return head;
};

module.exports = {
  removeNode,
};
