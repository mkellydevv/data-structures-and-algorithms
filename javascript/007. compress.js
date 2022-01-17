const compress = (s) => {
  const arr = [];
  let currChar = s[0];
  let count = 1;

  for (let i = 0, j = 1; j < s.length; j++) {
    if (s[j] !== s[i]) {
      if (count !== 1) arr.push(count);
      arr.push(currChar);
      i = j;
      currChar = s[j];
      count = 1;
    } else {
      count++;
    }
  }

  if (count !== 1) arr.push(count);
  arr.push(currChar);

  return arr.join('');
};

module.exports = {
  compress,
};
