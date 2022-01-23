const sumPossible = (amount, numbers, memo = new Set()) => {
  if (memo.has(amount) || amount < 0) return false;
  if (amount === 0) return true;

  for (let num of numbers) {
    if (sumPossible(amount - num, numbers, memo)) return true;
  }

  memo.add(amount);
  return false;
};

module.exports = {
  sumPossible,
};
