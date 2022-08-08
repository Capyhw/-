/**
 * @param {number} n
 * @return {number}
 */
/**
 * 1,2,3这些丑数×2,3,5也是丑数，所以按升序，将丑数放在dp中
 */
var nthUglyNumber = function (n) {
  let dp = new Array(n + 1);
  dp[0] = 1;
  let a = 0,
    b = 0,
    c = 0;
  for (let i = 1; i < n; i++) {
    dp[i] = Math.min(dp[a] * 2, dp[b] * 3, dp[c] * 5);
    if (dp[i] == dp[a] * 2) a++;
    if (dp[i] == dp[b] * 3) b++;
    if (dp[i] == dp[c] * 5) c++;
  }
  return dp[n - 1];
};
