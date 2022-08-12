/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let path = new Array(),
    res = new Array();
  candidates = candidates.sort((a, b) => a - b);

  const backtracking = (startIndex, sum) => {
    if (sum == target) {
      res.push([...path]);
      return;
    }
    if (sum > target) return;
    for (let i = startIndex; i < candidates.length; i++) {
      //i > startIndex 表示跳过同一树层使用过的元素(树枝上可以有重复的)
      if (i > startIndex && candidates[i] == candidates[i - 1]) continue;
      path.push(candidates[i]);
      sum += candidates[i];
      //递归
      backtracking(i + 1, sum); //不能重复使用同一个数,所以i + 1
      //回溯
      sum -= candidates[i];
      path.pop();
    }
  };
  backtracking(0, 0);
  return res;
};
