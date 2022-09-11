/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let res = 0;
  for (let value of nums) {
    res ^= value;
  }
  return res;
};
