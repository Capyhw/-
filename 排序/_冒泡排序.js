function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
}
//冒泡排序
function maopao(arr) {
    const { length: n } = arr
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) swap(arr, j, j + 1)
        }
    }
    return arr
}
//选择排序:找出从第i个到最后中最小的与第i个交换
function xuanze(arr) {
    const { length: n } = arr
    let minIndex
    for (let i = 0; i < n - 1; i++) {
        minIndex = i
        for (let j = i; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        swap(arr, minIndex, i)
    }
    return arr
}
//插入排序
function guibing(arr) {
    const { length: n } = arr
    for (let i = 1; i < n; i++) {
        let j = i
        let tmp = arr[j]
        while (j > 0 && tmp < arr[j - 1]) {
            arr[j] = arr[j - 1]
            j--
        }
        arr[j] = tmp
    }
    return arr
}
console.log(guibing([2, 1, 6, -1]))

