/**
 * @param {number} n
 * @return {boolean}
 */

let getNext = function (n) {
  let total = 0;
  while (n > 0) {
    let num = n % 10;
    total += num ** 2;
    n = Math.floor(n / 10);
  }
  return total;
};
let isHappy = function (n) {
  let slow = n;
  let fast = getNext(n);
  //当快慢指针相遇，代表形参环路，该数不是快乐数。
  while (fast !== 1 && fast !== slow) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }
  return fast === 1;
};
