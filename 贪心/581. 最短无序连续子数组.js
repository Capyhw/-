/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let sorted = [...nums].sort((a, b) => a - b);
  let l = 0,
    r = nums.length - 1;
  while (l < nums.length - 1 && nums[l] == sorted[l]) {
    l++;
  }
  while (r > 0 && nums[r] == sorted[r]) {
    r--;
  }
  return r - l > 0 ? r - l + 1 : 0;
};

var findUnsortedSubarray = function (nums) {
  let len = nums.length;
  let min = nums[len - 1];
  let max = nums[0];
  let begin = 0,
    end = -1;
  //遍历
  for (let i = 0; i < len; i++) {
    if (nums[i] < max) {
      //从左到右维持最大值,寻找右边界end
      end = i;
    } else {
      max = nums[i];
    }
    if (nums[len - i - 1] > min) {
      //从右到左维持最小值,寻找左边界begin
      begin = len - i - 1;
    } else {
      min = nums[len - i - 1];
    }
  }
  return end - begin + 1;
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
