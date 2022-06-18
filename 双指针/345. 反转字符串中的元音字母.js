/**
 * @param {string} s
 * @return {string}
 */
function isV(params) {
  return /[aeiou]/i.test(params);
}

var reverseVowels = function (s) {
  let arr = s.split("");
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    if (!isV(arr[i])) {
      i++;
    }
    if (!isV(arr[j])) {
      j--;
    }
    if (isV(arr[i]) && isV(arr[j])) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  return arr.join("");
};
