/*
 * @lc app=leetcode.cn id=673 lang=javascript
 *
 * [673] 最长递增子序列的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  const n = nums.length
  const dp = new Array(n).fill(1)
  const count = new Array(n).fill(1)

  let max = 1
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1
          count[i] = count[j]
        } else if (dp[j] + 1 === dp[i]) {
          count[i] += count[j]
        }
      }
    }

    max = Math.max(dp[i], max)
  }

  console.log(count)

  let ans = 0
  for (let i = 0; i < n; i++) {
    if (dp[i] == max) {
      ans += count[i]
    }
  }

  return ans
}
// @lc code=end
console.log(findNumberOfLIS([1, 3, 5, 4, 7]))
