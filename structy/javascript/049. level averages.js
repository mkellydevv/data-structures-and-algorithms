// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const levelAverages = (root) => {
  if (!root) return [];

  const queue = [root, null];
  const averages = [];
  let levelSum = 0;
  let levelNodeCount = 0;

  while (queue.length > 0) {
    const node = queue.shift();

    if (node === null) {
      averages.push(levelSum / levelNodeCount);

      if (queue.length === 0) break;

      levelSum = 0;
      levelNodeCount = 0;
      queue.push(null);
    } else {
      levelSum += node.val;
      levelNodeCount++;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return averages;
};
