//使用slice 这个就很慢了
var replaceElements = function (arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (i == n - 1) {
      arr[i] = -1;
      break;
    } else {
      arr[i] = Math.max(...arr.slice(i + 1));
    }
  }
  return arr;
};

//动态规划
/* 执行用时：72 ms, 在所有 JavaScript 提交中击败了93.10%的用户
内存消耗：45.5 MB, 在所有 JavaScript 提交中击败了54.60%的用户 */
var replaceElements = function (arr) {
  let n = arr.length;
  if (n == 1) return [-1];
  let max = arr[n - 1],
    res = [];
  for (let i = n - 1; i > 0; i--) {
    max = Math.max(max, arr[i]);
    res[i - 1] = max;
  }
  res[n - 1] = -1;
  return res;
};
