/*
 * @lc app=leetcode.cn id=1035 lang=javascript
 *
 * [1035] 不相交的线
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function (nums1, nums2) {
  const m = nums1.length
  const n = nums2.length

  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[m][n]
}
// @lc code=end
console.log(maxUncrossedLines([1, 4, 2], [1, 2, 4])) // 2
// console.log(maxUncrossedLines([2, 5, 1, 2, 5], [10, 5, 2, 1, 5, 2])) // 3
// console.log(maxUncrossedLines([1, 3, 7, 1, 7, 5], [1, 9, 2, 5, 1])) // 2
