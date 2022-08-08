var cuttingRope = function (n) {
  if (n < 4) return n - 1;
  const M = 1000000007;
  let res = 1;
  while (n > 4) {
    n -= 3;
    res = (res * 3) % M;
  }
  res = (res * n) % M;
  return res;
};
