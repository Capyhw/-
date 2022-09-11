/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 对于数组中非答案的元素,每一个元素都出现了 3 次,对应着第 i 个二进制位的 3 个 0 或 3 个 1
 * 无论是哪一种情况,它们的和都是 3 的倍数(即和为 0 或 3)
 * 对 3 取余,得到的结果一定为 0 或 1,即为答案的第 i 个二进制位
 */
var singleNumber = function (nums) {
  let ans = 0;
  for (let i = 0; i < 32; ++i) {
    let total = 0;
    for (const num of nums) {
      total += (num >> i) & 1;
    }
    if (total % 3 == 1) {
      ans |= 1 << i;
    }
  }
  return ans;
};
console.log(singleNumber([2, 2, 3, 2]));
