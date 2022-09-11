var permutation = function (nums) {
  let path = "",
    res = new Array();
    
  const backtracking = (used) => {
    if (path.length == nums.length) {
      res.push(path);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if ((i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) || used[i])
        continue;
      path += nums[i];
      used[i] = true;
      backtracking(used);
      path = path.substring(0, path.length - nums[i].length);
      used[i] = false;
    }
  };
  //字符串排序
  nums = Array.from(nums).sort().join("");
  backtracking(new Array());
  return res;
};

/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (nums) {
  let path = new Array(),
    res = new Array();

  const backtracking = (used) => {
    if (path.length == nums.length) {
      res.push(path.join(""));
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if ((i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) || used[i])
        continue;
      path.push(nums[i]);
      used[i] = true;
      backtracking(used);
      path.pop(nums[i]);
      used[i] = false;
    }
  };
  //字符串排序
  nums = Array.from(nums).sort().join("");
  backtracking(new Array());
  return res;
};
