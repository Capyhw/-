/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  if (nums.length == 1) return nums[0];

  const maxVal = Math.max(...nums);
  const newArr = new Array(maxVal + 1).fill(0);
  //将nums重组成以nums【i】值为索引，个数*值为newArr的值
  for (let i = 0; i < nums.length; i++) {
    newArr[nums[i]] += nums[i];
  }
  //下面就是打家劫舍
  let res = [newArr[0], Math.max(newArr[0], newArr[1])];
  for (let i = 2; i < newArr.length; i++) {
    res[i] = Math.max(res[i - 1], res[i - 2] + newArr[i]);
  }
  return res[newArr.length - 1];
};
