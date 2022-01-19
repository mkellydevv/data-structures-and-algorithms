// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const howHigh = (node) => {
  if (node === null) return -1;
  return 1 + Math.max(howHigh(node.left), howHigh(node.right));
};

module.exports = {
  howHigh,
};
