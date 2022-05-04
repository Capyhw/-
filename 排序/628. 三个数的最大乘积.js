//排序
var maximumProduct = function (nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    //都为正/负，取后三个，两负一正，取最后一个和前两个
    return Math.max(nums[0] * nums[1] * nums[n - 1], nums[n - 1] * nums[n - 2] * nums[n - 3]);
};

//线性扫描
var maximumProduct = function (nums) {
    let min1 = min2 = Infinity, max1 = max2 = max3 = -Infinity
    nums.forEach((x) => {
        if (x < min1) {
            min2 = min1;
            min1 = x;
        } else if (x < min2) {
            min2 = x;
        }

        if (x > max1) {
            max3 = max2;
            max2 = max1;
            max1 = x;
        } else if (x > max2) {
            max3 = max2;
            max2 = x;
        } else if (x > max3) {
            max3 = x;
        }
    })
    return Math.max(min1 * min2 * max1, max1 * max2 * max3);
}