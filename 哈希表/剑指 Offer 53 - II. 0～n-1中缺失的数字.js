/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  for (let i = 0; i < nums.length + 1; i++) {
    if (nums[i] !== i) return i;
  }
};

//
var missingNumber = function (nums) {
  const set = new Set();
  const n = nums.length + 1;
  for (let i = 0; i < n - 1; i++) {
    set.add(nums[i]);
  }
  let missing = -1;
  for (let i = 0; i <= n - 1; i++) {
    if (!set.has(i)) {
      missing = i;
      break;
    }
  }
  return missing;
};
