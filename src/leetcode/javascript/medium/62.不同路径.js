/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// var uniquePaths = function (m, n) {
//   const dp = new Array(n).fill(1)
//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       dp[j] = dp[j - 1] + dp[j]
//     }
//   }
//   return dp[n - 1]
// }
// @lc code=end

var uniquePaths = function (m, n) {
  const dp = []
  for (let i = 0; i < m; i++) {
    dp.push(new Array(n).fill(0))
  }

  for (let i = 0; i < m; i++) {
    dp[i][0] = 1
  }

  for (let j = 0; j < n; j++) {
    dp[0][j] = 1
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[m - 1][n - 1]
}

console.log(uniquePaths(3, 7))
