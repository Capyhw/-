function swap(arr, left, right) {
  [arr[left], arr[right]] = [arr[right], arr[left]];
}

var sortColors = function (nums) {
  let left = 0,
    right = nums.length - 1,
    index = 0;
  while (index <= right) {
    console.log(1);
    if (nums[index] == 0) {
      swap(nums, left++, index++);
      console.log(nums);
    } else if (nums[index] == 1) {
      index++;
      console.log(nums);
    } else if (nums[index] == 2) {
      swap(nums, index, right--);
      console.log(nums);
    }
  }
  return nums;
};

sortColors([2, 0, 2, 1, 1, 0])
