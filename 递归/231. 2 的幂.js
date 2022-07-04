/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n === 1) return true;
  if (n === 0) return false;
  if (n % 2 === 0) return isPowerOfTwo(n / 2);
  return false;
};

// ------------------------------------------------------------
// 2的幂数的数字的二进制有且只有一个1，其余均是0
let isPowerOfTwo = (n) => {
  // n & (n-1)：清零最低位的1
  return n > 0 && (n & (n - 1)) === 0;
};
