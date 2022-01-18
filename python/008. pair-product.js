const pairProduct = (nums, tar) => {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        if (tar / nums[i] in map)
            return [map[tar / nums[i]], i];
        map[nums[i]] = i;
    }
};

module.exports = {
    pairProduct
};
