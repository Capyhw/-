/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let n = height.length;
  if (n == 0) return 0;
  let maxL = new Array(n),
    maxR = new Array(n),
    res = 0;
  maxR[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    maxR[i] = Math.max(maxR[i + 1], height[i]);
  }
  maxL[0] = height[0];
  for (let i = 1; i < n; i++) {
    maxL[i] = Math.max(maxL[i - 1], height[i]);
    res += Math.min(maxL[i], maxR[i]) - height[i];
  }
  return res;
};
