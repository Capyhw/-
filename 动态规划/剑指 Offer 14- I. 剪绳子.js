/**
 * @param {number} n
 * @return {number}
 */

/* 
    当 i ≥ 2 时，长度为 i 绳子,将 i 剪成 j 和 i-j 长度的绳子
1.且 i−j 不再继续剪，此时的乘积是 j×(i−j) ；
2.且 i−j 继续剪成多段长度的绳子，此时的乘积是 j×dp[i−j] 。
    因此，当 j 固定时，有 dp[i]=max(j×(i−j),j×dp[i−j])。
 */

var cuttingRope = function (n) {
  let dp = new Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 0;
  dp[2] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
    }
  }
  return dp[n];
};
//贪心算法 尽可能多的分出长度为3的小段，这样乘积最大（求导）
var cuttingRope = function (n) {
  if (n < 4) return n - 1;
  if (n == 4) return 4;//这一行可以去掉，当n=4时，res * n=4
  let res = 1;
  while (n > 4) {
    res *= 3;
    n -= 3;
  }
  return res * n;
};
