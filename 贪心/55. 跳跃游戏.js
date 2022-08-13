/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 * 设起始点为x,则x ~ x+nums[i]都是可以到的
 * 并且,如果max(为跳的最远长度)>当前的i,就说明x是可以到达的
 * 那么不断向后跳,直到当前的i超过max,返回false
 * 或者return true
 */
var canJump = function (nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i <= max) {
      max = Math.max(max, i + nums[i]);
    } else {
      return false;
    }
  }
  return true;
};
