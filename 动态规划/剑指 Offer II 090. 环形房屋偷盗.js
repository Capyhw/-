/**
 * @param {number[]} nums
 * @return {number}
 */
//这题和打家劫舍的区别就是：
//如果第一家偷了，最后一家就不能偷 robRange(nums, 0, length - 2)
//如果第一家没偷，最后一家就能偷 robRange(nums, 1, length - 1)
var rob = function (nums) {
  const length = nums.length;
  if (length == 1) return nums[0];
  if (length == 2) return Math.max(nums[0], nums[1]);

  return Math.max(robRange(nums, 0, length - 2), robRange(nums, 1, length - 1));
};

const robRange = (nums, start, end) => {
  let first = nums[start],
    second = Math.max(nums[start], nums[start + 1]);
  for (let i = start + 2; i <= end; i++) {
    const temp = second;
    second = Math.max(first + nums[i], second);
    first = temp;
  }
  return second;
};
