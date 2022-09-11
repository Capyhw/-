//一般解法 N N
var firstMissingPositive = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], 0);
  }
  for (let i = 1; ; i++) {
    if (!map.has(i)) return i;
  }
};

//原地哈希
var firstMissingPositive = function (nums) {
  let swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  for (let i = 0; i < nums.length; i++) {
    //在【1,nums.length】范围内,且3没在索引为2的位置上
    while (
      0 < nums[i] &&
      nums[i] <= nums.length &&
      nums[nums[i] - 1] != nums[i]
    ) {
      swap(nums, nums[i] - 1, i);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - 1 != i) {
      return i + 1;
    }
  }
  return nums.length + 1;
};
