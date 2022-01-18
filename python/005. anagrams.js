const anagrams = (s1, s2) => {
    if (s1.length !== s2.length)
        return false;

    let map = {};

    for (let c of s1){
        if (c in map)
            map[c]++;
        else
            map[c] = 1;
    }

    for (let c of s2) {
        if (c in map)
            map[c]--;
        else
            return false;
    }

    for (let key in map) {
        if (map[key] !== 0)
            return false;
    }

    return true;
};

module.exports = {
    anagrams
};
