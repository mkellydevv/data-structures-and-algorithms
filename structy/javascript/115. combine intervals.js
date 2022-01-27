const combineIntervals = (intervals) => {
  let sorted = intervals.sort((a, b) => a[0] - b[0]);
  const res = [];

  let i = 0;
  let j = 1;
  while (i < sorted.length) {
    j = i + 1;

    while (j < sorted.length) {
      if (sorted[j][1] <= sorted[i][1]) {
        // sorted[i] encompasses sorted[j]
        j++;
      } else if (sorted[j][0] <= sorted[i][1]) {
        // sorted[i] merges with sorted[j]
        sorted[i][1] = sorted[j][1];
        j++;
      } else break;
    }

    res.push(sorted[i]);
    i = j;
  }

  return res;
};

module.exports = {
  combineIntervals,
};
