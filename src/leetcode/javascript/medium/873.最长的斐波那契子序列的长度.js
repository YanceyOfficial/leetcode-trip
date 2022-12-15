/*
 * @lc app=leetcode.cn id=873 lang=javascript
 *
 * [873] 最长的斐波那契子序列的长度
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
  const n = arr.length

  const map = new Map()
  for (let i = 0; i < n; i++) {
    map.set(arr[i], i)
  }

  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0))

  let ans = 0
  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j >= 0; j--) {
      if (arr[j] * 2 <= arr[i]) {
        break
      }

      if (map.has(arr[i] - arr[j])) {
        const k = map.get(arr[i] - arr[j])
        dp[j][i] = Math.max(dp[k][j] + 1, 3)
        ans = Math.max(ans, dp[j][i])
      }
    }
  }

  return ans
}
// @lc code=end
