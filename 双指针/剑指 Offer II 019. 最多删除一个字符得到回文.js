/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let l = 0,
    r = s.length - 1;
  const valid = (low, high) => {
    while (low < high) {
      if (s[low] != s[high]) return false;
      low++;
      high--;
    }
    return true;
  };
  while (l < r) {
    if (s[l] != s[r]) {
      return valid(l + 1, r) || valid(l, r - 1);
    } else {
      l++;
      r--;
    }
  }
  return true;
};
