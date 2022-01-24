const decompressBraces = (str) => {
  const stack = [];
  const nums = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);

  for (let char of str) {
    if (char === '}') stack.push(getSubStr(stack, nums));
    else if (char !== '{') stack.push(char);
  }

  return stack.join('');
};

const getSubStr = (stack, nums) => {
  let subStr = '';
  let num = 0;
  let res = '';

  while (stack.length > 0) {
    const char = stack.pop();
    if (nums.has(char)) {
      num = Number(char);
      break;
    } else {
      subStr = char + subStr;
    }
  }

  for (let i = 0; i < num; i++) res += subStr;

  return res;
};

module.exports = {
  decompressBraces,
};
