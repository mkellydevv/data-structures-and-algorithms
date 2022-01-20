// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeLevels = (root, levels = [], levelIdx = 0) => {
  if (!root) return [];

  if (levelIdx === levels.length) levels.push([]);

  levels[levelIdx].push(root.val);

  treeLevels(root.left, levels, levelIdx + 1);
  treeLevels(root.right, levels, levelIdx + 1);

  return levels;
};

module.exports = {
  treeLevels,
};
