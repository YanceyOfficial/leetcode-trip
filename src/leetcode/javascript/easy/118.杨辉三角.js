/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const dp = new Array(numRows)
  for (let i = 0; i < numRows; i++) {
    dp[i] = new Array(i + 1)
    dp[i][0] = 1
    dp[i][i] = 1

    for (let j = 1; j < i; j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
    }
  }

  return dp
}
// @lc code=end
