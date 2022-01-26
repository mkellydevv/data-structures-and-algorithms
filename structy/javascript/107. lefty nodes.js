// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const leftyNodes = (root) => {
  if (!root) return [];

  const queue = [root, null];
  const res = [root.val];

  while (queue.length > 0) {
    const curr = queue.shift();
    if (!curr) {
      if (queue.length > 0) {
        res.push(queue[0].val);
        queue.push(null);
      }
      continue;
    }

    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }

  return res;
};

module.exports = {
  leftyNodes,
};
