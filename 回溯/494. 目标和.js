/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let res = 0;
  const backtracking = (start, sum) => {
    if (start == nums.length) {
      if (sum == target) {
        res++;
        return;
      }
    } else {
      backtracking(start + 1, sum + nums[start]);
      backtracking(start + 1, sum - nums[start]);
    }
  };

  backtracking(0, 0);
  return res;
};

//方法二:动态规划
/**
 * nums的数字总和为sum(忽略符号)
 * 添加-号的数字之和为neg(忽略符号)
 * 添加+号的数字之和为sum-neg
 * target=(sum-neg)-neg
 * neg=(sum-target)/2
 * 问题转换成:求nums中选取若干元素
 * 使其和为neg的方案数
 *  dp[i][j]表示在数组nums 的前 i 个数中选取元素
 * 使得这些元素之和等于 j 的方案数
 * 初始值:dp[0][0]=1,dp[0][j]=0
 * 当nums[i]>j dp[i][j]=dp[i-1][j]
 * 当nums[i]<=j dp[i][j]=dp[i-1][j]+dp[i-1][j-m]
 * (nums[i]可取可不取)
 *   */

var findTargetSumWays = function (nums, target) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  let neg = sum - target;
  if (neg < 0 || neg % 2 != 0) return 0;
  neg = neg / 2;
  let dp = new Array(neg + 1).fill(0);
  dp[0] = 1;
  for (let num of nums) {
    for (let j = neg; j >= num; j--) {
      dp[j] += dp[j - num];
    }
  }
  return dp[neg];
};
