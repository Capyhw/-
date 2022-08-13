/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let res = new Array();
  let oneNum = (num) => {
    let str = num.toString(2),
      res = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == "1") res += 1;
    }
    return res;
  };
  for (let i = 0; i <= n; i++) {
    res[i] = oneNum(i);
  }
  return res;
};

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let res = new Array();
  res[0] = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      res[i] = res[i / 2];
    } else {
      res[i] = res[i - 1] + 1;
    }
  }
  return res;
};
