/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let path = new Array(),
    res = new Array();

  const backtracking = (start) => {
    //不需要终止条件
    res.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtracking(i + 1);
      path.pop();
    }
  };
  backtracking(0);
  return res;
};
