/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//hash表
var twoSum = function (nums, target) {
  let map = new Map(),
    res = [0, 0];
  for (let i = 0; i < nums.length; i++) {
    if (map.get(target - nums[i])) {
      res = [nums[i], target - nums[i]];
      break;
    } else {
      map.set(nums[i], nums[i]);
    }
  }
  return res;
};
//双指针
var twoSum = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let tempSum = nums[left] + nums[right];
    if (tempSum > target) right--;
    else if (tempSum < target) left++;
    else return [nums[left], nums[right]];
  }
};
