/**
 * @param {number[]} nums
 * @return {number}
 */
//先排序再转为Set去重，然后遍历
var thirdMax = function (nums) {
    let set = new Set(nums.sort((a, b) => b - a))
    let n = 0
    for (let i of set) {
        if (set.size < 3) return i
        if (n === 2) {
            return i
        } else {
            n++
        }
    }
};


//先去重再转为数组排序
var thirdMax = function (nums) {
    let set = [...new Set(nums)].sort((a, b) => b - a)
    return set[2] ?? set[0]
};
console.log(thirdMax([3, 3, 4, 3, 4, 3, 0, 3, 3]));
