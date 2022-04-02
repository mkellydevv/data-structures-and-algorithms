// https://leetcode.com/problems/frog-jump/

/**
 * @param {number[]} stones
 * @return {boolean}
 */

const canCross = (stones) => {
  if (stones[1] !== 1) return false;
  const stoneMap = {};

  for (let i = 0; i < stones.length; i++) stoneMap[stones[i]] = i;

  return _canJump(stones, stoneMap, 1, 1, new Set());
};

const _canJump = (stones, stoneMap, i, k, visited) => {
  const key = i + ',' + k;
  if (visited.has(key)) return false;
  if (i === stones.length - 1) return true;

  const kArr = [k, k + 1];
  if (k - 1 > 0) kArr.push(k - 1);

  const nextPosArr = [];
  for (let k of kArr) nextPosArr.push(stones[i] + k);

  for (let i = 0; i < nextPosArr.length; i++) {
    const pos = nextPosArr[i];
    if (pos in stoneMap) {
      const nextIdx = stoneMap[pos];
      const nextK = kArr[i];
      const endFound = _canJump(stones, stoneMap, nextIdx, nextK, visited);
      if (endFound) return true;
    }
  }

  visited.add(key);

  return false;
};
