const translateNum = (num) => {
  const str = num.toString();
  const n = str.length;
  let pre = 1,
    max = 1,
    tmp;
  for (let i = 0; i < n - 1; i++) {
    let temp = str.slice(i, i + 2);
    if (temp >= 10 && temp <= 25) {
      tmp = max;
      max = pre + max;
      pre = tmp;
    } else {
      pre = max;//这里容易忘
    }
  }
  return max; // 翻译前n个数的方法数，即翻译整个数字
};
