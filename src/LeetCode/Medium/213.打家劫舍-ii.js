/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  var n = nums.length
  if (n == 1) {
    return nums[0]
  } else if (n == 0) {
    return 0
  }
  function dpGO(nums) {
    var n = nums.length
    var dp = Array.from(new Array(n), () => new Array(n))
    dp[0][0] = 0
    dp[0][1] = nums[0]
    for (var i = 1; i < nums.length; i++) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1])
      dp[i][1] = nums[i] + dp[i - 1][0]
    }
    return Math.max(dp[n - 1][0], dp[n - 1][1])
  }
  var need1 = dpGO(nums.slice(1))
  var need2 = dpGO(nums.slice(0, nums.length - 1))
  return Math.max(need1, need2)
}
// @lc code=end
