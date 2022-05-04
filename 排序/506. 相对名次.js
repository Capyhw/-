//二维数组
// var findRelativeRanks = function (score) {
//     const n = score.length;
//     const desc = ["Gold Medal", "Silver Medal", "Bronze Medal"];
//     const arr = new Array(n).fill(0).map(() => new Array(2).fill(0))
//     for (let i = 0; i < n; i++) {
//         arr[i][0] = score[i]//分数
//         arr[i][1] = i//初始次序
//     }
//     arr.sort((a, b) => b[0] - a[0])
//     let res = []
//     for (let i = 0; i < n; i++) {
//         if (i < 3) {
//             res[arr[i][1]] = desc[i]
//         }
//         else {
//             res[arr[i][1]] = '' + (i + 1)
//         }
//     }
//     return res
// };

//哈希
var findRelativeRanks = function (score) {
    const n = score.length;
    const desc = ["Gold Medal", "Silver Medal", "Bronze Medal"];
    const map = new Map()
    const res = []
    for (let i = 0; i < n; i++) {
        map.set(score[i], i)
    }
    score.sort((a, b) => b - a)
    for (let i = 0; i < n; i++) {
        if (i < 3) res[map.get(score[i])] = desc[i]
        else res[map.get(score[i])] = "" + (i + 1)
    }
    return res
}

console.log(findRelativeRanks([10, 3, 8, 9, 4]));