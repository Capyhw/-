/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    let l = 0, r = numbers.length - 1, mid
    while (l <= r) {
        mid = l + Math.floor((r - l) / 2)
        if (numbers[mid] > numbers[r]) {
            l = mid + 1
        } else if (numbers[mid] < numbers[r]) {
            r = mid
        } else {
            r -= 1
        }
    }
    return numbers[l]
};