/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g = g.sort((a, b) => a - b)
    s = s.sort((a, b) => a - b)
    //j是饼干的索引
    let i = j = 0
    while (i < s.length && j < s.length) {
        if (g[i] <= s[j]) {
            //如果这块饼干可以满足，就++判断下一个孩子
            i++
        }
        //无论这块饼干是否可以满足，都需要++，判断下一块饼干
        j++
    }
    return i
};

findContentChildren([10, 9, 8, 7], [5, 6, 7, 8])