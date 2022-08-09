/**
 * 方法一：
 * 首先，我们从左到右遍历字符串，对于遇到的每个 '(' 增加left
 * 对于遇到的每个 ')'，增加right
 * 每当 left ==right 时，更新目前为止找到的最长子字符串
 * 当right >left 时，说明这一段string无效，将left 和 right 归0
 * 注意：这样当'(' 一直大于')'时，无法求出max
 * 所以要从右向左遍历一遍，当left>right时归0
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let left = 0,
    right = 0,
    max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      left++;
    } else {
      right++;
    }
    if (left == right) max = Math.max(max, 2 * left);
    else if (right > left) left = right = 0;
  }
  left = right = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == "(") {
      left++;
    } else {
      right++;
    }
    if (left == right) max = Math.max(max, 2 * left);
    else if (right < left) left = right = 0;
  }
  return max;
};

/**
 * 方法二：动态规划
 * dp[i] 表示以下标 i 字符结尾的最长有效括号的长度
 * 当 s[i]=')'且 s[i-1]='(' dp[i]=dp[i−2]+2
 * 当 s[i]=')'且 s[i-1]=')',也就是字符串形如 “……))”
 *     如果 s[i-dp[i-1]-1]='('  dp[i]=dp[i-1]+ dp[i-dp[i-1]-2]+2
 *     说明：因为如果s[i-dp[i-1]-1]='(' ,
 *          那么dp[i-1]就是独立的子串，不包含dp[i-dp[i-1]-2]
 *          所以要加上，并且加上s[i]=')' 和s[i-dp[i-1]]='(' 这两个
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let dp = new Array(s.length + 1).fill(0);
  let max = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] == ")") {
      if (s[i - 1] == "(") {
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
      } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] == "(") {
        dp[i] =
          dp[i - 1] + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
      }
      max = Math.max(max, dp[i]);
    }
  }
  return max;
};
//方法三：遍历中心+中心扩展
var longestValidParentheses = function (s) {
  let arr = s.split("");
  let max = 0;
  let map = new Map();
  //中心拓展
  let expand = function (arr, l, r) {
    while (l >= 0 && r < arr.length && arr[l] == "(" && arr[r] == ")") {
      l--;
      r++;
    }
    //如果触碰到之前拓展过的括号，说明这两个有效括号是连续的
    if (map.has(l)) {
      // 继续递归扩展
      return expand(arr, map.get(l) - 1, r);
    }
    map.set(r - 1, l + 1); // (右, 左)
    return r - 1;
  };
  // 遍历中心
  for (let c = 0; c < arr.length - 1; c++) {
    if (arr[c] == "(" && arr[c + 1] == ")") {
      let r = expand(arr, c, c + 1);
      max = Math.max(max, r - map.get(r) + 1);
      c = r;
    }
  }
  return max;
};
