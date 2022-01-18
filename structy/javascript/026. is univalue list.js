// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const isUnivalueList = (head) => {
  if (!head.next) return true;
  return head.val === head.next.val && isUnivalueList(head.next);
};

module.exports = {
  isUnivalueList,
};
