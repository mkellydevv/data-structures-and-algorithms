const permutations = (items) => {
  if (items.length === 0) return [[]];

  const firstItem = items[0];
  const perms = permutations(items.slice(1));
  const newPerms = [];

  for (let perm of perms) {
    for (let i = 0; i <= perm.length; i++) {
      const newPerm = perm.slice();
      newPerm.splice(i, 0, firstItem);
      newPerms.push(newPerm);
    }
  }

  return newPerms;
};

module.exports = {
  permutations,
};
