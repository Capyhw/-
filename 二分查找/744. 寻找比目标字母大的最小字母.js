/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    let l = 0, r = letters.length - 1, mid
    if (letters[r] <= target) return letters[0]

    while (l <= r) {
        mid = l + Math.floor((r - l) / 2)
        if (letters[mid] > target) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return letters[l]
};
