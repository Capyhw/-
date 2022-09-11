let n = 4;
let arr1 = [2, 3, 4, 5];
let arr2 = [2, 5, 2, 4];

let map = new Map();
arr1.forEach((item, index) => {
  map.set(item, arr2[index]);
});
let res = 0;

let back = (tmp, w) => {
  if (tmp >= arr1[n - 1]) {
    if (w > res) {
      res = w;
    }
    return;
  }

  back(2 * tmp, w + map.get(2 * tmp));
  back(2 * tmp + 1, w + map.get(2 * tmp + 1));
};

back(1, 0);
console.log(res);
