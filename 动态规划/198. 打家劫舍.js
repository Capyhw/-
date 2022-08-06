/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length == 1) return nums[0];
  let res = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    res[i] = Math.max(res[i - 2] + nums[i], res[i - 1]);
  }
  return res[nums.length - 1];
};
