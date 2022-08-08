/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;
  //数组初始化为0
  const dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));

  for (let i = 0; i < m + 1; i++) {
    for (let j = 0; j < n + 1; j++) {
      if (i == 0) dp[i][j] = j;
      else if (j == 0) dp[i][j] = i;
      else if (word1.charAt(i - 1) == word2.charAt(j - 1))
        dp[i][j] = dp[i - 1][j - 1];
      else
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
    }
  }
  return dp[m][n];
};

//优化后
