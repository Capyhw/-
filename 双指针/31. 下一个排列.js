function swap(arr, left, right) {
  let tmp = arr[left];
  arr[left] = arr[right];
  arr[right] = tmp;
}
//翻转数组中某一部分
function myReverse(arr, start = 0, end = arr.length - 1) {
  while (start < end) {
    let tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;
    start++;
    end--;
  }
  return arr;
}
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length == 1) return nums;
  let len = nums.length;
  let i = len,
    j = len,
    flag = false;
  for (; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      i--;
      flag = true;
      break;
    }
  }
  if (flag) {
    for (; j > 0; j--) {
      if (nums[j] > nums[i]) {
        swap(nums, j, i);
        myReverse(nums, i + 1);
        break;
      }
    }
  } else {
    myReverse(nums);
  }
  return nums;
};
console.log(nextPermutation([1, 2, 7, 4, 3, 1]));
