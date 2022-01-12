const uncompress = (s) => {
    const res = [];
    const nums = new Set(['0','1','2','3','4','5','6','7','8','9'])
    let i = 0;
    let j = 0;
    while (i < s.length) {
        if (!nums.has(s[j])) {
            const num = Number(s.slice(i,j));
            for (let k = 0; k < num; k++)
                res.push(s[j]);
            j++;
            i = j;
        } else {
            j++;
        }
    }
    return res.join("");
};

module.exports = {
    uncompress
};
