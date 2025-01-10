/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  const n = nums.length
  let max = 1

  const dp = new Array(n).fill(1)
  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1]) {
      dp[i] = dp[i - 1] + 1
    }
    max = Math.max(max, dp[i])
  }

  return max
}
// @lc code=end
console.log(findLengthOfLCIS([1, 3, 5, 4, 7])) // 3
console.log(findLengthOfLCIS([2, 2, 2, 2, 2])) // 1
console.log(findLengthOfLCIS([1, 3, 5, 7])) // 4
