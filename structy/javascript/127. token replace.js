const tokenReplace = (str, tokens) => {
  const resultArr = [];

  let i = 0;
  while (i < str.length) {
    let j = i;
    while (str[j] !== '$' && j < str.length) j++;
    const text = str.slice(i, j);
    resultArr.push(text);

    let k = j + 1;
    while (str[k] !== '$' && k < str.length) k++;
    const tokenVal = tokens[str.slice(j, k + 1)];
    resultArr.push(tokenVal);

    i = k + 1;
  }

  return resultArr.join('');
};

module.exports = {
  tokenReplace,
};
