/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let n = nums.length,
    res = new Array();
  for (let i = 0; i < n; i++) {
    nums[(nums[i] - 1) % n] += n;
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] <= n) res.push(i + 1);
  }
  return res;
};
