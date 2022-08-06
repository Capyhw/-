/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
//map
var twoSum = function (numbers, target) {
  let map = new Map();
  let res = [];
  numbers.forEach((item, index) => {
    if (!map.get(target - item)) {
      map.set(item, index + 1);
    } else {
      res.push(map.get(target - item), index + 1);
    }
  });
  return res;
};

//双指针
var twoSum = function (numbers, target) {
  let i = 0,
    j = numbers.length - 1;
  while (i < j) {
    let sum = numbers[i] + numbers[j];
    if (sum == target) return [i + 1, j + 1];
    else if (sum < target) i++;
    else j--;
  }
};

twoSum([2, 7, 11, 15], 9);
