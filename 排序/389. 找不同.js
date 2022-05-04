/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
//位运算
var findTheDifference = function (s, t) {
    if (s.length == 0) return t
    let res = 0
    for (let i = 0; i < s.length; i++) {
        res ^= s[i].charCodeAt()
    }
    for (let i = 0; i < t.length; i++) {
        res ^= t[i].charCodeAt()
    }
    return String.fromCharCode(res)
};

//哈希表
var findTheDifference = function (s, t) {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        //将s字符串中每一个字符以及他出现的次数放入map
        map.set(s[i], map.get(s[i]) === undefined ? 1 : map.get(s[i]) + 1);
    }
    for (let i = 0; i < t.length; i++) {
        //如果某一个字符个数已经为0，又遇到这个字符了，那么，这个就是多加入的那个字符
        //如果map中都没有这个字符，说明这个就是多加入的那个字符
        if (map.get(t[i]) === 0 || map.get(t[i]) === undefined) {
            return t[i];
        } else {
            map.set(t[i], map.get(t[i]) - 1);
        }
    }
};