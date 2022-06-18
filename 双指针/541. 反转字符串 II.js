var reverseStr = function (s, k) {
  const n = s.length;
  const arr = Array.from(s);
  for (let i = 0; i < n; i += 2 * k) {
    //如果剩余字符少于 k 个，则将剩余字符全部反转。
    if (n - i < k) reverse(arr, i, n - 1);
    //如果剩余字符大于等于 k 个，则将前 k 个字符反转，后 k 个字符不变。
    if (n - i >= k) reverse(arr, i, i + k - 1);
  }
  return arr.join("");
};

const reverse = (arr, left, right) => {
  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
};
