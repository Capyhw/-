/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let path = new Array(),
    res = new Array();

  const backtracking = (used) => {
    if (path.length == nums.length) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      // used[i - 1] == true,说明同⼀树⽀nums[i - 1]使⽤过
      // used[i - 1] == false,说明同⼀树层nums[i - 1]使⽤过
      if ((i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) || used[i])
        continue;
      path.push(nums[i]);
      used[i] = true;
      backtracking(used);
      path.pop();
      used[i] = false;
    }
  };
  nums.sort((a, b) => a - b); //记得给nums排序
  backtracking(new Array());
  return res;
};

console.log(permuteUnique([1, 2, 3]));
