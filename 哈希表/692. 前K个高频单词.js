/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const map = new Map();
  words.forEach((n) => {
    map.set(n, map.get(n) ? map.get(n) + 1 : 1);
  });
  const list = Array.from(map).sort((a, b) => {
    if (b[1] == a[1]) {
      return a[0] < b[0] ? -1 : 1;
    } else {
      return b[1] - a[1];
    }
  });
  return list.slice(0, k).map((i) => i[0]);
};
