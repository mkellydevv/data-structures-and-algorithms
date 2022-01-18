const maxValue = (nums) => {
    let max = -Infinity;
    for (let val of nums)
        max = Math.max(val,max);
    return max;
};

module.exports = {
    maxValue
};
