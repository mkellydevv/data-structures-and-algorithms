// Instead of storing the index for comparison along with count, we can
// store just the count, and do a second pass of the string to determine
// the index of the character with the highest count. This will be less
// efficient for long strings.

const mostFrequentChar = (s) => {
    let map = {};
    let resChar = null;
    let resCount = 0;
    let resIndex = Infinity;

    for (let i = 0; i < s.length; i++) {
        if (s[i] in map)
            map[s[i]][0]++;
        else
            map[s[i]] = [1,i];
    }

    for (let k in map) {
        if (map[k][0] > resCount || (map[k][0] === resCount && map[k][1] < resIndex)) {
            resChar = k;
            resCount = map[k][0];
            resIndex = map[k][1];
        }
    }

    return resChar;
};

module.exports = {
    mostFrequentChar
};
