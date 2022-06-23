/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  let map = new Map();
  for (let c of s) {
    // 没有的话就存的是true  有了存的就是false
    map.set(c, !map.has(c));
  }
  // 如果s很多的话  那么 利用有序哈希表的性质更快一些
  for (let [key, val] of map.entries()) {
    if (val) return key;
  }
  return " ";
};
