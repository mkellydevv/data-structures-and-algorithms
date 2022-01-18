const intersection = (a, b) => {
    const arr = [];
    let smallSet;
    let largeArr;

    if (a.length < b.length) {
        smallSet = new Set(a);
        largeArr = b;
    }
    else {
        smallSet = new Set(b);
        largeArr = a;
    }

    for (let num of largeArr) {
        if (smallSet.has(num))
            arr.push(num);
    }

    return arr;
};

module.exports = {
    intersection
};
