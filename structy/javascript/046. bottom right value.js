// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const bottomRightValue = (root) => {
  if (root === null) return null;

  const queue = [root];
  let lastSeenNode = root;

  while (queue.length > 0) {
    const node = queue.shift();

    lastSeenNode = node;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return lastSeenNode.val;
};

module.exports = {
  bottomRightValue,
};
