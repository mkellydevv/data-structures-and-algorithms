/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = (strA, strB) => {
  let i = strA.length - 1;
  let j = strB.length - 1;
  while (i > -1 || j > -1) {
    i = skip(strA, i);
    j = skip(strB, j);
    if (strA[i] !== strB[j]) return false;
    i--;
    j--;
  }
  return true;
};

const skip = (str, i) => {
  let count = 0;
  while (str[i] === '#' || (count !== 0 && i > -1)) {
    if (str[i] === '#') count++;
    else count--;
    i--;
  }
  return i;
};
