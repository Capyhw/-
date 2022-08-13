/**
 * @param {number[]} height
 * @return {number}
 */
/**
 * 注意:if (height[l] <= height[r]) l++;
 * 为什么?
 * 因为如果 height[l] <= height[r] ,
 * 将右指针向左移动,即使右指针(新的height-旧的height)>(旧的i-新的i)
 * 经过Math.min(height[l], height[r])得到的还是height[l]
 */
var maxArea = function (height) {
  let l = 0,
    r = height.length - 1,
    max = 0;
  while (l < r) {
    let s = Math.min(height[l], height[r]) * (r - l);
    max = Math.max(max, s);
    if (height[l] <= height[r]) l++;
    else r--;
  }
  return max;
};
