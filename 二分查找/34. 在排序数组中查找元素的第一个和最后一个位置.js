/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//红蓝二分法 https://www.bilibili.com/video/BV1d54y1q7k7?vd_source=cb5cbcbf5319c1753803d57ffc65a237
var searchRange = function (nums, target) {
  if (nums.length == 0) return [-1, -1];
  if (nums.length == 1) return nums[0] == target ? [0, 0] : [-1, -1];
  let l = -1,
    r = nums.length;
  let res = new Array(2);
  while (l + 1 != r) {
    let mid = (l + r) >> 1;
    if (nums[mid] < target) {
      l = mid;
    } else {
      r = mid;
    }
  }
  res[0] = r;
  l = -1;
  r = nums.length;
  while (l + 1 != r) {
    let mid = (l + r) >> 1;
    if (nums[mid] > target) {
      r = mid;
    } else {
      l = mid;
    }
  }
  res[1] = l;
  if (res[0] > res[1]) return [-1, -1];
  return res;
};
