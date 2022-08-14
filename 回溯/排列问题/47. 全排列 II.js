/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * 递归函数参数: 排列问题是有序的,所以不需要start
 *             但需要used数组,标记用过的元素
 * 递归终止条件: path.length == nums.length
 * 单层搜索的逻辑: 增加对used的处理
 *
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
      // 这题都可以,但对树层去重效率高
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
