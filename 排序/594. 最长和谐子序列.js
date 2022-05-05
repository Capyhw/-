/**
 * @param {number[]} nums
 * @return {number}
 */
//滑动窗口法
// var findLHS = function (nums) {
//     nums.sort((a, b) => a - b)
//     let max = i = 0, n = nums.length
//     for (let j = 1; j < n; j++) {
//         while (nums[j] - nums[i] > 1) {
//             i++;
//         }
//         if (nums[j] - nums[i] === 1) {
//             max = Math.max(max, j - i + 1);
//         }
//     }
//     return max
// };
//哈希表
var findLHS = function (nums) {
    const cnt = new Map();
    let res = 0;
    for (const num of nums) {
        cnt.set(num, (cnt.get(num) || 0) + 1);
    }
    for (const key of cnt.keys()) {
        if (cnt.has(key + 1)) {
            res = Math.max(res, cnt.get(key) + cnt.get(key + 1));
        }
    }
    return res;
};
console.log(findLHS([1, 2]));
