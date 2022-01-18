// <= in the while loop condition Would remove need for check
// after loop, but adds an extra op per iteration

const compress = (s) => {
    let res = "";
    let i = 0;
    let j = 0;

    while (j < s.length) {
        if (s[j] === s[i])
        j++;
        else {
            if (j - i !== 1)
                res += j - i;
            res += s[i];
            i = j;
        }
    }

    if (j - i !== 1)
        res += j - i;
    res += s[i];

    return res;
};

module.exports = {
    compress
};
