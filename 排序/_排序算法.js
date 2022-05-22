function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}
//冒泡排序
function maopao(arr) {
  const { length: n } = arr;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }
  return arr;
}
//选择排序:找出从第i个到最后中最小的与第i个交换
function xuanze(arr) {
  const { length: n } = arr;
  let minIndex;
  for (let i = 0; i < n; i++) {
    minIndex = i;
    for (let j = i; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr, minIndex, i);
  }
  return arr;
}
//插入排序
function insertSort(arr) {
  const { length: n } = arr;
  for (let i = 1; i < n; i++) {
    let j = i;
    let tmp = arr[j];
    while (j > 0 && tmp < arr[j - 1]) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = tmp;
  }
  return arr;
}
//希尔排序
function shellSort(arr) {
  let temp,
    gap = 1;
  const { length: n } = arr;
  while (gap < n / 3) {
    //动态定义间隔序列
    gap = gap * 3 + 1;
  }
  for (; gap > 0; gap = Math.floor(gap / 3)) {
    for (let i = gap; i < n; i++) {
      let j = i;
      tmp = arr[j];
      while (j > 0 && tmp < arr[j - gap]) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = tmp;
    }
  }
  return arr;
}
//归并排序

//快速排序  对arr的【left，right】进行排序
function quickSort(arr, L, R) {
  if (L >= R) return;
  let left = L,
    pivot = arr[left],
    right = R;
  while (left < right) {
    while (left < right && arr[right] >= pivot) {
      right--;
    }
    if (left < right) arr[left] = arr[right];
    while (left < right && arr[left] < pivot) {
      left++;
    }
    if (left < right) arr[right] = arr[left];
    if (left >= right) arr[left] = pivot;
  }
  quickSort(arr, L, right - 1);
  quickSort(arr, right + 1, R);
  return arr;
}

arr = [2, 3, 6, -1, -5];
console.log(quickSort(arr, 0, 4));
