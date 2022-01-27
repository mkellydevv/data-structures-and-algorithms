const positioningPlants = (costs, i = 0, prevJ = null, memo = {}) => {
  const key = i + ',' + prevJ;
  if (key in memo) return memo[key];
  if (i === costs.length) return 0;
  const row = costs[i];

  let min = Infinity;
  for (let j = 0; j < row.length; j++) {
    if (j === prevJ) continue;
    const candidate = row[j] + positioningPlants(costs, i + 1, j, memo);
    min = Math.min(min, candidate);
  }

  memo[key] = min;
  return min;
};

const positioningPlants = (costs) => {
  for (let i = 1; i < costs.length; i++) {
    const [smallest, secondSmallest] = findSmalls(costs[i - 1]);
    const row = costs[i];

    for (let j = 0; j < row.length; j++) {
      if (j !== smallest[1]) row[j] += smallest[0];
      else row[j] += secondSmallest[0];
    }
  }

  return Math.min(...costs[costs.length - 1]);
};

const findSmalls = (row) => {
  let smallest = [Infinity];
  let secondSmallest = [Infinity];

  for (let i = 0; i < row.length; i++) {
    const val = row[i];

    if (val < smallest[0]) {
      secondSmallest = smallest;
      smallest = [val, i];
    } else if (val < secondSmallest[0]) {
      secondSmallest = [val, i];
    }
  }

  return [smallest, secondSmallest];
};

module.exports = {
  positioningPlants,
};
