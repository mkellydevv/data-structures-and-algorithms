// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListFind = (head, target) => {
  if (head === null) return false;
  return head.val === target || linkedListFind(head.next, target);
};

module.exports = {
  linkedListFind,
};
