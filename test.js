let arr1 = [1, 2, 3, 4, 5],
  arr2 = [4, 5, 6, 7, 8];

let diff = arr1.filter((x) => !arr2.includes(x));
console.log(diff);
