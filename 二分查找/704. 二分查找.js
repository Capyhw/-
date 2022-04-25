/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0, r = nums.length, mid
    while (l <= r) {
        mid = Math.floor((l + r) / 2)
        let temp = nums[mid]
        if (temp == target) return mid
        else if (temp > target) r = mid - 1
        else l = mid + 1
    }
    return -1

};