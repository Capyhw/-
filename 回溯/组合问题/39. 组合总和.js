/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let path = new Array(),
    res = new Array();

  const backtracking = (startIndex, sum) => {
    if (sum == target) {
      res.push([...path]);
      return;
    }
    if (sum > target) return;
    for (let i = startIndex; i < candidates.length; i++) {
      path.push(candidates[i]);
      sum += candidates[i];
      //递归
      backtracking(i, sum);
      //回溯
      sum -= candidates[i];
      path.pop();
    }
  };
  backtracking(0, 0);
  return res;
};
