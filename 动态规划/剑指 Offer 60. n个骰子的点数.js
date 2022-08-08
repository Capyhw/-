/**
 * @param {number} n
 * @return {number[]}
 */
var dicesProbability = function (n) {
  // dp数组，用于记录n个骰子时所有可能的点数和所对应的排列数。
  // 注意跳过下标0，方便计算。因为不可能有0个骰子的情况和点数和是0的情况。
  let dp = new Array(n + 1).fill().map(() => new Array(6 * n + 1).fill(0));
  //初始化
  for (let i = 1; i <= 6; i++) {
    dp[1][i] = 1;
  }
  // 状态转移：dp[numberOfDice][sumValue] = 累加(currentPoints=1~6)(dp[numberOfDice-1][sumValue-currentPoints])
  for (let i = 2; i <= n; i++) {
    for (let j = i; j <= i * 6; j++) {
      for (let k = 1; k <= 6; k++) {
        if (j <= k) break;
        dp[i][j] += dp[i - 1][j - k];
      }
    }
  }
  let res = new Array(5 * n + 1);
  const all = Math.pow(6, n);
  for (let i = 0; i < res.length; i++) {
    res[i] = dp[n][n + i] / all;
  }
  return res;
};

//优化后
/**
 * 2个骰子，可以分解为：n-1个骰子 和 1个骰子(点数为1-6)
 * => 推导公式：dp[n][s] = dp[n-1][s-1] + dp[n-1][s-2] + dp[n-1][s-3] + dp[n-1][s-4] + dp[n-1][s-5] + dp[n-1][s-6]
 * @param {number} n
 * @return {number[]}
 */
var dicesProbability = function (n) {
  let pre = new Array(6).fill(1 / 6); //n=1 时

  for (let i = 2; i <= n; i++) {
    let dp = new Array(5 * i + 1).fill(0);
    for (let j = 0; j < pre.length; j++) {
      for (let k = 0; k < 6; k++) {
        dp[j + k] += pre[j] * (1 / 6);
      }
    }
    pre = dp;
  }
  return pre;
};
