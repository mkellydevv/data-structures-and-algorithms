// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListValues = (head) => {
  const arr = [];
  let ptr = head;

  while (ptr) {
    arr.push(ptr.val);
    ptr = ptr.next;
  }

  return arr;
};

module.exports = {
  linkedListValues,
};
