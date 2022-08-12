/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

var combine = function (n, k) {
  let path = new Array(),
    res = new Array();
  const backtracking = (startIndex) => {
    if (path.length == k) {
      res.push([...path]);
      return;
    }
    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
      path.push(i);
      backtracking(i + 1);
      path.pop(); //回溯
    }
  };
  backtracking(1);
  return res;
};

console.log(combine(4, 2));
