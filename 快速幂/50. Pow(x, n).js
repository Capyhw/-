//快速幂迭代
var myPow = function (x, n) {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let res = 1;
  while (n) {
    if (n % 2) res *= x;
    x *= x;
    n >>>= 1;
  }
  return res;
};

//快速幂递归
var myPow = function (x, n) {
  if (n == 0) return 1;
  if (n < 0) return 1 / myPow(x, -n);
  if (n % 2) return x * myPow(x, n - 1);
  return myPow(x * x, n / 2);
};
