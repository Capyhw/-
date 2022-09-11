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

var multiply = function (num1, num2) {
  if (num1 == "0" || num2 == "0") {
    return "0";
  }
  let ans = "0";
  let m = num1.length,
    n = num2.length;
  for (let i = n - 1; i >= 0; i--) {
    let curr = "";
    let add = 0;
    for (let j = n - 1; j > i; j--) {
      curr = curr + "0";
    }
    let y = num2.charAt(i) - "0";
    for (let j = m - 1; j >= 0; j--) {
      let x = num1.charAt(j) - "0";
      let product = x * y + add;
      curr = (product % 10) + curr;
      add = ~~(product / 10);
    }
    if (add != 0) {
      curr = (add % 10) + curr;
    }
    ans = addStrings(ans, curr);
  }
  return ans;
};
