/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * 递归函数参数: 排列问题是有序的,所以不需要start
 *             但需要used数组,标记用过的元素
 * 递归终止条件: path.length == nums.length
 * 单层搜索的逻辑: 增加对used的处理
 */
var permute = function (nums) {
  let path = new Array(),
    res = new Array();

  const backtracking = (used) => {
    if (path.length == nums.length) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      path.push(nums[i]);
      used[i] = true;
      backtracking(used);
      path.pop();
      used[i] = false;
    }
  };
  backtracking(new Array());
  return res;
};

console.log(permute([1, 2, 3]));
