const fiveSort = (nums) => {
    let i = 0;
    let j = nums.length - 1;

    while (i < j) {
        while (nums[i] !== 5)
            i++;
        while (nums[j] === 5)
            j--;

        [nums[i],nums[j]] = [nums[j],nums[i]];

        i++;
        j--;
    }

    return nums;
};

module.exports = {
    fiveSort
};
