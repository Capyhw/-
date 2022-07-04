var divide = function (a, b) {
  const INT_MIN = -2147483648;
  const INT_MAX = 2147483647;
  const sign = (a ^ b) >= 0 ? 1 : -1; //标志
  if (a == INT_MIN && b == -1) return INT_MAX;
  let res = 0;
  // 处理边界，防止转正数溢出
  // 被除数先减去一个除数
  if (a == INT_MIN) {
    a = a + Math.abs(b);
    res += 1;
  }
  a = Math.abs(a);
  b = Math.abs(b);
  for (let x = 31; x >= 0; x--) {
    if (a >> x >= b) {
      a = a - (b << x);
      res = res + (1 << x);
    }
  }
  return sign == 1 ? res : -res;
};
