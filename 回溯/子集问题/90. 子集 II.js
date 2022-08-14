/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let path = new Array(),
    res = new Array();
  nums.sort((a, b) => a - b); //别忘了排序
  const backtracking = (start) => {
    //不需要终止条件
    res.push([...path]);
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] == nums[i - 1]) continue;
      path.push(nums[i]);
      backtracking(i + 1);
      path.pop();
    }
  };
  backtracking(0);
  return res;
};
