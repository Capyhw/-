//哈希表
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    const num = nums[i];
    if (map.has(num) && i - map.get(num) <= k) {
      return true;
    }
    //这里注意：map中如果有num，再执行set（num，i），会覆盖之前的
    map.set(num, i);
  }
  return false;
};

//滑动窗口
var containsNearbyDuplicate = function (nums, k) {
  const set = new Set();
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    if (i > k) {
      set.delete(nums[i - k - 1]);
    }
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
  }
  return false;
};
