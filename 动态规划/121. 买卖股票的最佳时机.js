/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minprice = prices[0],
    res = 0;
  for (let i = 0; i < prices.length; i++) {
    minprice = Math.min(minprice, prices[i]);
    res = Math.max(res, prices[i] - minprice);
  }
  return res;
};
