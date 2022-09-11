/**
 * 当 mid 是偶数时,mid+1=mid⊕1
 * 当 mid 是奇数时,mid−1=mid⊕1
 */
var singleNonDuplicate = function (nums) {
  let low = 0,
    high = nums.length - 1;
  while (low < high) {
    const mid = (high + low) >> 1;
    if (nums[mid] === nums[mid ^ 1]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return nums[low];
};
