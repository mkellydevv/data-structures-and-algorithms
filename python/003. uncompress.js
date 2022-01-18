const nums = new Set(['0','1','2','3','4','5','6','7','8','9']);

const uncompress = (s) => {
  let res = "";
  let i = 0;
  let j = 0;

  while (j < s.length) {
    if (nums.has(s[j])) {
      j++;
    }
    else {
      const num = parseInt(s.slice(i,j));
      for (let k = 0; k < num; k++)
        res += s[j];
      j++;
      i = j;
    }
  }
  return res;
};

module.exports = {
  uncompress
};
