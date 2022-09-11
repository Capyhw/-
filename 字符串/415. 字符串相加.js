var addStrings = function (num1, num2) {
  let i = num1.length - 1,
    j = num2.length - 1,
    //进位
    add = 0,
    ans = "";
  for (; i >= 0 || j >= 0 || add != 0; i--, j--) {
    const x = i >= 0 ? num1.charAt(i) - "0" : 0;
    const y = j >= 0 ? num2.charAt(j) - "0" : 0;
    const result = x + y + add;
    ans = (result % 10) + ans;
    add = ~~(result / 10);
  }
  return ans;
};
