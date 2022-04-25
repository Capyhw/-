/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 1) return 0
    if (x < 4) return 1
    if (x == 4) return 2
    let l = 2, r = ~~(x / 2), mid
    while (l < r) {
        mid = ~~((l + r + 1) / 2)
        if (mid * mid > x) {
            r = mid - 1
        } else {
            l = mid
        }
    }
    return l
};
