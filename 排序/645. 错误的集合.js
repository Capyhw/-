/**
 * @param {number[]} nums
 * @return {number[]}
 */
//哈希表存数字出现次数
var findErrorNums = function (nums) {
    const errorNums = new Array(2).fill(0);
    const n = nums.length;
    const map = new Map();
    //存放每个数字出现的次数
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (let i = 1; i <= n; i++) {
        const count = map.get(i) || 0;
        if (count === 2) {
            errorNums[0] = i;
        } else if (count === 0) {
            errorNums[1] = i;
        }

    }
    return errorNums;
};

console.log(findErrorNums([1, 2, 2, 4]))