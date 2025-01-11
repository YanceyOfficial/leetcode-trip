/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  const m = nums1.length
  const n = nums2.length
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))

  let max = 0
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      }

      max = Math.max(dp[i][j], max)
    }
  }

  return max
}
// @lc code=end

console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7])) // 3
