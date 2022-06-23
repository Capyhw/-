/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = new Map();
  for (let i of nums) {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
    if (map.get(i) > nums.length / 2) {
      return i;
    }
  }
};

//方法二：排序
//排序后，重复次数超过n/2的一定就是下标为n/2的数
