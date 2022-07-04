/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
//方法一：不断右移，找到最后一个1，然后取最后一个1的左边的所有1
var rangeBitwiseAnd = function (left, right) {
  if (left === right) return left;
  if (left.toString(2).length != right.toString(2).length) return 0;

  let num = 0;
  while (left != right) {
    left = left >> 1;
    right = right >> 1;
    num++;
  }
  return left << num;
};

//方法二：通过不停的移除right右边的1，直到他小于或等于left为止。那么这个移除后的数字就是我们要求的值。
var rangeBitwiseAnd = function (left, right) {
  while (right > left) {
    right = right & (right - 1);
  }
  return right;
};
