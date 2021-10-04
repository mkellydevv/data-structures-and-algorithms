const pairSum = (nums, tar) => {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[tar - nums[i]] !== undefined)
            return [map[tar - nums[i]], i];
        else
            map[nums[i]] = i;
    }
};

module.exports = {
    pairSum
};
