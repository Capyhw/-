/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let path = new Array(),
    res = new Array();
  const backtracking = (startIndex, sum) => {
    if (sum == n && path.length == k) {
      res.push([...path]);
      return;
    }
    if (path.length == k) return;
    if (sum > n) return;
    for (let i = startIndex; i < 10; i++) {
      //i > startIndex 表示跳过同一树层使用过的元素(树枝上可以有重复的)
      //   if (i > startIndex && candidates[i] == candidates[i - 1]) continue;
      path.push(i);
      sum += i;
      //递归
      backtracking(i + 1, sum); //不能重复使用同一个数,所以i + 1
      //回溯
      sum -= i;
      path.pop();
    }
  };
  backtracking(1, 0);
  return res;
};
console.log(combinationSum3(3, 9));
