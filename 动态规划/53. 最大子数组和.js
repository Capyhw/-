/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0];
  let f = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (f[i - 1] > 0) f[i] = f[i - 1] + nums[i];
    else f[i] = nums[i];
    max = Math.max(max, f[i]);
  }
  return max;
};
